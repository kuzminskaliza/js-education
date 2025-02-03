const div = document.querySelector('div');
const divClass = document.querySelector('.div');
const button2 = document.querySelector('#button2');

console.log(button2);

let isButtonClicked = false;

function onClick() {

    if (!isButtonClicked) {
        div.innerText = 'Hello World';
        divClass.innerHTML = "<h1>Hello World</h1>";
        isButtonClicked = true
        return;
    }

    div.innerText = 'Hello 1';
    divClass.innerHTML = "<h3>Hello 222 World</h3>";
    isButtonClicked = false;
}

button2.onclick = onClick;

const button = document.querySelector('button');
button.addEventListener('click', clickHandler);
let i = 0;

function clickHandler() {
    i++;
    console.log('click', i);
    switch (i) {
        case 1:
            button.style.backgroundColor = 'red';
            break;
        case 2:
            button.style.backgroundColor = 'blue';
            break;
        case 3:
            button.style.backgroundColor = 'green';
            break;
        case 4:
            button.style.backgroundColor = 'yellow';
            break;
        case 5:
            button.style.backgroundColor = 'orange';
            button.removeEventListener('click', clickHandler);
            break;

    }
}


const input = document.querySelector('[name="my_input"]');
input.addEventListener('input', function_name);

let prevValue = input.value;
function function_name(event) {
    const userData = event.target.value;

    if (userData.includes('(') || userData.includes(')')) {
        input.value = prevValue;
        return;
    }
    input.value = userData;
    prevValue = userData;
}


document.addEventListener('scroll', (event) => {
    console.log(event.target.scrollingElement.scrollTop);
});

document.addEventListener('keydown', (event) => {
    console.log(event);
})

window.addEventListener('resize', (event) => {
    console.log(event.target.innerWidth);
})

button.addEventListener('mouseenter', () => {
    console.log('ENTER');
})

button.addEventListener('mouseleave', () => {
    console.log('LEAVE');
})

function showTag(event) {
    console.log(event.currentTarget.tagName);
}

document.getElementById('btn-happiness').addEventListener('click', function () {
    document.querySelector('.image').style.display = 'inline';
    document.getElementById('btn-happiness').disabled = true;
    document.getElementById('btn-sadness').disabled = false;
});

document.getElementById('btn-sadness').addEventListener('click', function () {
    document.querySelector('.image').style.display = 'none';
    document.getElementById('btn-happiness').disabled = false;
    document.getElementById('btn-sadness').disabled = true;
});

const newWindow = window.open('https://www.google.com', '_blank', 'width=500,height=500');
setTimeout(() => {
    if (newWindow) {
        newWindow.close();
    }
}, 5000)

function resizeWindow() {
    window.resizeTo(800, 600);
}
resizeWindow();

console.log('Ширина',window.innerWidth);
console.log('Висота',window.innerHeight);

console.log("Ширина екрану:", screen.width);
console.log("Висота екрану:", screen.height);
console.log("Доступна ширина:", screen.availWidth);
console.log("Доступна висота:", screen.availHeight);
console.log("Глибина кольору:", screen.colorDepth);
console.log("Глибина пікселів:", screen.pixelDepth);


console.log("Поточний URL:", window.location.href);
console.log("Ім'я хоста:", window.location.hostname);
console.log("Шлях:", window.location.pathname);
console.log("Протокол:", window.location.protocol);

//завантажує нову сторінку
function loadNewPage() {
    window.location.assign('https://www.google.com')
}
// loadNewPage();

console.log("Cookies увімкнені:", navigator.cookieEnabled);
console.log("Код браузера:", navigator.appCodeName);
console.log("Платформа:", navigator.platform);

setTimeout(() => {
    console.log('Виконується через 2 секунди');
}, 2000)

const interval = setInterval(() => {
    console.log('Виконується кожну секунду');
}, 1000)
setTimeout(() => {
    clearInterval(interval);
    console.log('Інтервал зупинено');
}, 5000)


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const doubled1 = numbers.map(function (number) {
    return number * 2;
});
console.log(doubled1);

const doubled2 = numbers.map(number => number * 2);
console.log(doubled2);

//тут функція посилається на глобальний обєкт window
function showThis() {
    console.log(this);
}

showThis();

//функція яка приймає багато параметрів
function sum(...numbers) {
    let total = 0;
    for (let number of numbers) {
        total += number;
    }
    return total;
}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
console.log(sum(1, 3, 4, 5));