let password = 'пароль';

let userInput = prompt('Введите пароль');

if (userInput === password) {
    alert('Пароль введен верно');
} else {
    alert('Пароль введен неправильно');
}


let c;

c = 0;
if (c > 0 && c < 10) {
    console.log("Верно");
} else {
    console.log("Неверно"); 
}

c = 10;
if (c > 0 && c < 10) {
    console.log("Верно");
} else {
    console.log("Неверно"); 
}

c = -3;
if (c > 0 && c < 10) {
    console.log("Верно");
} else {
    console.log("Неверно"); 
}

c = 2;
if (c > 0 && c < 10) {
    console.log("Верно"); 
} else {
    console.log("Неверно");
}


let d = 120;  
let e = 50;  

if (d > 100 || e > 100) {
    console.log("Верно");  
} else {
    console.log("Неверно");
}


let a = '2';
let b = '3';
alert(Number(a) + Number(b));  


let monthNumber = 12; 
if (monthNumber < 1 || monthNumber > 12) {
    console.log("Номер месяца должен быть от 1 до 12");
} else {
    switch (monthNumber) {
        case 12:
        case 1:
        case 2:
            console.log("Зима");
            break;
        case 3:
        case 4:
        case 5:
            console.log("Весна");
            break;
        case 6:
        case 7:
        case 8:
            console.log("Лето");
            break;
        case 9:
        case 10:
        case 11:
            console.log("Осень");
            break;
    }
}


let input = prompt("Пожалуйста, введите любое число");

if (input === null) {
    alert("Вы отменили ввод");
} else if (userInput.trim() === "") {
    alert("Вы ничего не ввели");
} else {
    let number = Number(input);
    if (isNaN(number)) {
        alert("Вы ввели не число!");
    } else {
        alert(number % 2 === 0 ? "Число четное" : "Число нечетное");
    }
}

