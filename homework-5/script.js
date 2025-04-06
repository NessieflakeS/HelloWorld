for (let i = 0; i < 2; i++) {
    console.log("Привет");
}

let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

let p = 7;
while (p <= 22) {
    console.log(i);
    p++;
}

let obj = {
    "Коля": '200',
    "Вася": '300',
    "Петя": '400'
};

for (let name in obj) {
    console.log(name + " — зарплата " + obj[name] + " долларов");
}

let n = 1000; 
let num = 0;  

while (n >= 50) {
    n = n / 2; 
    num++;     
}

console.log("Результат:", n);      
console.log("Количество итераций:", num); 


let firstFriday = 3; 

for (let day = firstFriday; day <= 31; day += 7) {
    console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`);
}





