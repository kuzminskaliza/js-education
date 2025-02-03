'use strict';

let input = document.getElementById('numb');
let output = document.getElementById('output');
let timer;
document.getElementById('start').addEventListener('click', function () {
    let time = parseInt(input.value);

    timer = setInterval(function () {
        if (time <= 0) {
            clearInterval(timer);
            return;
        }
        output.innerHTML = time;
        time--;
    }, 1000);
});
document.getElementById('stop').addEventListener('click', function () {
    clearInterval(timer);
})


let outputTime = document.getElementById('outputTime');
let updateTime = function () {
    setInterval(function () {
        let now = new Date();
        outputTime.innerHTML = now.toLocaleTimeString();
    }, 1000);
}
updateTime();


let img = ['img/1.png', 'img/2.png', 'img/3.png', 'img/4.png', 'img/5.png'];

let index = 0;
let interval;

function updateImage() {
    document.getElementById('slider').src = img[index];
}

function imgChange() {
    clearInterval(interval);
    interval = setInterval(function () {
        index++;
        if (index === img.length) {
            index = 0;
        }
        updateImage();
    }, 3000)
}

imgChange();

document.getElementById('forward').addEventListener('click', function () {
    index++;
    if (index === img.length) {
        index = 0;
    }
    updateImage();
    imgChange();
});
document.getElementById('back').addEventListener('click', function () {
    index--;
    if (index === -1) {
        index = img.length - 1;
    }
    updateImage();
    imgChange();
});


function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

let button = document.getElementById('changeColor');
document.body.style.backgroundColor = randomColor();
button.addEventListener('click', function () {
    document.body.style.backgroundColor = randomColor();
})


let autoChange = document.getElementById('autoChange');
let autoInterval;
autoChange.addEventListener('click', function () {
    if (autoChange.checked) {
        autoInterval = setInterval(function () {
            document.body.style.backgroundColor = randomColor();
        }, 2000);
    } else {
        clearInterval(autoInterval);
    }
})

let list = document.querySelectorAll('ul li')
let textChange = document.getElementById('text');
textChange.addEventListener('keyup', function () {
    let text = textChange.value.toLowerCase();

    list.forEach(function (item) {
        if (item.textContent.toLowerCase().includes(text)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    })
});
