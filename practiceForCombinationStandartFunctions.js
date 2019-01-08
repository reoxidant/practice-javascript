// Практика на комбинации стандартных функций JavaScript
// Отработка стандартных функций JavaScript

// 1.Дана строка. Сделайте заглавным первый символ этой строки не используя цикл. Найдите два решения.

/* var str = 'javascript';
str = str[0].toUpperCase() + str.slice(1,10);
str = str.slice(0,1).toUpperCase() + str.substring(1,10);
alert(str);*/

// 2. Дана строка, например, '123456'. Переверните эту строку (сделайте из нее '654321') не используя цикл.

/*var str = '123456';
str = str.split('');
str = str.reverse();
str = str.join('');
alert(str);*/

// 3. Дано число, например, 3751. Отсортируйте цифры в нем (сделайте из него 1357) не используя цикл.

/*var str = '3751';
var arr = str.split('');
var arr = arr.sort();
str = arr.join('')
alert(str);*/

// 4. Проверьте, что строка начинается на http://.

/*var str = 'https://yandex.ru/';
if(!str.indexOf('http://')){
    console.log('Совпадает!');
}else{
    console.log('Не совпадает!');
}*/

// 5. Проверьте, что строка заканчивается на .html

/*var str = 'index.html';
if(str.substr(-5) == '.html'){
    console.log('Совпадает!');
}else{
    console.log('Не совпадает!');
}*/
