// jshint esversion: 6

$(document).ready(function(){
    'use strict';
    let animationDocument = {
        containerSelector: '.container',
        starButtonSelector: '#addStars',
        heartSelector: '#heart',
        showHoroscopeSelector: '#showHoroscope',
        randomTextSelector: '#randomText',
        specialButtonSelector: '#specialButton',
        stopButtonSelector: '#stop',
        listenButtonSelector: '#listen',
        outputSelector: '#output',
        getNumberSelector: '#getNumber',
        showNumberSelector: '#showNumber',
        resultSelector: '#result',
        catSelector: '#cat',
        removeCatSelector: '#removeCat',

        starPath: 'img/star.png',
        horoscopes: [
            "Сьогодні вам пощастить у нових починаннях.",
            "Хороший день для спілкування.",
            "Сьогодні варто звернути увагу на дрібниці.",
            "Можливі невеликі труднощі, але вони не завадять досягти вашої мети.",
            "Сьогодні ви можете зустріти нових людей, і це принесе позитив.",
            "Ваші ідеї сьогодні будуть особливо яскравими.",
            "Не бійтеся змін — вони принесуть користь.",
            "Легкі труднощі сьогодні швидко минуть.",
            "Важливі новини можуть прийти несподівано."
        ],

        init: function(){
            console.log('запустили обʼєкт функцій');
            this.initListenerOnAddStars();
            this.initListenerOnHeartClick();
            this.initListenerOnHoroscopeClick();
            this.initListenerOnSpecialButton();
            this.initListenerOnListenButton();
            this.initListenerOnNumberGuess();
            this.initListenerOnCatMove();
        },
        initListenerOnAddStars: function(){
            let $this = this;
            $(this.starButtonSelector).on('click', function () {
                let img = $('<img>').attr('src', $this.starPath).addClass('star');
                img.css({
                    width: Math.random() * 50 + 20 + 'px',
                    height: 'auto',
                    position: 'absolute',
                    left: Math.random() * 100 + '%',
                    top: Math.random() * 100 + '%'
                });
                $($this.containerSelector).append(img);
                setInterval(function () {
                    img.css('opacity', Math.random());
                }, 1000);
            });
        },
        initListenerOnHeartClick: function(){
            $(this.heartSelector).on('click', function () {
                $(this).toggleClass('heart-animation');
            });
        },
        initListenerOnHoroscopeClick: function(){
            let $this = this;
            $(this.showHoroscopeSelector).on('click', function () {
                let randomNumber = Math.floor(Math.random() * $this.horoscopes.length);
                let horoscope = $this.horoscopes[randomNumber];

                let $randomText = $($this.randomTextSelector);
                $randomText.text('');

                let i = 0;
                let interval = setInterval(() => {
                    $randomText.text(horoscope.slice(0, i));
                    i++;
                    if (i === horoscope.length) {
                        clearInterval(interval);
                    }
                }, 200);
            });
        },

        initListenerOnSpecialButton: function(){
            let $this = this;
            let isMagicOn = true;
            $(this.stopButtonSelector).on('click', function () {
                isMagicOn = !isMagicOn;
                $(this).text(isMagicOn ? 'Виключити магію' : 'Включити магію');
            });

            $(this.specialButtonSelector).on('mousemove', function () {
                if (!isMagicOn) return;
                let container2 = $('.container2');
                let containerRect = container2[0].getBoundingClientRect();
                let rect = $(this)[0].getBoundingClientRect();

                let x = (Math.random() * 200) - 100;
                let y = (Math.random() * 200) - 100;

                let newX = rect.left + x - containerRect.left;
                let newY = rect.top + y - containerRect.top;

                newX = Math.max(0, Math.min(containerRect.width - rect.width, newX));
                newY = Math.max(0, Math.min(containerRect.height - rect.height, newY));

                $(this).css({
                    left: newX + 'px',
                    top: newY + 'px'
                });
            });
        },

        initListenerOnListenButton: function(){
            let $this = this;
            let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            let speak = new SpeechRecognition();
            speak.lang = 'uk-UA';
            speak.interimResults = false;
            speak.continuous = false;

            $(this.listenButtonSelector).on('click', function () {
                speak.start();
            });

            speak.onresult = function (event) {
                let text = event.results[0][0].transcript.toLowerCase();
                console.log(text);

                let response;
                if (text.includes('привіт')) {
                    response = 'Привіт, Ліза!';
                } else if (text.includes('яка погода')) {
                    response = 'Не знаю, я ж не Google';
                } else if (text.includes('котра година')) {
                    let date = new Date();
                    response = `Зараз ${date.getHours()}:${date.getMinutes()}`;
                } else if (text.includes('як справи')) {
                    response = 'Дякую, все добре! А в тебе?';
                } else if (text.includes('розкажи жарт')) {
                    response = 'Чому програмісти не люблять природу? Бо в ній багато багів';
                } else {
                    response = 'Я не розумію цю команду';
                }

                $($this.outputSelector).text(response);
            };
            speak.onspeechend = function () {
                speak.stop();
            };
        },

        initListenerOnNumberGuess: function(){
            let $this = this;
            let mysteryNumber = Math.floor(Math.random() * 100);
            $(this.showNumberSelector).on('click', function () {
                let userNumber = Number($($this.getNumberSelector).val());

                let resultText;
                if (userNumber < mysteryNumber ) {
                    resultText = 'Більше';
                } else if (userNumber > mysteryNumber) {
                    resultText = 'Менше';
                } else {
                    resultText = 'Вітаю, ви вгадали число';
                }
                $($this.resultSelector).text(resultText);
            });
        },

        initListenerOnCatMove: function(){
          let $this = this;
          $(document).on('mousemove', function (event) {
              let x = event.clientX;
              let y = event.clientY;

              $($this.catSelector).css({
                  left: x + 'px',
                  top: y + 'px',
                  position: 'absolute'
              });
          });
          $(this.removeCatSelector).on('click', function () {
              $($this.catSelector).remove();
          });
        }
    };
    animationDocument.init();
});
