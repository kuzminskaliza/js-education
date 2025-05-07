function setupClickCounter(buttonId) {
    let count = 0;
    document.getElementById(buttonId).addEventListener('click', function () {
        count++;
        console.log(`Кнопку натиснуто ${count} рази`);
    });
}

setupClickCounter('clickMe');


function greeter(name) {
    return function (message) {
        console.log(`${message}, ${name}!`);
    }
}

const greet = greeter('John');
greet('Hello');

function createPasswordManager(password) {
    return {
        checkPassword: function (input) {
            return input === password;
        }
    };
}

const manager = createPasswordManager('secret123');
console.log(manager.checkPassword('123'));
console.log(manager.checkPassword('secret123'));

document.querySelectorAll('.btn').forEach((btn) => {
    let count = 0;

    btn.addEventListener('click', function () {
        count++;
        console.log(`Кнопка ${btn.dataset.id} натиснута ${count} раз(и)`);
    });
});


function coffeeMachine() {
    let cups = 0;

    return function () {
        cups++;
        console.log(`Чащка №${cups} готова`);
    };
}

const makeCoffee = coffeeMachine();
makeCoffee();
makeCoffee();
makeCoffee();

function jokeOfTheDay() {
    let shown = false;

    return function () {
        if (!shown) {
            shown = true;
            console.log('— Чому програмісти не люблять природу? — Бо там багато багів!');
        } else {
            console.log('Жарт вже був. Завтра новий');
        }
    }
}

const tellJoke = jokeOfTheDay();
tellJoke();
tellJoke();

function countdown(start) {
    for (let i = start; i >= 0; i--) {
        setTimeout(function () {
            console.log(i === 0 ? '🚀 Пуск!' : i);
        }, (start - i) * 1000);
    }
}

countdown(5);


function createComplaintBook() {
    let complaints = [];

    return {
        addComplaints: function (text) {
            complaints.push(text);
            console.log('Скаргу додано');
        },
        showComplaints: function () {
            console.log('Скарги: ');
            complaints.forEach((text, index) => {
                console.log(`${index + 1}. ${text}`);
            });
        }
    };
}

const mariaBook = createComplaintBook();
const annaBook = createComplaintBook();

mariaBook.addComplaints('Було дуже холодно у потязі');
annaBook.addComplaints('Чекала офіціанта 30 хвилин');
mariaBook.addComplaints('Кава була без цукру');

mariaBook.showComplaints();
annaBook.showComplaints();

function createTimer(buttonId) {
    let seconds = 0;
    let interval = null;

    document.getElementById(buttonId).addEventListener('click', function () {
        if (interval !== null) return;

        intervalId = setInterval(function () {
            seconds++;
            console.log(`Таймер ${buttonId}: ${seconds} сек`);
        }, 1000);
    });
}

createTimer('start1');
createTimer('start2');