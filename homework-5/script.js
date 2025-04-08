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


function getMinNumber(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
}


function checkEvenOdd(num) {
    return num % 2 === 0 ? 'Число четное' : 'Число нечетное';
}


function printSquare(number) {
  const square = number * number;
  console.log(square);
}


function checkAge() {
  const age = prompt('Сколько вам лет?');
  
  if (isNaN(age)) {
    alert('Вы ввели не число');
  } else if (age < 0) {
    alert('Вы ввели неправильное значение');
  } else if (age >= 0 && age <= 12) {
    alert('Привет, друг!');
  } else {
    alert('Добро пожаловать!');
  }
}


function multiplyNumbers(a, b) {
  const numA = Number(a);
  const numB = Number(b);
  
  if (isNaN(numA) || isNaN(numB)) {
    return 'Одно или оба значения не являются числом';
  }
  
  return numA * numB;
}


function calculateCube() {
  const userInput = prompt("Пожалуйста, введите число:");
  
  const number = parseFloat(userInput);
  
  if (isNaN(number)) {
    return 'Переданный параметр не является числом';
  }
  
  const cube = Math.pow(number, 3);
  return `${number} в кубе равняется ${cube}`;
}

for (let i = 0; i <= 10; i++) {
  console.log(calculateCube(i));
}


const circle1 = {
  radius: 5,
  
  getArea() {
    return Math.PI * Math.pow(this.radius, 2);
  },
  
  getPerimeter() {
    return 2 * Math.PI * this.radius;
  }
};

const circle2 = {
  radius: 10,
  
  getArea() {
    return Math.PI * Math.pow(this.radius, 2);
  },
  
  getPerimeter() {
    return 2 * Math.PI * this.radius;
  }
};





