// Задачи на функции работы со строками в JavaScript

// Задача 1. Поиск и замена

// Задача. Дана строка 'aaa@bbb@ccc'. Замените все @ на '!' с помощью глобального поиска и замены.

/*var str = "aaa@bbb@ccc";
alert(str.replace(/@/g,'!'));*/

// Задача 2. Методы substr, substring, slice

/*var str = 'aaa bbb ccc';
alert(str.substr(4,3));*/

// Задачи 3.Преобразование формата даты

/*var str = '2025-12-31';
var arr = str.split('-');
alert(arr);
var newStr = arr[2] + '/' + arr[1] + '/' + arr[0];
alert(newStr);*/

// Задачи для решения

// Работа с регистром символов

// 1. Дана строка 'js'. Сделайте из нее строку 'JS'.

/*var str = 'js';
str = str.toUpperCase();
alert(str);*/

// 2. Дана строка 'JS'. Сделайте из нее строку 'js'.

/*var str = 'JS';
str = str.toLowerCase();
alert(str);*/

// Работа с length, substr, substring, slice. Работа с indexOf

// 3. Дана строка 'я учу javascript!'. Найдите количество символов в этой строке.

/*var str = 'я учу javascript';
alert(str.length);*/

/*4. Дана строка 'я учу javascript!'. Вырежите из нее слово 'учу' и слово 'javascript' тремя разными способами (через substr, substring, slice).*/

/*var str = 'я учу javascript!';
var word1 = str.substr(2,3);
var word1 = str.substring(2,5);
var word1 = str.slice(2,5);
var word2 = str.substr(5,11);
var word2 = str.substring(5,16);
var word2 = str.slice(5,16);
alert(word2);*/

// 5. Дана строка 'я учу javascript!'. Найдите позицию подстроки 'учу'.

/*var str = 'я учу javascript!';
alert(str.indexOf('учу'))*/

/*6. Дана переменная str, в которой хранится какой-либо текст.
    Реализуйте обрезание длинного текста по следующему принципу:
    если количество символов этого текста больше заданного в переменной n,
    то в переменную result запишем первые n символов строки str и добавим в конец троеточие '...'.
    В противном случае в переменную result запишем содержимое переменной str.*/

/*var str = 'I am working as a Programmer';
var n = 3;
var result = '';

if(str.length > n){
    result = str.substr(0,n)+'...';
}else{
    result = str;
}
alert(result);*/

// Работа с replace

/*7. Дана строка 'Я-учу-javascript!'.
    Замените все дефисы на '!' с помощью глобального поиска и замены.*/

/*var str = 'Я-учу-javascript!';
alert(str.replace(/-/g,'!'));*/

// Работа с split

/*8. Дана строка 'я учу javascript!'.
    С помощью метода split запишите каждое слово этой строки в отдельный элемент массива. */

/*var str = 'я учу javascript!';
var array = [];
array = str.split(' ');
alert(array);*/

/*9. Дана строка 'я учу javascript!'.
    С помощью метода split запишите каждый символ этой строки в отдельный элемент массива.*/

/*var str = 'я учу javascript!';
var array = [];
array = str.split('');
alert(array);*/

// 10. В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31.12.2025'.

/*var date = '2025-12-31';
var array = [];
array = date.split('-');
alert(array[2]+'.'+array[1]+'.'+array[0]);*/

// Работа с join

/*11. Дан массив ['я', 'учу', 'javascript', '!'].
    С помощью метода join преобразуйте массив в строку 'я+учу+javascript+!';*/

/*var array = ['я','учу','javascript','!'];
alert(array.join('+'));*/

//Задачи
// 12. Преобразуйте первую букву строки в верхний регистр.

/*var str = 'javascript';
alert(str[0].toUpperCase() + str.slice(1));*/

// 13. Преобразуйте первую букву каждого слова строки в верхний регистр.

/*var str = 'javascript вот что я люблю!';
var array = [];
array = str.split(' ');
for(var i = 0; i < array.length; i++){
    array[i] = array[i][0].toUpperCase() + array[i].slice(1);
}
alert(array);*/

/*14. Преобразуйте строку 'var_test_text' в 'varTestText'.
    Скрипт, конечно же, должен работать с любыми аналогичными строками.*/

/*var str = 'var_test_text';
var arr = [];
arr = str.split('_');
for (var i = 0; i < arr.length; i++){
    if(i == 0){}else {
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    }
}
alert(arr.join(''));*/




