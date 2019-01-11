// Практика на работу с пользовательскими функциями

/*1. Дана строка. Сделайте заглавным первый символ каждого слова этой строки.
    Для этого сделайте вспомогательную функцию ucfirst,
    которая будет получать строку,
    делать первый символ этой строки заглавным и возвращать обратно строку с заглавной первой буквой.*/

/*var str = 'semup is bad company in around';
var arr = str.split(' ');
var res = [];

function ucfirst(str){
    var res_str = '';
    for(var i = 0; i<str.length; i++){
        if(i == 0){
            res_str += str[0].toUpperCase();
        }else{
            res_str += str[i];
        }
    }
    return res_str;
}

for(var i = 0; i<arr.length; i++){
    res.push(ucfirst(arr[i]));
}

str = res.join(' ');

alert(str);*/


// 2. Дана строка вида 'var_text_hello'. Сделайте из него текст 'varTextHello'.

/*var str = 'var_text_hello';
var arr = str.split('_');
var res = '';

for(var i = 0; i<arr.length; i++){
    if(i == 0){
        res += arr[i];
    }else{
        res += arr[i][0].toUpperCase() + arr[i].substr(1);
    }
}
alert(res);*/

/*3.Сделайте функцию inArray, которая определяет,
    есть в массиве элемент с заданным текстом или нет.
    Функция первым параметром должна принимать текст элемента,
    а вторым - массив, в котором делается поиск.
    Функция должна возвращать true или false.*/

/*function inArray(text, arr){
    for(var i = 0; i<arr.length; i++){
        if(arr[i] == text){
            return true;
        }
    }
    return false;
}
alert(inArray('хуй', ['хуй', 'пизда', 'Джигурда']));*/

// 4. Дана строка, например, '123456'. Сделайте из нее '214365'.

/*var str = '123456';
var arr = [];
var res = '';

for(var i = 1; i<=str.length; i++){
    if(i % 2 == 0){
        res += str.slice(i-2, i).split('').reverse().join('');
    }
}
alert(res);*/



