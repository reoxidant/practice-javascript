// Задача на slideUp, slideDown

// 1.  Повторите поведение страницы:

/*
$('#hide').click(function(){
   $('#block').slideDown(1000);
});

$('#show').click(function() {
    $('#block').slideUp(1000);
});*/
// Задача на slideToggle

// 2. Повторите поведение страницы:

/*
$('#hide').click(function(){
    $('#block').slideToggle(500);
});

$('#hide').click(function(){
    if($('#hide').html() == 'свернуть'){
        $('#hide').html('развернуть');
    }else{
        $('#hide').html('свернуть');
    }
});
*/

// Задача на fadeIn, fadeOut
// 3.Повторите поведение страницы:

/*$('#fadeOut').click(function(){
    $('#block').fadeOut(500);
});

$('#fadeIn').click(function(){
    $('#block').fadeIn(500);
});

$('#fadeToDown').click(function(){
   $('#block').fadeTo(500, 0.5);
});

$('#fadeToUp').click(function(){
    $('#block').fadeTo(500, 1);
});*/

// Метод animate
// 4. Задача на fadeToggle

/*$('#fadeToggle').click(function(){
    $('#block').fadeToggle(500);
    if($('#fadeToggle').html() == 'спрятать'){
        $('#fadeToggle').html('показать');
    }else{
        $('#fadeToggle').html('спрятать');
    }
});*/

// Задача на show, hide
// 5.Повторите поведение страницы:

/*$('#show').click(function(){
    $('#block').show(1000);
});

$('#hide').click(function(){
    $('#block').hide(1000);
});*/

// Задача на animate
// 6. Повторите поведение страницы (нажмите на блок):

/*
$('#block').click(function() {
    $('#block').animate({width: 200}, 1000);
});*/

// 7.Повторите поведение страницы (нажмите на блок несколько раз)

/*
$('#block').click(function(){
    $('#block').animate({width: '+=50'},1000);
});*/

// 8. Повторите поведение страницы (нажмите на блок несколько раз):
/*
$('#block').click(function(){
    $('#block').animate({width: '+=50', height: '+=50'}, 1000);
});*/

// 9. Повторите поведение страницы (нажмите на блок несколько раз):

/*
$('#block').click(function(){
    $('#block').animate({left: '+=100'}, 1000);
});*/
