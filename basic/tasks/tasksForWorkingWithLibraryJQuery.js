/*
Работа с эффектами

1. Повторите страницу по данному по образцу:
*/

/*$( "#block1" ).click(function(){ // задаем функцию при нажатиии на элемент с классом show
    $(this).slideUp(); // плавно отображаем все элементы <div>
});*/

// 2. Повторите страницу по данному по образцу:


/*$(document).ready(function(){
    $('#block1').click(
        function(){
            $(this).effect('blind', {direction: 'horizontal'}, 500);
            return false;
        }
    )
});*/

// 3. Повторите страницу по данному по образцу:

/*
$(document).ready(function(){
   $('#block1').click(function(){
       $(this).effect('bounce', 1000);
   })
});*/

// 4.Повторите страницу по данному по образцу:

/*
$(document).ready(function(){
    $('#block1').click(function(){
        $(this).effect('bounce', {direction: 'right'}, 1000);
    })
});*/

// 5. Повторите страницу по данному по образцу:

/*$(document).ready(function(){
    $('#block1').click(
        function(){
            $(this).effect('clip', 500);
            return false;
        }
    )
});*/

// 6. Повторите страницу по данному по образцу:

/*$(document).ready(function(){
    $('#block1').click(
        function(){
            $(this).effect('clip', {direction: 'horizontal'}, 500);
            return false;
        }
    )
});*/

// 7. Повторите страницу по данному по образцу:

/*$(document).ready(function () {
    $('#block1').click(
        function(){
            $(this).effect('drop', 500);
        }
    )
});*/

// 8. Повторите страницу по данному по образцу:

/*$(document).ready(function(){
    $('#block1').click(
        function () {
            $(this).effect('drop', {direction:'right'}, 500);
            return false;
        }
    )
});*/

// 9. Повторите страницу по данному по образцу:

/*$(document).ready(function(){
   $('#block1').click(
       function(){
           $(this).effect('drop', {direction:'down'},500);
           return false;
       }
   )
});*/

// 10. Повторите страницу по данному по образцу:

/*$(document).ready(function(){
    $('#block1').click(
        function(){
            $(this).effect('drop', {direction:'up'},500);
            return false;
        }
    )
});*/

// 11. Повторите страницу по данному по образцу:

/*
$(document).ready(function(){
   $('#block1').click(
       function(){
           $(this).effect('explode',{mode:"hide"}, 1000);
       }
   )
});*/

// 12. Повторите страницу по данному по образцу:

/*$(document).ready(function(){
    $('#block1').click(
        function(){
            $(this).effect('explode',{pieces: 4}, 1000);
        }
    )
});*/

// 13. Повторите страницу по данному по образцу:


/*$(document).ready(function(){
    $('#block1').click(
        function(){
            $(this).effect('fold', 1000);
            return false;
        }
    )
});*/

// 14. Повторите страницу по данному по образцу

/*$(document).ready(function(){
    $('#block1').click(
        function(){
            $(this).effect('fold',{horizFirst:true}, 1000);
            return false;
        }
    )
});*/

// 15. Повторите страницу по данному по образцу:

/*$(document).ready(function(){
    $('#block1').click(
        function(){
            $(this).effect('fold',{horizFirst:true, size:'30px'}, 1000);
            return false;
        }
    )
});*/

// 16. Повторите страницу по данному по образцу:

/*$(document).ready(function () {
   $('#link').mouseover(
       function(){
        $('#block1').effect('highlight',{color:'black'},500);
        return false;
   })
});*/

// 17. Повторите страницу по данному по образцу:

/*$(document).ready(function (){
    $('#block1').click(function () {
        $(this).effect('puff',{percent:300},1000);
        return false;
    })
});*/

// 18. Повторите страницу по данному по образцу:

/*$(document).ready(function (){
    $('#block1').click(function () {
        $(this).effect('pulsate',1000);
        return false;
    })
});*/

// 19. Повторите страницу по данному по образцу:

/*$(document).ready(function (){
    $('#block1').click(function () {
        $(this).effect('shake',1000);
        return false;
    })
});*/

// 20. Повторите страницу по данному по образцу:

/*$(document).ready(function (){
    $('#block1').click(function () {
        $(this).effect('shake',{direction:'up'},500);
        return false;
    })
});*/


// 21. Повторите страницу по данному по образцу:

/*$(document).ready(function (){
    $('#block1').click(function () {
        $(this).effect('slide',{mode:'hide'},1000);
        return false;
    })
});*/


// 22. Повторите страницу по данному по образцу:

/*$(document).ready(function (){
    $('#block1').click(function () {
        $(this).effect('slide',{mode:'hide',direction:'right'}, 1000);
        return false;
    })
});*/

// 23. Повторите страницу по данному по образцу:

/*$(document).ready(function(){
    $('#block1').click(function(){
        $(this).effect('slide',{mode:'hide',direction:'down'}, 1000);
        return false;
    })
});*/

// 24. Повторите страницу по данному по образцу:

/*$(document).ready(function(){
    $('#block1').click(function(){
        $(this).effect('slide',{mode:'hide',direction:'up'}, 1000);
        return false;
    })
});*/

// 25. Повторите страницу по данному по образцу:

/*$(document).ready(function () {
    $('#block').click(function(){
        $(this).effect('transfer',{to:'#block2'}, 1000);
        return false;
    })
});*/

// Аккордеон

// 26. Повторите страницу по данному по образцу:

/*$(document).ready(function () {
    $('#accordion').accordion();
});*/

// Вкладки

// 27. Повторите страницу по данному по образцу:

/*$(document).ready(function () {
    $('#tabs').tabs();
});*/

// 28. Повторите страницу по данному по образцу (вкладка реагирует на наведение):

/*$(document).ready(function(){
   $('#tabs').tabs({
       event: "mouseover"
   });
});*/

// 29. Повторите страницу по данному по образцу (можно закрыть все вкладки):

/*$(document).ready(function(){
   $('#tabs').tabs({
       collapsible: true
   })
});*/

// Календарь

// 30. Повторите страницу по данному по образцу:

/*$(document).ready(function(){
    $('#datepicker').datepicker();
});*/

// 31. Повторите страницу по данному по образцу (сменили формат):

/*$(document).ready(function(){
    $('#datepicker').datepicker({
        dateFormat: 'dd.mm.yy',
        changeMonth: true,
        changeYear: true
    })
});*/

// 32. Повторите страницу по данному по образцу (русификация):

/*$(document).ready(function(){
    $.datepicker.regional['ru'] = {
        closeText: 'Закрыть',
        prevText: '&#x3c;Пред',
        nextText: 'След&#x3e;',
        currentText: 'Сегодня',
        monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь',
            'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
        monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн',
            'Июл','Авг','Сен','Окт','Ноя','Дек'],
        dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
        dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
        dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
        dateFormat: 'dd.mm.yy',
        firstDay: 1,
        isRTL: false
    };
    $( "#datepicker" ).datepicker( $.datepicker.regional[ "ru" ] );
});*/

// 33. Повторите страницу по данному по образцу (методы):

/*$(document).ready(function () {
    $("#datepicker")
        .datepicker({
            dayNamesMin: [ "Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
            monthNames: [ "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь" ],
            firstDay: 1
        })
        .datepicker("option", "dateFormat", 'dd.mm.yy')
    $('#set-date').click(function(){
        $('#datepicker').datepicker("setDate", '10.12.2012');
        return false;
    });
    $('#show').click(function (){
        $('#datepicker').datepicker("show");
        return false;
    });
    $('#hide').click(function(){
        $('#datepicker').datepicker('hide');
        return false;
    });
});*/

// Вплывающая подсказка

// 34. Повторите страницу по данному по образцу:

/*$(document).ready(function(){
    $(document).tooltip();
});*/

// Диалоговое окно

// 35. Повторите страницу по данному по образцу:

/*$(document).ready(function () {
   $('#dialog').dialog();
});*/

// 36. Повторите страницу по данному по образцу (по событию):

/*$(document).ready(function(){
    $("#dialog").dialog({
            autoOpen: false,
        }
    );
    $('#show').click(function(){
        $( "#dialog" ).dialog( "open" );
        return false;
    });
    $('#hide').click(function(){
        $( "#dialog" ).dialog( "close" );
        return false;
    });
});*/

// 37. Повторите страницу по данному по образцу (анимация):

/*$(document).ready(function(){
   $('#dialog').dialog({
       autoOpen:false,
       show: 'blind',
       hide: 'explode'
   });
   $('#show').click(function(){
       $('#dialog').dialog('open');
       return false;
   });
   $('#hide').click(function(){
      $('#dialog').dialog('close');
      return false;
   });
});*/

// 38. Повторите страницу по данному по образцу (модальное окно):

/*$(document).ready(function(){
   $('#dialog').dialog({modal:true,autoOpen:false});
   $('#show').click(function(){
       $('#dialog').dialog('open');
       return false;
   });
   $('#hide').click(function(){
       $('#dialog').dialog('close');
       return false;
   })
});*/

// 39. Повторите страницу по данному по образцу (модальное сообщение):

/*$(document).ready(function(){
    $('#dialog').dialog({
        autoOpen:false,
        modal:true,
        buttons:{
            Ok:function(){
                $(this).dialog('close');
            }
        }
    });
    $('#show').click(function(){
        $('#dialog').dialog('open');
        return false;
    });
    $('#hide').click(function(){
        $('#dialog').dialog('close');
        return false;
    });
});*/

// 40. Повторите страницу по данному по образцу (модальное подтверждение):

/*$(document).ready(function () {
   $('#dialog').dialog({
       autoOpen: false,
       modal:true,
       buttons:{
           'Кнопка Ok':function(){
               alert('Вы нажали на кнопку OK - сейчас окно закроется!');
               $('#dialog').dialog('close');
               return false;
           },
           'Кнопка No':function(){
               alert('Вы нажали на кнопку No!');
               return false;
           },
           'Мне все ровно':function(){
               alert('Вам все равно, удалять эти файлы или нет!');
               return false;
           }
       }
   })
    $('#show').click(function(){
        $('#dialog').dialog('open');
        return false;
    })
    $('#hide').click(function(){
        $('#dialog').dialog('close');
        return false;
    })
});*/

// Автозаполнение

// 41. Повторите страницу по данному по образцу:

/*$(document).ready(function(){
    var availableTags = [
        "Беларусь",
        "Бельгия",
        "Бирма"
    ];
    $('#country').autocomplete({source:availableTags});
});
*/
