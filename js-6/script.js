function Person(firstName, lastName, age, colorEye) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.colorEye = colorEye;
}

let person = new Person('John', 'Doe', 30, 'blue');
document.getElementById('demo').innerHTML = person.firstName + ' ' + person.lastName + ' ' + person.age + ' ' + person.colorEye;

let target = {name: 'Alice'};
let source = {age: 21, city: 'New York'};

let result = Object.assign(target, source);
document.getElementById('demo2').innerHTML = result.name + ' ' + result.age + ' ' + result.city;


let prototype = {
    greet() {
        return `Hello, ${this.name}`;
    }
};

let newObject = Object.create(prototype);
newObject.name = 'Sophia';
document.getElementById('demo3').innerHTML = newObject.greet();

let user = {
    name: 'John',
    age: 30,
    city: 'New York'
};

let entries = Object.entries(user);
document.getElementById('demo4').innerHTML = entries;

let entries2 = [
    ['name', 'John'],
    ['age', 30],
    ['city', 'New York']
];

let user2 = Object.fromEntries(entries2);
document.getElementById('demo5').innerHTML = user2.name + ' ' + user2.age + ' ' + user2.city;

let user3 = {
    name: 'John',
    age: 30,
    city: 'New York'
};

let keys = Object.keys(user3);
document.getElementById('demo6').innerHTML = keys;

let values = Object.values(user3);
document.getElementById('demo7').innerHTML = values;

let car = {
    name: 'Tesla',
    model: 'x',
    age: '2020'
};
Object.preventExtensions(car)

car.color = 'red';
console.log(car);
console.log(Object.isExtensible(car));

let car2 = {
    name: 'Fiat',
    model: '500',
    age: '2017',
    get title() {
        return this.name
    }
};
document.getElementById('demo9').innerHTML = car2.title;
Object.seal(car2);
car2.model = '600';
delete car2.age;
console.log(car2);
console.log(Object.isSealed(car2));

let obj = {name: 'Bella'};
console.log(Object.isSealed(obj));

Object.seal(obj)
console.log(Object.isSealed(obj));


let car3 = {
    name: 'BMW',
    model: '320',
    age: '2015',
    set title(value) {
        this.name = value;
    }
}
car3.title = 'Audi';
document.getElementById('demo10').innerHTML = car3.name;

Object.freeze(car3);
car3.model = '330';
car3.age = '2016';
delete car3.name;
console.log(car3);
console.log(Object.isFrozen(car3));

function Dog(name, age, color, breed) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.breed = breed;
}

Dog.prototype.tail = 'small';

let dog = new Dog('Bella ', 1, ' red ', 'french bulldog ');
console.log(dog.tail);
document.getElementById('demo8').innerHTML = dog.name + dog.age + dog.color + dog.breed + dog.tail;


const person1 = {
    fullName: function (city, country) {
        return this.firstName + ' ' + this.lastName + ' ' + city + ' ' + country;
    }
}

const person2 = {
    firstName: 'John',
    lastName: 'Doe',
}

document.getElementById('demo11').innerHTML = person1.fullName.apply(person2, ['Oslo', 'Norway']);
document.getElementById('demo12').innerHTML = person1.fullName.call(person2, ['Oslo', 'Norway']);


class Car {
    constructor(brand) {
        this.carName = brand;
    }

    present() {
        return 'Я маю ' + this.carName;
    }
}

class Model extends Car {
    constructor(brand, model) {
        super(brand);
        this.carModel = model;
    }

    show() {
        return this.present() + ' Модель ' + this.carModel;
    }
}

let myCar = new Model('BMW', '320');
document.getElementById('demo13').innerHTML = myCar.show();

class Cat {
    constructor(name) {
        this.name = name;
    }

    static hello() {
        return ' meow!! '
    }
}

const cat = new Cat('Bobik');
document.getElementById('demo14').innerHTML = cat.name + Cat.hello();

document.getElementById('demo15').innerHTML = 'Date: ' + Date();

document.write(Date());

function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x === '') {
        alert("Name must be filled out");
        return false;
    }
}

function myFunction1() {
    let x = document.getElementById('numb').value;
    let text;
    if (isNaN(x) || x < 1 || x > 10) {
        text = 'Input not valid';
    } else {
        text = 'Input valid';
    }
    document.getElementById('demo16').innerHTML = text;
}

document.getElementById('demo17').style.color = 'red';


function myMove() {
    let id = null;
    const elem = document.getElementById('animate');
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 5);

    function frame() {
        if (pos === 350) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}

function mOver(obj) {
    obj.innerHTML = 'Thank YOU';
}

function mOut(obj) {
    obj.innerHTML = 'Mouse Over Me';
}

function mDown(obj) {
    obj.style.color = 'chartreuse';
    obj.innerHTML = 'Release Me';
}

function mUp(obj) {
    obj.style.color = 'black';
    obj.innerHTML = 'Thank you';
}