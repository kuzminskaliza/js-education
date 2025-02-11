'use strict'

//JS Async
function myDisplayer(something) {
    document.getElementById('demo').innerHTML = something;
}

function myCalculator(num1, num2, MyCallback) {
    let sum = num1 + num2;
    MyCallback(sum);
}

myCalculator(3, 5, myDisplayer);

setTimeout(functionOutput, 3000);

function functionOutput() {
    document.getElementById('demo2').innerHTML = 'Hello world!';
}

setInterval(showWatch, 1000);

function showWatch() {
    let d = new Date();
    document.getElementById('demo3').innerHTML =
        d.getHours() + ':' +
        d.getMinutes() + ':' +
        d.getSeconds();
}

function myDisplayer2(something) {
    document.getElementById('demo4').innerHTML = something;
}

let myPromise = new Promise(function (myResolve, myReject) {
    let x = 0;
    if (x === 0) {
        myResolve('success');
    } else {
        myReject('fail');
    }
});
myPromise.then(
    function (value) {
        myDisplayer2(value);
    },
    function (reason) {
        myDisplayer2(reason);
    }
);

async function getData() {
    return 'Hello, async!';
}

getData().then(console.log);

async function fetchData() {
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    let data = await response.json();
    console.log(data);
}

fetchData();

async function fastRequests() {
    let [user, posts] = await Promise.all([
        fetch('https://jsonplaceholder.typicode.com/users/1'),
        fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
    ]);

    let userData = await user.json();
    let postsData = await posts.json();

    console.log(userData, postsData);
}

fastRequests();

localStorage.setItem('age', String(25));
localStorage.setItem('user', JSON.stringify({name: 'Eliza', age: 20}));

let age = Number(localStorage.getItem('age'));
let user = JSON.parse(localStorage.getItem('user'));
console.log(user.name);

localStorage.removeItem('username');
localStorage.clear();
console.log(localStorage.length);
console.log(localStorage.key(0));

//JS Web Api

// широта та довгота місця розташування користувача
const x = document.getElementById('demo5');

function getLocation() {
    try {
        navigator.geolocation.getCurrentPosition(showPosition);
    } catch (err) {
        x.innerHTML = err;
    }
}

function showPosition(position) {
    x.innerHTML = 'Latitude: ' + position.coords.latitude +
        '<br>Longitude: ' + position.coords.longitude;
}

function validateInputNumber() {
    const inpObj = document.getElementById('inputNumber');
    if (!inpObj.checkValidity()) {
        document.getElementById('demo6').innerHTML = inpObj.validationMessage;
    } else {
        document.getElementById('demo7').innerHTML = 'Input is valid'
    }
}

function validateInput1Number() {
    let text;
    if (document.getElementById('inputNumber1').validity.rangeOverflow) {
        text = 'Input is too big';
    } else {
        text = 'Input is valid';
    }
    document.getElementById('demo8').innerHTML = text;
}


localStorage.setItem('name', 'Eliza');
document.getElementById('demo9').innerHTML = localStorage.getItem('name');

sessionStorage.setItem('age', 20);
document.getElementById('demo10').innerHTML = sessionStorage.getItem('age');

getText('fetch_info.txt');

async function getText(file) {
    let x = await fetch(file);
    let y = await x.text();
    document.getElementById('demo11').innerHTML = y;
}

function loadDoc() {
    let xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        document.getElementById('demo12').innerHTML = this.responseText;
    }
    xhttp.open('GET', 'ajax_info.txt', true);
    xhttp.send();
}

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1', true);

xhr.onload = function () {
    if (xhr.status === 200) {
        console.log('Отримані дані:', xhr.responseText);
    }
};
xhr.send();

let xhr1 = new XMLHttpRequest();
xhr1.open('GET', 'https://jsonplaceholder.typicode.com/invalid-url', true);

xhr1.onload = function () {
    if (xhr1.status === 404) {
        console.log('Помилка: сторінку не знайдено');
    }
};

xhr1.onerror = function () {
    console.log('Помилка мережі');
};

xhr1.send();

let xhr2 = new XMLHttpRequest();
xhr2.open('POST', 'https://jsonplaceholder.typicode.com/posts', true);
xhr2.setRequestHeader('Content-Type', 'application/json');

xhr2.onload = function () {
    if (xhr2.status === 201) {
        console.log('Успішно відправлено:', xhr2.responseText);
    }
};

let data = JSON.stringify({title: 'Hello', body: 'World', userId: 1});
xhr2.send(data);


let xhr3 = new XMLHttpRequest();
xhr3.open('GET', 'https://jsonplaceholder.typicode.com/posts/1', true);

xhr3.onload = function () {
    if (xhr3.status === 200) {
        console.log('Отримати дані:', xhr3.responseText);
    }

    console.log('Заголовки відповіді', xhr3.getAllResponseHeaders());
}
xhr3.send();


//JQuery
$(document).ready(function () {
    const myElements = $('#id01');
    $('#demo13').text('The text from the id01 paragraph is: ' + myElements[0].innerHTML);
});

$(document).ready(function () {
    const myElements = $('p');
    $('#demo14').text('The text in the first paragraph is: ' + myElements[0].innerHTML);
});

const myElements = document.querySelectorAll('p.intro');
document.getElementById('demo14').innerHTML =
    'The first paragraph with class="intro" is: ' + myElements[0].innerHTML;

$(document).ready(function () {
    $('#02').html('<p>Hello World!</p>');
});

$(document).ready(function () {
    const content = $('#02').html();
    $('#01').html(content);
});

$(document).ready(function () {
    $('#02').hide();
});

$(document).ready(function () {
    $('#05').show();
});

$(document).ready(function () {
    $('#demo16').css("font-size", "35px");
});

$(document).ready(function () {
    $('#id04').remove();
});
