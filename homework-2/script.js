let a = 10;
alert(a);

a = 20;
alert(a);

const firstiphone = 2007;
alert(firstiphone);

const creator = "Брэндан Эйх";
alert(creator);


const b = 10;
const c = 2;
alert(`Сумма: ${b + c}\n Разность: ${b - c}\n Произведение: ${b * c}\n Частное: ${b / c}`);

const result = 2 ** 5;
alert(result);

const d = 9;
const s = 2;
const remainder = d % s;
alert(remainder);

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

const age = prompt('Сколько вам лет?');
alert(`Вам ${age} лет!`);

const user = {}; 
user.name = "Данил";
user.age = 25;
user.isAdmin = true;

const userName = prompt('Как вас зовут?');
alert(`Привет, ${userName}!`);


const number = prompt('Загадайте любое число');
const doubled = number * 2;
alert(`Удвоенное число: ${doubled}`);
const plusTen = doubled + 10;
alert(`После прибавления 10: ${plusTen}`);
const halved = plusTen / 2;
alert(`После деления на 2: ${halved}`);
const final = halved - number;
alert(`После вычитания исходного числа: ${final}`);
alert('Внезапно! Ответ равен 5!');