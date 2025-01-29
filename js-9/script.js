const div = document.getElementById('div');
const button = document.getElementById('showHide');

let isButtonClicked = true;

function showHide() {
    if (!isButtonClicked) {
        div.style.display = 'inline';
    } else {
        div.style.display = 'none';
    }
    isButtonClicked = !isButtonClicked;
}

button.addEventListener('click', showHide);

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
buttonClick.addEventListener('click', function click() {
    i++;
    document.getElementById('showButtonClick').innerHTML = i;
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

document.querySelectorAll('img').forEach(img => {
    img.addEventListener('click', function () {
        document.querySelectorAll('img').forEach(allImg => {
            if (allImg === this) {
                allImg.style.width = '125px';
                allImg.style.height = '125px';
            } else {
                allImg.style.width = '75px';
                allImg.style.height = '75px';
            }
        });
    });
});

