//Задачи на работу с набором
// 1. Найдите все <li>, исключив из набора <li> с классом test.

// $('li').not('.test');

// 2.Найдите первый <li> в наборе.

// $('li').first();

// 3. Найдите последний <li> в наборе.

// $('li').last();

// 4. Найдите пятый <li> в наборе.

// $('li').eq(4);

// 5.Найдите предпоследний <li> в наборе.

// $('li').eq(-2);

// 6. Найдите с 3-го по 10-тый <li> в наборе.

// $('li').slice(2, 10);

// 7. Найдите все <li> затем с помощью filter выберите все li с классом .www.

// $('li').filter('.www');

// Задачи на соседей
// 8. Найдите первый элемент, который стоит непосредственно за элементом с классом test.

// $('.test').next();

// 9. Найдите первый элемент, который стоит непосредственно перед элементом с классом test.

// $('.test').prev();

// 10. Найдите все элементы, которые идут непосредственно за элементом с классом test.

// $('.test').nextAll();

// 11. Найдите все элементы, которые идут непосредственно перед элементом с классом test.

// $('test').prevAll();

// 12. Найдите все элементы, которые лежат между элементом с классом www и элементом с классом test через nextUntil.

// $('.www').nextUntil('.test');

// 13. Найдите все элементы, которые лежат между элементом с классом test и элементом с классом www через prevUntil.

// $('.test').prevUntil('.www');

// 14.Найдите всех соседей <li> с классом www.

// $('li').siblings('.www');

// 15. Найдите всех соседей <li> с классом www, которые (соседи) имеют класс test.

// $('li.www').siblings('.test');

// 16.Найдите всех соседей <li> с классом www, но не соседа с классом test.

// $('li.www').siblings(':not(.test)');

// Задачи на родителей
// 17. Найдите родителя элемента с классом test.

// $('.test').parent();

// 18. Найдите родителей всех тегов <b> и сделайте их красным цветом.

// $('b').parent().css('color', 'red');

// 19. Найдите ближайших дивов-родителей всех тегов <b> и сделайте их красным цветом.

// $('b').closest('div').css('color','red');

// Задачи на find, add, andSelf, end
// 20. Найдите все <h2> с классом .www, сделайте их красного цвета, затем среди найденных элементов найдите элементы с классом .test и поставьте им размер шрифта в 30px.

// $('h2.www').css('color','red').find('.test').css('font-size','30px');

// 21.Найдите все элементы с классом .www, сделайте их красного цвета, затем среди найденных элементов найдите абзацы и поставьте им в конец текст '!'.

// $('.www').css('color', 'red').find('p').append('!');

// 22. Найдите все абзацы <p> с классом .www, поставьте им в начало текст '!', а в конец текст '!!', затем добавьте к этим абзацам еще и заголовки <h2> и покрасьте эти абзацы и заголовки в красный цвет.

// $('p.www').prepend('!').append('!!').add('h2').css('color', 'red');

// Задачи на is

// 23. Найдите все <h2>, проверьте, что среди найденных есть <h2> с классом test.

// $('h2').is('h2.test');

// 24. Найдите все элементы непосредственно стоящие после заголовков. Если найденный элемент - абзац, добавьте ему в конец содержимое заголовка над ним.

/*
$(':header').nextAll().each(function(){
    if($(this).is('p')){
        $(this).append($(':header').html());
    }
});*/

// 25. Найдите все элементы непосредственно стоящие после заголовков. Если найденный элемент - не абзац, вставьте под заголовком абзац с таким же содержимым, как и заголовок.

/*$(':header').nextAll().each(function(){
    if(!$(this).is('p')){
        $(':header').after('<p>'+$(':header').html()+'</p>');
    }
});*/

