document.getElementById('demo').innerHTML = 10 > 9;

document.getElementById('demo2').innerHTML =
    '100 is ' + Boolean(100)
    + '<br>' +
    '3.14 is ' + Boolean(3.14)
    + '<br>' +
    '-15 ' + Boolean(-15);

let x = 0; //false буде також -0, порожній рядок '', або змінна яка немає значення, null
document.getElementById('demo3').innerHTML = Boolean(x);

//Оператори
let y = 10;
document.getElementById('demo4').innerHTML = 'Використання оператора == ' + (y == 4);
document.getElementById('demo5').innerHTML = 'Використання оператора === ' + (y === "4");

let a = 3;
let b = 4;
document.getElementById('demo6').innerHTML = 'Використання оператора && ' + (a < 10 && b > 1);
document.getElementById('demo7').innerHTML =
    'Використання оператора || '
    + '<br>' +
    (a == 3 || b === '4')
    + '<br>' +
    (a == 4 || b == 3);

//Тернарний оператор ? value1 : value2;
function getAge() {
    let age = document.getElementById('age').value;
    let voteable = (age < 18) ? 'Занадто молодий' : 'Занадто старий';
    document.getElementById('demo8').innerHTML = voteable + ' для голосування';
}

if (new Date().getHours() < 18) {
    document.getElementById('demo9').innerHTML = 'Доброго дня';
} else {
    document.getElementById('demo10').innerHTML = 'Добрий вечір';
}

let time = new Date().getHours();
let greeting;
if (time < 10) {
    greeting = 'Добрий ранок';
} else if (time < 18) {
    greeting = 'Добрий день';
} else {
    greeting = 'Добрий вечір';
}
document.getElementById('demo11').innerHTML = greeting;

//Оператор switch
let day
switch (new Date().getDay()) {
    case 0:
        day = 'Неділя';
        break;
    case 1:
        day = 'Понеділок';
        break;
    case 2 :
        day = 'Вівторок';
        break;
    case 3:
        day = 'Середа';
        break;
    case 4:
        day = 'Четвер';
        break;
    case 5:
        day = 'Пʼятниця';
        break;
    case 6:
        day = 'Субота';
        break;

}
document.getElementById('demo12').innerHTML = day;

//Цикли
let number = '';
for (let i = 0; i < 10; i++) {
    number += 'Число ' + i + '<br>';
}
document.getElementById('demo13').innerHTML = number;
//Перша умова - встановлює початкову змінну, друга визначає умову (i має бути менше 10), і третя кожного разу додається 1

let person = {
    name: 'John',
    age: 30,
    city: 'New York'
};
let text = '';
for (let x in person) {
    text += person[x] + ' ';
}
document.getElementById('demo14').innerHTML = text;


let arr = [1, 2, 3, 4, 5];
let text2 = '';
for (let x in arr) {
    text2 += arr[x] + ' ';
}
document.getElementById('demo15').innerHTML = text2;


let arrayNumbers = [12, 43, 34, 556, 67, 87];
let text3 = '';
arrayNumbers.forEach(getNumber);
document.getElementById('demo16').innerHTML = text3;

function getNumber(value) {
    text3 += value + ' ';
}

let cars = ['tesla', 'bmw', 'audi', 'volvo'];

let text4 = '';
for (let x of cars) {
    text4 += x + ' ';
}
document.getElementById('demo17').innerHTML = text4;

let text5 = '';
let i = 0;

while (i <= 10) {
    text5 += '<br> Число ' + i + ' ';
    i++;
}
document.getElementById('demo18').innerHTML = text5;

let text6 = '';
do {
    text6 += '<br> Число ' + i + ' ';
    i++;
} while (i < 10);
document.getElementById('demo19').innerHTML = text6;


let text7 = '';
for (i = 0; i < 10; i++) {
    if (i === 3) {
        continue;
    }
    text7 += '<br> Число ' + i + ' ';
}
document.getElementById('demo20').innerHTML = text7;

let letters = new Set(['a', 'b', 'c'])
document.getElementById('demo21').innerHTML = 'У наборі ' + letters.size + ' значення';

let letters2 = new Set();

const f = 'f';
const g = 'g';
const h = 'h';
const m = 'm';

letters2.add(f);
letters2.add(g);
letters2.add(h);
letters2.add(m);

document.getElementById('demo22').innerHTML = 'У наборі ' + letters2.size + ' значення';

//keys() - метод повертає ключ, але якщо ключів немає то поверне тільки значення
const myIterators = letters.keys();
let text8 = '';
for (let x of myIterators) {
    text8 += x + ' ';
}
document.getElementById('demo23').innerHTML = 'використання функції keys() ' + text8;

//entries() - метод повертає пару, ключ-значення, але якщо ключів немає то поверне тільки значення-значення
const myIterators2 = letters2.entries();
let text9 = '';
for (let x of myIterators2) {
    text9 += x + ' ';
}
document.getElementById('demo24').innerHTML = 'використання функції entries() ' + text9;

let fruits = new Map([
    ['apples', 100],
    ['bananas', 200],
    ['oranges', 300]
]);

let numb = fruits.get('apples');
document.getElementById('demo25').innerHTML = 'There are ' + numb + ' apples.';

fruits.set('apples', 200);
document.getElementById('demo26').innerHTML = 'There are ' + fruits.get('apples') + ' apples.';

document.getElementById('demo27').innerHTML = 'Кількість елементів в Map fruits: ' + fruits.size;

let isDeleted = fruits.delete('apples');
document.getElementById('demo28').innerHTML = 'Видалення елемента "apples" з Map: ' + isDeleted;

document.getElementById('demo29').innerHTML = 'has Повертає False якщо не існує ключа ' + fruits.has('apples');

fruits.clear();
document.getElementById('demo30').innerHTML = 'Після очищення Map fruits: ' + fruits.size;

let car = {
    name: 'Tesla',
    model: 'x',
    age: '2020'
};

//для того щоб вивести обʼєкт у вигляді строки
document.getElementById("demo31").innerHTML = JSON.stringify(car);


let now = new Date()
let hours = now.getHours();
let greetings
if (hours > 6 && hours < 11) {
    greetings = 'Добрий ранок';
} else if (hours > 11 && hours < 18) {
    greetings = 'Добрий день';
} else if (hours > 18 && hours < 23) {
    greetings = 'Добрий вечір';
} else if (hours > 23 && hours < 6) {
    greetings = 'Надобраніч';
}
document.getElementById('demo32').innerHTML = greetings;


//типи даних
document.getElementById('demo33').innerHTML =
    'Bella ' + typeof 'Bella' + '<br>' +
    '10 ' + typeof 10 + '<br>' +
    '3.14 ' + typeof 3.14 + '<br>' +
    '22 ' + typeof 22 + '<br>' +
    'NaN ' + typeof NaN + '<br>' +
    'true ' + typeof true + '<br>' +
    'false ' + typeof false + '<br>' +
    '1234n ' + typeof 1234n + '<br>' +
    'Symbol() ' + typeof Symbol() + '<br>' +
    'olo ' + typeof olo + '<br>' +
    'null ' + typeof null + '<br>' ;

document.getElementById('demo34').innerHTML = 'Date: ' + (now instanceof Date);
document.getElementById('demo35').innerHTML = 'Масив: ' + (arrayNumbers instanceof Array);



