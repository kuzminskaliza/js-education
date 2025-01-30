let text = '';
for (let i = 10; i >= 0; i--) {
    text += 'число ' + i + '<br>'
}
document.getElementById('demo').innerHTML = text;

document.getElementById('demo2').innerHTML =
    Number('3.14') + '<br>' + //цифровий рядок перетворить на цифру
    Number(Math.PI) + '<br>' + //виводить всі цифри числа PI
    Number('     ') + '<br>' + //пусті рядки перетворює на нуль
    Number("") + '<br>' +
    Number('99 88') + '<br>' + // числа перетворюються на NaN так само як і буквені рядки
    Number('Bella');

let regex = /hello/i;
let str = 'Hello, world!';
console.log(regex.test(str));
console.log(str.match(str));

function example() {
    let localVar = 'local var';
    globalVar = 'global var';
}

example();
console.log(globalVar);
console.log(typeof localVar); //виведе undefined
class Car {
    constructor(name, color, year) {
        this.name = name;
        this.color = color;
        this.year = year;
    }

    age() {
        const date = new Date();
        return date.getFullYear() - this.year;
    }
}

const car = new Car('BMW', 'red', 2010);
const car2 = new Car('Audi', 'blue', 2015);
document.getElementById('demo3').innerHTML = car.name + '<br>' + car.color + '<br>' + car.age();
document.getElementById('demo4').innerHTML = car2.name + '<br>' + car2.color + '<br>' + car2.age();


let car4 = ["Tesla", "2020", "test"]

document.getElementById("demo5").innerHTML = car4;


class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old`;
    }
}

let person = new Person('John', 25);
let person2 = new Person('Liza', 20);
document.getElementById('demo6').innerHTML = person.greet();
document.getElementById('demo7').innerHTML = person2.greet();


let obj = {
    name: 'Liza',
    greets: () => {
        console.log(this.name);
    }
};
obj.greets();


let obj2 = {name: 'Liza', age: 20};
let json = JSON.stringify(obj2);
let parsedObj = JSON.parse(json)
document.getElementById('demo8').innerHTML = parsedObj.name;
document.getElementById('demo9').innerHTML = json;


function divideNumbers(a, b) {
    try {
        if (b === 0) {
            throw new Error('Ділення на нуль заборонене')
        }
        const result = a / b;
        console.log("результат: " + result);
    } catch (error) {
        console.error("помилка: " + error.message);
    } finally {
        console.log('Завершення роботи фукції')
    }
}

divideNumbers(10, 2);
divideNumbers(10, 0);


function parseUserInput(input) {
    try {
        const number = parseInt(input);

        if (isNaN(number)) {
            throw new Error('Введене значення не є числом!');
        }
        console.log("Перетворене число: " + number);
    } catch (error) {
        console.error('Помилка: ' + error.message);
    } finally {
        console.log('Обробка завершена')
    }
}

parseUserInput('1234');
parseUserInput('hello');
parseUserInput('')

