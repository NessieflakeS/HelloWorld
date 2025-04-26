function startNumberGame() {
    const secretNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;
    
    alert("Я загадал число от 1 до 100. Попробуй угадать!");
    
    while(true) {
      const guess = parseInt(prompt("Введи свою догадку:"));
      
      if(isNaN(guess)) {
        alert("Пожалуйста, введи число!");
        continue;
      }
      
      attempts++;
      
      if(guess === secretNumber) {
        alert(`🎉 Поздравляю! Ты угадал за ${attempts} попыток.`);
        break;
      } else if(guess < secretNumber) {
        alert("Моё число БОЛЬШЕ твоего. Попробуй ещё!");
      } else {
        alert("Моё число МЕНЬШЕ твоего. Попробуй ещё!");
      }
    }
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateMathProblem() {
    const operations = ['+', '-', '*', '/'];
    const operation = operations[getRandomNumber(0, 3)];
    
    let num1, num2;
    
    switch(operation) {
        case '+':
            num1 = getRandomNumber(1, 50);
            num2 = getRandomNumber(1, 50);
            break;
        case '-':
            num1 = getRandomNumber(1, 50);
            num2 = getRandomNumber(1, num1); 
            break;
        case '*':
            num1 = getRandomNumber(1, 12);
            num2 = getRandomNumber(1, 12);
            break;
        case '/':
            num2 = getRandomNumber(1, 10);
            const multiplier = getRandomNumber(1, 10);
            num1 = num2 * multiplier; 
            break;
    }
    
    return {
        problem: `${num1} ${operation} ${num2}`,
        answer: eval(`${num1} ${operation} ${num2}`) 
    };
}

function startMathGame() {
    const problemData = generateMathProblem();
    const userAnswer = prompt(`Решите задачу: ${problemData.problem}`);
    
    if (userAnswer === null) {
        alert('Игра отменена.');
        return;
    }
    
    const parsedAnswer = parseFloat(userAnswer);
    
    if (isNaN(parsedAnswer)) {
        alert('Пожалуйста, введите число!');
        startMathGame();
        return;
    }

    if (Math.abs(parsedAnswer - problemData.answer) < 0.0001) {
        alert('Правильно! Молодец!');
    } else {
        alert(`Неправильно. Правильный ответ: ${problemData.answer}`);
    }
    
    if (confirm('Хотите решить еще одну задачу?')) {
        startMathGame();
    }
}

function reverseTextGame() {
    const userInput = prompt("Введите текст, который нужно перевернуть:");
    
    if (userInput === null) {
        alert("Игра отменена.");
        return;
    }
    
    if (!userInput.trim()) {
        alert("Вы не ввели текст!");
        reverseTextGame(); 
        return;
    }
    
    const reversedText = userInput.split('').reverse().join('');
    alert(`Перевернутый текст: ${reversedText}`);
    
    if (confirm("Хотите перевернуть еще один текст?")) {
        reverseTextGame();
    }
}

function startQuiz() {
    const quiz = [
        {
            question: "Какой цвет небо?",
            options: ["1. Красный", "2. Синий", "3. Зеленый"],
            correctAnswer: 2
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 2
        }
    ];

    let score = 0;

    for (let i = 0; i < quiz.length; i++) {
        const currentQuestion = quiz[i];
        
        let questionText = `${currentQuestion.question}\n`;
        questionText += currentQuestion.options.join('\n');
        
        const userAnswer = prompt(questionText);
        
        if (userAnswer === null) {
            if (confirm("Вы уверены, что хотите прервать викторину?")) {
                alert(`Викторина прервана. Ваш счет: ${score}/${quiz.length}`);
                return;
            } else {
                i--; 
                continue;
            }
        }
        
        const answerNumber = parseInt(userAnswer);
        
        if (isNaN(answerNumber) || answerNumber < 1 || answerNumber > 3) {
            alert("Пожалуйста, введите номер ответа (1, 2 или 3)");
            i--; 
            continue;
        }
        
        if (answerNumber === currentQuestion.correctAnswer) {
            score++;
            alert("Правильно!");
        } else {
            alert(`Неправильно. Правильный ответ: ${currentQuestion.correctAnswer}`);
        }
    }
    
    alert(`Викторина завершена! Ваш результат: ${score} из ${quiz.length}`);
    
    if (confirm("Хотите пройти викторину еще раз?")) {
        startQuiz();
    }
}

function rockPaper() {
    const choices = ["камень", "ножницы", "бумага"];
    
    const userChoice = prompt("Выберите: камень, ножницы или бумага?").toLowerCase();
    
    if (userChoice === null) {
        alert("Игра отменена.");
        return;
    }
    
    if (!choices.includes(userChoice)) {
        alert("Пожалуйста, введите одно из значений: камень, ножницы или бумага");
        rockPaper(); 
        return;
    }
    
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    
    let result;
    
    if (userChoice === computerChoice) {
        result = "Ничья!";
    } else if (
        (userChoice === "камень" && computerChoice === "ножницы") ||
        (userChoice === "ножницы" && computerChoice === "бумага") ||
        (userChoice === "бумага" && computerChoice === "камень")
    ) {
        result = "Вы победили!";
    } else {
        result = "Компьютер победил!";
    }
    
    alert(`
        Ваш выбор: ${userChoice}
        Выбор компьютера: ${computerChoice}
        Результат: ${result}
    `);
    
    if (confirm("Хотите сыграть еще раз?")) {
        rockPaper();
    }
}

function startColorGame() {
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    const originalBgColor = document.body.style.backgroundColor;
    const originalElements = [];
    document.querySelectorAll('header, footer, .cart-content, .game-mini').forEach(el => {
        originalElements.push({
            element: el,
            bgColor: el.style.backgroundColor
        });
    });

    function changeBackgroundColor() {
        const randomColor = getRandomColor();
        document.body.style.backgroundColor = randomColor;
        
        if (colorInfo) {
            colorInfo.textContent = `Текущий цвет фона: ${randomColor}`;
        }
    }

    const colorButton = document.createElement('button');
    colorButton.textContent = 'Сменить цвет фона';
    colorButton.className = 'color-change-btn';
    colorButton.style.position = 'fixed';
    colorButton.style.bottom = '20px';
    colorButton.style.right = '20px';
    colorButton.style.padding = '10px 20px';
    colorButton.style.backgroundColor = '#ffffff';
    colorButton.style.color = '#000000';
    colorButton.style.border = '1px solid #000000';
    colorButton.style.borderRadius = '5px';
    colorButton.style.cursor = 'pointer';
    colorButton.style.zIndex = '1000';
    
    const colorInfo = document.createElement('div');
    colorInfo.className = 'color-info';
    colorInfo.style.position = 'fixed';
    colorInfo.style.bottom = '60px';
    colorInfo.style.right = '20px';
    colorInfo.style.padding = '5px 10px';
    colorInfo.style.backgroundColor = '#ffffff';
    colorInfo.style.color = '#000000';
    colorInfo.style.border = '1px solid #000000';
    colorInfo.style.borderRadius = '5px';
    colorInfo.style.zIndex = '1000';
    
    document.body.appendChild(colorButton);
    document.body.appendChild(colorInfo);
    
    colorButton.addEventListener('click', changeBackgroundColor);
    
    changeBackgroundColor();
    
    const closeButton = document.createElement('button');
    closeButton.textContent = 'Закрыть генератор';
    closeButton.style.position = 'fixed';
    closeButton.style.bottom = '20px';
    closeButton.style.left = '20px';
    closeButton.style.padding = '10px 20px';
    closeButton.style.backgroundColor = '#ffffff';
    closeButton.style.color = '#000000';
    closeButton.style.border = '1px solid #000000';
    closeButton.style.borderRadius = '5px';
    closeButton.style.cursor = 'pointer';
    closeButton.style.zIndex = '1000';
    
    closeButton.addEventListener('click', function() {
        document.body.style.backgroundColor = originalBgColor;
        
        originalElements.forEach(item => {
            item.element.style.backgroundColor = item.bgColor;
        });
        
        document.body.removeChild(colorButton);
        document.body.removeChild(colorInfo);
        document.body.removeChild(closeButton);
    });
    
    document.body.appendChild(closeButton);
}
