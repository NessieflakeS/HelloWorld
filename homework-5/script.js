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


