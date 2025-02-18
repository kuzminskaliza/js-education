$(document).ready(function(){
    'use strict';

    $('.menu').find('a').css('color', 'red');

    $('#profile-pic').attr('src', 'flowers.png');

    $('#username').val('Donald123');

    $('#buy-btn').click(function(){
        alert('Товар: ' + $(this).data('product'));
    });

    $('.submit-btn').click(function(){
        $(this).closest('form').submit();
    });

    $('h1').text('Вітаємо на сайті');

    $('.content').html('<button class="dynamic-btn">Натисни на мене</button>');

    $('#terms').change(function () {
        if ($(this).is(':checked')) {
            alert('Дякуємо за згоду');
        }
    });

    $('.btn').click(function(){
        $(this).parent().css('border', '1px solid red');
    });

    $('.show-next').click(function(){
        $(this).next().slideDown();
    });

    $('.highlight-prev').click(function(){
        $(this).prev().css('font-weight', 'bold');
    });

    $('#add-item').click(function(){
        $('ul').append('<li>Новий елемент</li>');
    });

    $('.btn1').click(function(){
        $(this).addClass('active');
    });

    $('.hide-text').click(function(){
        $('p').removeClass('visible');
    });

    console.log('Знімаємо атрибут disabled')
    $('#submit-btn').removeAttr('disabled');

    $('.delete-btn').click(function(){
        $(this).parent().remove();
    });

    $('#hidden-btn').click(function(){
        alert('Схована кнопка натиснута!');
    });

    $('#trigger-btn').click(function(){
        $('#hidden-btn').trigger('click');
    });

    $(document).on('click', '.dynamic-btn', function() {
        alert('Динамічна кнопка натиснута!');
    });

});
