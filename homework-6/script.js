function reverseTextGame() {
  const userInput = prompt("Введите текст, который нужно перевернуть:");
  if (userInput) {
      const reversedText = userInput.split('').reverse().join('');
      alert(`Перевернутый текст: ${reversedText}`);
  } else {
      alert("Вы не ввели текст!");
  }
}


function startQuizGame() {
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

  let correctAnswers = 0;

  for (let i = 0; i < quiz.length; i++) {
      const currentQuestion = quiz[i];
      let questionText = currentQuestion.question + "\n";
      questionText += currentQuestion.options.join("\n");
      
      const userAnswer = parseInt(prompt(questionText));
      
      if (userAnswer === currentQuestion.correctAnswer) {
          correctAnswers++;
      }
  }

  alert(`Вы ответили правильно на ${correctAnswers} из ${quiz.length} вопросов!`);
}


const str = 'js';
const upperCaseStr = str.toUpperCase();
console.log(upperCaseStr); 


function filterByPrefix(arr, prefix) {
  const lowerCasePrefix = prefix.toLowerCase();

  return arr.filter(item => {
    return item.toLowerCase().startsWith(lowerCasePrefix);
  });
}

const result = filterByPrefix(strings, prefix);
console.log(result); 


const numb = 32.58884;
const roundedUp = Math.ceil(num);
console.log(roundedUp); 


const number = 32.58884;
const roundedDown = Math.floor(num);
console.log(roundedDown); 


const num = 32.58884;
const roundedNearest = Math.round(num);
console.log(roundedNearest); 


function getRandomNumberFrom1To10() {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  console.log(randomNumber); 
}


function getRandomNumbersArray(n) {
  const arrayLength = Math.floor(n / 2);

  const randomNumbers = Array.from({ length: arrayLength }, () => {
    return Math.floor(Math.random() * (n + 1)); 
  });

  return randomNumbers;
}


function getRandomNumberInRange(a, b) {
  const min = Math.min(a, b);
  const max = Math.max(a, b);

  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  return randomNumber;
}


const currentDat = new Date();

console.log(currentDate);


const currentDate = new Date();

const futureDate = new Date(currentDate);
futureDate.setDate(currentDate.getDate() + 73);

console.log("Текущая дата:", currentDate);
console.log("Дата через 73 дня:", futureDate);


function formatDate(date) {
  const months = [
    "января", "февраля", "марта", "апреля", "мая", "июня",
    "июля", "августа", "сентября", "октября", "ноября", "декабря"
  ];
  const daysOfWeek = [
    "воскресенье", "понедельник", "вторник", "среда",
    "четверг", "пятница", "суббота"
  ];

  const day = date.getDate(); 
  const month = months[date.getMonth()]; 
  const year = date.getFullYear(); 
  const dayOfWeek = daysOfWeek[date.getDay()]; 
  const hours = String(date.getHours()).padStart(2, '0'); 
  const minutes = String(date.getMinutes()).padStart(2, '0'); 
  const seconds = String(date.getSeconds()).padStart(2, '0'); 

  return `Дата: ${day} ${month} ${year} — это ${dayOfWeek}.\nВремя: ${hours}:${minutes}:${seconds}`;
}

