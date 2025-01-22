let x = 12;
document.getElementById('demo').innerHTML = x.toString()
    + "<br>" +
    x.toString(12)
    + "<br>" +
    (100 + 23).toString();


let y = 9.543;
document.getElementById('demo2').innerHTML = y.toExponential()
    + "<br>" +
    y.toExponential(2)
    + "<br>" +
    y.toExponential(4)
    + "<br>" +
    y.toExponential(6);

let x2 = 9.543;
document.getElementById('demo3').innerHTML = x2.toFixed(0)
    + "<br>" +
    x2.toFixed(2)
    + "<br>" +
    x2.toFixed(4)
    + "<br>" +
    x2.toFixed(6);

let x3 = 9.543;
document.getElementById('demo4').innerHTML = x3.toPrecision()
    + "<br>" +
    x3.toPrecision(2)
    + "<br>" +
    x3.toPrecision(4)
    + "<br>" +
    x3.toPrecision(6);

let x4 = 12;
document.getElementById('demo5').innerHTML = x4.valueOf()
    + "<br>" +
    (123).valueOf()
    + "<br>" +
    (100 + 23).valueOf();

document.getElementById('demo24').innerHTML = "MAX_VALUE: " + Number.MAX_VALUE + "<br>" +
    "MIN_VALUE: " + Number.MIN_VALUE + "<br>" +
    "POSITIVE_INFINITY: " + Number.POSITIVE_INFINITY + "<br>" +
    "NEGATIVE_INFINITY: " + Number.NEGATIVE_INFINITY;

let x5 = new Date();
document.getElementById('demo6').innerHTML = Number(x5);

let cars = ['Volvo', ' BMW', ' Toyota'];
cars[0] = 'Tesla';
document.getElementById('demo7').innerHTML = cars;

let fruits = [];
fruits[0] = 'Apple';
fruits[1] = ' Banana';
fruits[2] = ' Orange';
fruits[3] = ' Mango';
fruits[4] = ' Grapes';
fruits.push(' Pineapple');
let size = fruits.length;
let fruit = fruits[fruits.length - 1];
let fruit2 = fruits.at(2);
let position = fruits.indexOf(' Apple') + 1;
let index = fruits.indexOf("Banana");
document.getElementById('demo14').innerHTML = fruits.join(' * ');
document.getElementById('demo13').innerHTML = fruit2;
document.getElementById('demo12').innerHTML = fruit;
document.getElementById('demo11').innerHTML = size;
document.getElementById('demo8').innerHTML = fruits;

function addFruit() {
    fruits[fruits.length] = 'Lemon'
    document.getElementById('demo8').innerHTML = fruits;
}
console.log(fruits instanceof Array);

const cars2 = ['Volvo', ' BMW', ' Toyota'];
let car = cars2[0];
document.getElementById('demo9').innerHTML = car;

let vegetables = [];
vegetables[0] = 'Cabbage';
vegetables[1] = ' Carrot';
vegetables[2] = ' Potato';
vegetables[3] = ' Onion';
vegetables[4] = ' Broccoli';
let vegetable = vegetables.pop();
let vegetable2 = vegetables.push(' Spinach');
let vegetable3 = vegetables.unshift(' Peas');
delete vegetables[0];
document.getElementById('demo15').innerHTML = vegetable;
document.getElementById('demo10').innerHTML = vegetables.toString();

const numbers = [1, 2, 3, 2, 1];
let lastIndex = numbers.lastIndexOf(2);
document.getElementById('demo24').innerHTML = lastIndex;

const colors = ["Red", "Green", "Blue"];
let isPresent = colors.includes("Green");
document.getElementById('demo25').innerHTML = isPresent;

const numbers1 = [10, 20, 30, 40, 50];
let filtered = numbers1.filter(num => num > 30);
document.getElementById('demo26').innerHTML = filtered;

const myArray = cars.concat(vegetables, fruits);
document.getElementById('demo16').innerHTML = myArray;

const d = new Date("2025-01-22");
document.getElementById('demo17').innerHTML = d;

const d1 = new Date("2025-01");
document.getElementById('demo18').innerHTML = d1;

const d2 = new Date("2025");
document.getElementById('demo19').innerHTML = d2;

const d3 = new Date('01/22/2025');
document.getElementById('demo20').innerHTML = d3;

let date = new Date();
document.getElementById('demo21').innerHTML = date.getFullYear() + "<br>" +
    date.getMonth() + "<br>" +
    date.getDate() + "<br>" +
    date.getDay() + "<br>" +
    date.getHours() + "<br>" +
    date.getMinutes() + "<br>" +
    date.getSeconds() + "<br>" +
    date.getMilliseconds() + "<br>" +
    date.getTime();

date.setFullYear(2030);
document.getElementById('demo22').innerHTML = date;

let mathExamples = [
    Math.round(4.6),
    Math.floor(4.7),
    Math.trunc(4.9),
    Math.min(0, 150, 30, 20, -8, -200),
    Math.max(0, 150, 30, 20, -8, -200),
    Math.random(),
    Math.sqrt(16),
    Math.pow(2, 3)
].join('<br>');
document.getElementById('demo23').innerHTML = mathExamples;