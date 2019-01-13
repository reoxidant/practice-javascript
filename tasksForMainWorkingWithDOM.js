// Задачи на основы работы с DOM в JavaScript

// Примеры решения задач

// Задача 1. Алерт по нажатию на кнопку

// alert('???');

// Задачи 2. Изменение текста в инпуте

/*function buttonClick(){
    var input = document.getElementById('input');
    input.value = '!!!';
}*/

// Задачи 3. Вывод содержимого инпута

/*
function buttonClick(){
    var input = document.getElementById('input');
    alert(input.value);
}*/

// Задача 4. Повторите поведение кнопки по нажатию на нее (она выводит алертом содержимое инпута, возведенное в квадрат):

/*function buttonClick() {
    var input = document.getElementById('input');
    var number = Number(input.value);
    var square = number*number;
    alert(square);
}*/

// Задача 5. Обмен содержимым между инпутами
/*Повторите поведение кнопки по нажатию на нее
(она осуществляет обмен содержимым между двумя инпутами,
    можете понажимать на нее несколько раз или вручную
сменить содержимое инпутов):*/

/*function buttonClick() {
    var input1 = document.getElementById('input1');
    var input2 = document.getElementById('input2');
    var valueInput1 = input1.value;
    var valueInput2 = input2.value;
    input1.value  = valueInput2;
    input2.value = valueInput1;
}*/

/*6. По нажатию на кнопку меняется ее текст
Повторите поведение кнопки по нажатию на нее (поменяется ее текст):*/

/*function buttonClick(elem) {
    elem.value = 'Нажатие на кнопку';
}*/

// 7. Работа с CSS

// Повторите поведение кнопки по нажатию на нее (она меняет цвет текста в инпуте):

/*function buttonClick(elem){
    elem.style.color = 'red';
}*/

// 8. Блокирование полей ввода
// Повторите поведение кнопок по нажатию на них (одна из них блокирует инпут с помощью атрибута disabled, а другая разблокирует):

/*function buttonClick(elem) {
    if(elem.id == '2'){
        document.getElementById('input').disabled = true;
    }else{
        document.getElementById('input').disabled = false;

    }
}*/

// События через атрибуты

// 1. Повторите страницу по данному по образцу:

/*
function buttonClick(){
    alert('Привет!');
}*/

// 2. Повторите страницу по данному по образцу:

/*function buttonClick(){
    alert('Привет!');
}*/

// 3.Повторите страницу по данному по образцу:

/*function buttonClick(){
    alert('Привет!');
}*/

// 4. Повторите страницу по данному по образцу:

/*function buttonClick(){
    alert('Привет!');
}*/

// Метод getElementById и работа с атрибутами

// 5. Повторите страницу по данному по образцу:

/*function buttonClick(){
    var elem = document.getElementById('input');
    alert(elem.value);
}*/

// 6. Повторите страницу по данному по образцу:

/*function buttonClick(){
    var elem = document.getElementById('input');
    elem.value = 'Ой, я поменял свой текст!';
}*/

// 7. Повторите страницу по данному по образцу:

/*function buttonClick(){
    var img = document.getElementById('test');
    img.src = 'images/2.jpg';
}*/

// Работа с this

// 8. Повторите страницу по данному по образцу:

/*function buttonClick(){
    alert('Нажми на меня!');
}*/

// 9. Повторите страницу по данному по образцу:

/*function buttonClick(element){
    element.value = 'Ой, я поменял текст!';
}*/

// 10. Повторите страницу по данному по образцу:

/*function buttonClick(element){
    element.value = 'Ой, я поменял текст!';
}

function buttonClick2(element){
    element.value = 'Ой, а теперь еще раз поменял!';
}*/

// 11. Повторите страницу по данному по образцу:

/*function buttonClick(element){
    element.value = 'Ку-ку';
}*/

// 12. Повторите страницу по данному по образцу:

/*function buttonClick(element){
    element.disabled = true;
    element.value = 'О, теперь на меня больше не нажать!';
}*/

// 13. Повторите страницу по данному по образцу:

/*function buttonClick(element){
    element.src = 'images/2.jpg';
}

function buttonClick2(element){
    element.src = 'images/1.jpg';
}*/

// Работа с CSS

// 14. Повторите страницу по данному по образцу:

/*function buttonClick(){
    var input = document.getElementById('input');
    input.style.color = 'red';
    input.style.width = '200px';
}*/

// 15. Повторите страницу по данному по образцу:

/*function buttonClick(){
    var input = document.getElementById('input');
    input.style.display = 'none';
}

function buttonClick2(){
    var input = document.getElementById('input');
    input.style.display = 'inline';
}*/

// 16. Повторите страницу по данному по образцу:

/*function buttonClick(){
    var input = document.getElementById('input');
    input.value = 'Ой, я поменял свой текст и css!';
    input.style.width = '300px';
    input.style.height = '50px';
    input.style.color = 'red';
    input.style.borderRadius = '10px';
}*/

// 17. Повторите страницу по данному по образцу:

/*function buttonClick(elem){
    elem.disabled = true;
    elem.value = 'О, теперь на меня больше не нажать!';
    document.getElementById('input2').style.display = 'inline';
}

function buttonClick2(elem){
    var input = document.getElementById('input');
    elem.style.display = 'none';
    input.disabled = false;
    input.value = 'Нажми на меня!';
}*/

// 18. Повторите страницу по данному по образцу:

/*function buttonClick(elem){
    var value = Number(elem.value);
    elem.value = value += 1;
}*/

// 19. Повторите страницу по данному по образцу:

/*function buttonClick(){
    var input = document.getElementById('input');
    input.value = 'Теперь я плаваю справа!';
    input.style.cssFloat = 'right';
}*/

// 20. Повторите страницу по данному по образцу:

/*function buttonClick(){
    var input = document.getElementById('input');
    var class_name = input.className;
    input.value = 'Мои css классы: '+class_name;
}*/

// Закрепление пройденного

// 21. Повторите страницу по данному по образцу:

/*function buttonClick(){
    var val1 = document.getElementById('input1');
    var val2 = document.getElementById('input2');
    var text_input1 = val1.value;
    var text_input2 = val2.value;
    val2.value = text_input1;
    val1.value = text_input2;
}*/

// 22. Повторите страницу по данному по образцу:

/*function buttonClick(){
    var input = document.getElementById('input1');
    var input2 = document.getElementById('input2');
    input2.value = input.value * input.value ;
}*/

// 23. Повторите страницу по данному по образцу:

/*function buttonClick(){
    var input = document.getElementById('input1');
    var input2 = document.getElementById('input2');
    if(isNaN(input.value)){
        alert('Введено не число!');
    }else{
        input2.value = input.value * input.value ;
    }
}*/

// 24. Повторите страницу по данному по образцу:

/*function buttonClick(elem){
    elem.disabled = true;
    elem.style.cursor = 'not-allowed';
}*/


// 25. Повторите страницу по данному по образцу:

/*function buttonClick(elem){
    var input = document.getElementById('input');
    if(elem.value == 'Я добавлю +' ){
        input.value += '+';
    }else if(elem.value == 'Я добавлю -'){
        input.value += '-';
    }else if(elem.value == 'Я добавлю *'){
        input.value += '*';
    }else if(elem.value == 'Я добавлю /'){
        input.value += '/';
    }
    else{
        input.value += elem.value;
    }
}*/
