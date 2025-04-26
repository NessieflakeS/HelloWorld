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
        return '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
    }

    const originalStyles = {
        body: {
            background: document.body.style.background,
            backgroundColor: document.body.style.backgroundColor
        },
        header: {
            background: document.querySelector('header').style.background,
            backgroundColor: document.querySelector('header').style.backgroundColor
        },
        footer: {
            background: document.querySelector('footer').style.background,
            backgroundColor: document.querySelector('footer').style.backgroundColor
        },
        cartContents: Array.from(document.querySelectorAll('.cart-content')).map(el => ({
            background: el.style.background,
            backgroundColor: el.style.backgroundColor
        }))
    };

    function changeBackground() {
        const color = getRandomColor();
        
        document.body.style.background = 'none';
        document.body.style.backgroundColor = color;
        
        document.querySelector('header').style.background = 'none';
        document.querySelector('header').style.backgroundColor = color;
        
        document.querySelector('footer').style.background = 'none';
        document.querySelector('footer').style.backgroundColor = color;
        
        document.querySelectorAll('.cart-content').forEach(el => {
            el.style.background = 'none';
            el.style.backgroundColor = color;
        });

        if (colorInfo) {
            colorInfo.textContent = `Текущий цвет: ${color}`;
        }
    }

    const controlPanel = document.createElement('div');
    controlPanel.style.position = 'fixed';
    controlPanel.style.bottom = '20px';
    controlPanel.style.right = '20px';
    controlPanel.style.display = 'flex';
    controlPanel.style.gap = '10px';
    controlPanel.style.zIndex = '1000';

    const changeBtn = document.createElement('button');
    changeBtn.textContent = 'Сменить цвет';
    changeBtn.style.padding = '10px 20px';
    changeBtn.style.backgroundColor = '#fff';
    changeBtn.style.color = '#000';
    changeBtn.style.border = '1px solid #000';
    changeBtn.style.borderRadius = '5px';
    changeBtn.style.cursor = 'pointer';

    const closeBtn = document.createElement('button');
    closeBtn.textContent = 'Закрыть';
    closeBtn.style.padding = '10px 20px';
    closeBtn.style.backgroundColor = '#fff';
    closeBtn.style.color = '#000';
    closeBtn.style.border = '1px solid #000';
    closeBtn.style.borderRadius = '5px';
    closeBtn.style.cursor = 'pointer';

    const colorInfo = document.createElement('div');
    colorInfo.style.padding = '10px 20px';
    colorInfo.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
    colorInfo.style.color = '#000';
    colorInfo.style.borderRadius = '5px';

    controlPanel.appendChild(changeBtn);
    controlPanel.appendChild(closeBtn);
    document.body.appendChild(controlPanel);
    document.body.appendChild(colorInfo);

    changeBtn.addEventListener('click', changeBackground);
    closeBtn.addEventListener('click', function() {
        document.body.style.background = originalStyles.body.background;
        document.body.style.backgroundColor = originalStyles.body.backgroundColor;
        
        document.querySelector('header').style.background = originalStyles.header.background;
        document.querySelector('header').style.backgroundColor = originalStyles.header.backgroundColor;
        
        document.querySelector('footer').style.background = originalStyles.footer.background;
        document.querySelector('footer').style.backgroundColor = originalStyles.footer.backgroundColor;
        
        document.querySelectorAll('.cart-content').forEach((el, i) => {
            el.style.background = originalStyles.cartContents[i].background;
            el.style.backgroundColor = originalStyles.cartContents[i].backgroundColor;
        });

        document.body.removeChild(controlPanel);
        document.body.removeChild(colorInfo);
    });

    changeBackground();
}
