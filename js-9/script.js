'use strict';
const div = document.getElementById('div');
const button = document.getElementById('showHide');

let isButtonClicked = true;

button.addEventListener('click',  ()=> {
    if (!isButtonClicked) {
        div.style.display = 'inline';
        button.innerHTML = 'Hide';
    } else {
        div.style.display = 'none';
        button.innerHTML = 'Show';
    }
    isButtonClicked = !isButtonClicked;
});

document.getElementById('show').addEventListener('click', function () {
    document.querySelector('.text').style.display = 'inline'
    document.getElementById('show').disabled = true
    document.getElementById('hide').disabled = false
});

document.getElementById('hide').addEventListener('click', function () {
    document.querySelector('.text').style.display = 'none'
    document.getElementById('show').disabled = false
    document.getElementById('hide').disabled = true
});


let i = 0
const buttonClick = document.getElementById('onClick');
buttonClick.addEventListener('click', () => {
    document.getElementById('showButtonClick').innerHTML = i++;
})


const sum = document.getElementById('sum');
sum.addEventListener('click', function sumNumber() {
    const input1 = Number(document.getElementById('input1').value);
    const input2 = Number(document.getElementById('input2').value);

    document.getElementById('showNumber').innerText = input1 + input2;
});

document.getElementById('submit').addEventListener('click', function () {
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    if (password.length >= 6 && password.length <= 12) {
        message.innerHTML = 'password is ok'
        message.style.color = 'green'
    } else {
        message.innerHTML = 'password must be between 6 and 12 characters'
        message.style.color = 'red'
    }
});


document.getElementById('add').addEventListener('click', function () {
    let text = document.getElementById('text').value;

    let li = document.createElement('li');
    li.innerHTML = text;
    document.getElementById('list').appendChild(li);
});

document.querySelector('.containerForImg').addEventListener('click', (event) => {
    if (event.target.tagName === 'IMG') {
        document.querySelectorAll('.containerForImg img').forEach(img => {
            if (img === event.target) {
                img.style.width = '125px';
                img.style.height = '125px';
            } else {
                img.style.width = '75px';
                img.style.height = '75px';
            }
        });
    }
});

