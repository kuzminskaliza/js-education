$(document).ready(function () {
    $('#p1').click(function () {
        $(this).hide();
    });
});

$(document).ready(function () {
    $('#p2').dblclick(function () {
        $(this).hide()
    })
});

// $(document) . ready(function () {
//     $('#p3').mouseenter(function () {
//         alert('You entered p3')
//     })
// });
//
// $(document).ready(function () {
//     $('#p4').mousedown(function () {
//         alert('Mouse down over p4')
//     })
// });
//
// $(document).ready(function () {
//     $('#p5').mouseup(function () {
//         alert('Mouse up over p45')
//     })
// });
//
// $(document).ready(function () {
//     $('#p6').hover(function () {
//         alert('Ypu entered p6');
//     },
//         function () {
//         alert('Bye')
//         })
// });

$(document).ready(function () {
    $('#input1').focus(function () {
        $(this).css('background-color', 'blue')
    });
    $('#input2').blur(function () {
        $(this).css('background-color', 'green')
    })
});

$(document).ready(function () {
    $('#p7').on('click', function () {
        $(this).hide()
    })
})


$(document).ready(function () {
    $('#button1').click(function () {
        $('#p8').toggle();
    })
})


$(document).ready(function () {
    $('#button2').click(function () {
        $('#div1').fadeIn(1000);
        $('#div2').fadeOut('slow');
        $('#div3').fadeToggle(1000);
        $('#div4').fadeTo(1000, 0.4);
    })
})


$(document).ready(function () {
    $('#flip').click(function () {
        $('#panel').slideToggle(3000)
    });
    $('#stop').click(function () {
        $('#panel').stop();
    })
})

$(document).ready(function () {
    $('#button3').click(function () {
        const div = $('#div5')
        div.animate({left: '100'}, 1000);
        div.animate({fontSize: '3em'}, 1000);
    });
});


$(document).ready(function () {
    $('#button4').click(function () {
        const div = $('#div6')
        div.animate({height: '300px', opacity: '0.4'}, 'slow');
        div.animate({width: '300px', opacity: '0.8'}, 'slow');
        div.animate({height: '100px', opacity: '0.4'}, 'slow');
        div.animate({width: '100px', opacity: '0.8'}, 'slow');

    });
});


$(document).ready(function () {
    $('#button5').click(function () {
        $('#p9').css('color', 'red').slideUp(2000).slideDown(2000);
    });
});

$(document).ready(function () {
    $('#btn1').click(function () {
        alert('Text: ' + $('#test').text());
    });
    $('#btn2').click(function () {
        alert('HTML: ' + $('#test').html());
    });
});

$(document).ready(function () {
    $('#button6').click(function () {
        alert('Value: ' + $('#test1').val());
    });
});


$(document).ready(function () {
    $('#btn3').click(function () {
        $('#p10').append('<b>Appended item</b>')
    });
    $('#btn4').click(function () {
        $('ol').append('<li>Appended item</li>')
    });
});
