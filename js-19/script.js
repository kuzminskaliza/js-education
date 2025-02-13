'use strict';
$(document).ready(function () {
    $('#btn').click(function () {
        $('#div1').remove();
    })
})

$(document).ready(function () {
    $('#btn2').click(function () {
        $('#div2').empty();
    })
})

$(document).ready(function () {
    $('#btn3').click(function () {
        $('#h1, #h2, #p, #p2').addClass('color');
        $('#div3').addClass('important')
    })
})

$(document).ready(function () {
    $('#btn4').click(function () {
        $('#h1, #h2, #p, #p2').removeClass('color');
        $('#div3').removeClass('important')
    })
})

$(document).ready(function () {
    $('#btn5').click(function () {
        $('#h1, #h2, #p, #p2').toggleClass('color');
        $('#div3').toggleClass('important')
    })
})

$(document).ready(function () {
    $('#btn6').click(function () {
        $('h3').css({
            'background-color': 'lightblue',
            'font-size': '20px'
        });
    })
})


$(document).ready(function () {
    $('#btn7').click(function () {
        $('#box').width('100px').height('100px')
    })
});

$(document).ready(function () {
    $('span').parentsUntil('div').css({'color': 'red', 'border': '1px solid red'})
})

$(document).ready(function () {
    $('.descendants').children('span').css({'color': 'red', 'border': '1px solid red'})
})


$(document).ready(function () {
    $('#btn8').click(function () {
        $.get('demo_test.txt', function (data, status) {
            alert("Data: " + data + "\nStatus: " + status);
        })
    })
})

$(document).ready(function () {
    $('#btn9').click(function () {
        $.post('demo_test_post.asp', {
                name: 'donald Duck',
                city: 'New York'
            },
            function (data, status) {
                alert("Data: " + data + "\nStatus: " + status);
            })
    })
})

// $.noConflict();
// jQuery(document).ready(function () {
//     jQuery('#btn9').click(function () {
//         jQuery('#p3').text('Hello World!')
//     })
// })

$(document).ready(function () {
    $('#myInput').on('keyup', function () {
        let value = $(this).val().toLowerCase();
        $('#myTable tr').filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        })
    })
})

