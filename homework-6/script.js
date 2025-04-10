function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateQuestion() {
  const operations = ['+', '-', '*', '/'];
  const operation = operations[getRandomNumber(0, 3)];
  let num1, num2, correctAnswer;

  if (operation === '+') {
    num1 = getRandomNumber(1, 20);
    num2 = getRandomNumber(1, 20);
    correctAnswer = num1 + num2;
  } else if (operation === '-') {
    num1 = getRandomNumber(1, 20);
    num2 = getRandomNumber(1, num1); 
    correctAnswer = num1 - num2;
  } else if (operation === '*') {
    num1 = getRandomNumber(1, 10);
    num2 = getRandomNumber(1, 10);
    correctAnswer = num1 * num2;
  } else if (operation === '/') {
    num2 = getRandomNumber(1, 10);
    correctAnswer = getRandomNumber(1, 10);
    num1 = num2 * correctAnswer; 
  }

  window.correctAnswer = correctAnswer;

  document.getElementById('question').textContent = `${num1} ${operation} ${num2} = ?`;
}

function checkAnswer() {
  const userAnswer = parseFloat(document.getElementById('userAnswer').value);
  const resultElement = document.getElementById('result');

  if (isNaN(userAnswer)) {
    resultElement.textContent = 'Пожалуйста, введите число.';
    resultElement.className = 'result incorrect';
    return;
  }

  if (userAnswer === window.correctAnswer) {
    resultElement.textContent = 'Правильно!';
    resultElement.className = 'result correct';
  } else {
    resultElement.textContent = `Неправильно! Правильный ответ: ${window.correctAnswer}`;
    resultElement.className = 'result incorrect';
  }

  document.getElementById('userAnswer').value = '';
 
  setTimeout(generateQuestion, 2000);
}


const array = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
  if (array[i] === 10) {
    break; 
  }
}


const arraya = [1, 5, 4, 10, 0, 3];
let index = -1; 

for (let i = 0; i < arraya.length; i++) {
  if (arraya[i] === 4) {
    index = i; 
    break; 
  }
}

console.log(index); 


const arrays = [1, 3, 5, 10, 20];

const result = arrays.join(' ');

console.log(result); 


const rows = 3; 
const cols = 3; 
const results = [];

for (let i = 0; i < rows; i++) {
  const row = []; 
  for (let j = 0; j < cols; j++) {
    row.push(1); 
  }
  result.push(row); 
}

console.log(results);


const arrayw = [1, 1, 1];

arrayw.push(2, 2, 2);

console.log(arrayw);


const arrayq = [9, 8, 7, 'a', 6, 5];

const filteredArrayq = array.filter(item => typeof item === 'number');

filteredArrayq.sort((a, b) => a - b);

console.log(filteredArrayq);


const arraye = [9, 8, 7, 6, 5];

const userInput = prompt("Угадайте число из массива [9, 8, 7, 6, 5]:");

const userNumber = Number(userInput);

if (arraye.includes(userNumber)) {
  alert("Угадал");
} else {
  alert("Не угадал");
}


const str = 'abcdef';

const arr = str.split('');

const reversedArr = arr.reverse();

const reversedStr = reversedArr.join('');

console.log(reversedStr); 


const arrayr = [[1, 2, 3], [4, 5, 6]];

const flattenedArrayr = [].concat(...arrayr);

console.log(flattenedArrayr);


const arrayt = [3, 7, 2, 8, 5];

for (let i = 0; i < arrayt.length - 1; i++) {
  const sum = arrayt[i] + arrayt[i + 1];

  console.log(`Сумма элементов ${arrayt[i]} и ${arrayt[i + 1]}: ${sum}`);
}


function getSquares(array) {
  const squares = []; 

  for (let i = 0; i < array.length; i++) {
    squares.push(array[i] * array[i]); 
  }

  return squares; 
}


const numbers = [1, 2, 3, 4, 5];
const squares = getSquares(numbers);

console.log(squares); 


function getLengths(array) {
  const lengths = array.map(str => str.length);
  
  return lengths;
}

const words = ["apple", "banana", "cherry", "date"];
const lengths = getLengths(words);

console.log(lengths); 


function getNegativeNumberss(array) {
  const negatives = array.filter(num => num < 0);
  
  return negatives;
}

const numberss = [3, -1, -4, 2, 0, -7, 10];
const negativeNumbers = getNegativeNumbers(numberss);

console.log(negativeNumberss); 


const randomArrayy = Array.from({ length: 10 }, () => Math.floor(Math.random() * 11));

const evenNumbers = randomArrayy.filter(num => num % 2 === 0);

console.log("Исходный массив:", randomArrayy);
console.log("Массив четных значений:", evenNumbers);


const randomArray = Array.from({ length: 6 }, () => Math.floor(Math.random() * 10) + 1);

const sum = randomArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

const average = sum / randomArray.length;

console.log("Исходный массив:", randomArray);
console.log("Среднее арифметическое:", average);