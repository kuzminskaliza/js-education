'use strict';

let starPath = 'img/star.png';
let container = document.querySelector('.container');
document.querySelector('#addStars').addEventListener('click', () => {
    let img = document.createElement('img');
    img.src = starPath;
    img.classList.add('star');
    img.style.width = Math.random() * 50 + 20 + 'px';
    img.style.height = 'auto';
    img.style.position = 'absolute';
    img.style.left = Math.random() * 100 + '%';
    img.style.top = Math.random() * 100 + '%';

    container.appendChild(img);

    setInterval(() => {
        img.style.opacity = Math.random();
    }, 1000);
})

let heart = document.getElementById('heart');
heart.addEventListener('click', () => {
    heart.classList.toggle('heart-animation');
})


let horoscopes = [
    "Сьогодні вам пощастить у нових починаннях.",
    "Хороший день для спілкування.",
    "Сьогодні варто звернути увагу на дрібниці.",
    "Можливі невеликі труднощі, але вони не завадять досягти вашої мети.",
    "Сьогодні ви можете зустріти нових людей, і це принесе позитив.",
    "Ваші ідеї сьогодні будуть особливо яскравими.",
    "Не бійтеся змін — вони принесуть користь.",
    "Легкі труднощі сьогодні швидко минуть.",
    "Важливі новини можуть прийти несподівано."
];
let showHoroscope = document.getElementById('showHoroscope');
let randomText = document.getElementById('randomText');
showHoroscope.addEventListener('click', function () {
    let randomNumber = Math.floor(Math.random() * horoscopes.length);
    let horoscope = horoscopes[randomNumber];

    randomText.textContent = '';

    let i = 0;

    let interval = setInterval(() => {
        randomText.textContent += horoscope[i];
        i++;
        if (i === horoscope.length) {
            clearInterval(interval);
        }
    }, 200)
});

let specialButton = document.getElementById('specialButton');
let stopButton = document.getElementById('stop');
let isMagicOn = true;

function move() {
    if (!isMagicOn) return;

    let container2 = document.querySelector('.container2');
    let containerRect = container2.getBoundingClientRect();
    let rect = specialButton.getBoundingClientRect();

    let x = (Math.random() * 200) - 100;
    let y = (Math.random() * 200) - 100;

    let newX = rect.left + x - containerRect.left;
    let newY = rect.top + y - containerRect.top;

    newX = Math.max(0, Math.min(containerRect.width - rect.width, newX));
    newY = Math.max(0, Math.min(containerRect.height - rect.height, newY));

    specialButton.style.left = newX + 'px';
    specialButton.style.top = newY + 'px';
}

specialButton.addEventListener('mousemove', move)
stopButton.addEventListener('click', function () {
    isMagicOn = !isMagicOn;
    stopButton.textContent = isMagicOn ? 'Виключити магію' : 'Включити магію';
});

let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let speak = new SpeechRecognition();
speak.lang = 'uk-UA';
speak.interimResults = false;
speak.continuous = false;

let listenButton = document.getElementById('listen');
let output = document.getElementById('output');
listenButton.addEventListener('click', function () {
    speak.start();
});

speak.onresult = function (event) {
    let text = event.results[0][0].transcript.toLowerCase();
    console.log(text);

    if (text.includes('привіт')) {
        output.textContent = 'Привіт, Ліза!'

    } else if (text.includes('яка погода')) {
        output.textContent = 'Не знаю, я ж не Google';

    } else if (text.includes('котра година')) {
        let date = new Date();
        output.textContent = `Зараз ${date.getHours()}:${date.getMinutes()}`;

    } else if (text.includes('як справи')) {
        output.textContent = 'Дякую, все добре! А в тебе?'

    } else if (text.includes('розкажи жарт')) {
        output.textContent = 'Чому програмісти не люблять природу? Бо в ній багато багів'

    } else {
        output.textContent = 'Я не розумію цю команду'
    }
}
speak.onspeechend = function () {
    speak.stop();
}

let mysteryNumber = Math.floor(Math.random() * 100);
let getNumber = document.getElementById('getNumber');
let result = document.getElementById('result');
let showNumber = document.getElementById('showNumber');
showNumber.addEventListener('click', () => {
    let userNumber = Number(getNumber.value);

    if (userNumber < mysteryNumber ) {
        result.textContent = 'Більше';
    } else if (userNumber >mysteryNumber) {
        result.textContent = 'Менше';
    } else {
        result.textContent = 'Вітаю! ви вгадали число!';
    }
});


let cat = document.getElementById('cat');
let removeCat = document.getElementById('removeCat');

document.addEventListener('mousemove', (event) => {
    let x = event.clientX;
    let y = event.clientY;

    cat.style.left = x + 'px';
    cat.style.top = y + 'px';
})

removeCat.addEventListener('click', () => {
    cat.remove();
})