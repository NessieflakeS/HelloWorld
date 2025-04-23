function rockPaper() {
  const choices = ["камень", "ножницы", "бумага"];
  
  const userChoice = prompt("Выберите: камень, ножницы или бумага")?.toLowerCase().trim();
  
  if (!userChoice || !choices.includes(userChoice)) {
      alert("Пожалуйста, введите одно из следующих: камень, ножницы или бумага");
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
  
  console.log(`Ваш выбор: ${userChoice}`);
  console.log(`Выбор компьютера: ${computerChoice}`);
  console.log(`Результат: ${result}`);
}



const people = [
  { name: 'Глеб', age: 29 },
  { name: 'Анна', age: 17 },
  { name: 'Олег', age: 7 },
  { name: 'Оксана', age: 47 }
];

console.log(people.sort((a, b) => a.age - b.age));



function isPositive(num) {
  return num > 0;
}

function isMale(person) {
  return person.gender === 'male';
}

function filter(arr, ruleFunction) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (ruleFunction(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(filter([3, -4, 1, 9], isPositive));

const peple = [
  {name: 'Глеб', gender: 'male'},
  {name: 'Анна', gender: 'female'},
  {name: 'Олег', gender: 'male'},
  {name: 'Оксана', gender: 'female'}
];

console.log(filter(peple, isMale));



const intervalId = setInterval(() => {
  console.log(new Date());
}, 3000);

setTimeout(() => {
  clearInterval(intervalId);
  console.log("30 секунд прошло");
}, 30000);



function delayForSecond(callback) {
  setTimeout(callback, 1000);
}

delayForSecond(function () {
 console.log('Привет, Глеб!');
});



function delayForSecond(cb) {
  setTimeout(() => {
      console.log('Прошла одна секунда');
      if(cb) {  cb(); }
  }, 1000)
}

function sayHi (name) {
  console.log(`Привет, ${name}!`);
}

delayForSecond(() => sayHi('Глеб'));