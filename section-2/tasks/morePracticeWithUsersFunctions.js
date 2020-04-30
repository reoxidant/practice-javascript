// Продвинутая работа с пользовательскими функциями в JavaScript

// Работа с рекурсией

// 1. Дан массив с числами.
// Выведите последовательно его элементы используя рекурсию и не используя цикл.

/*var arr = [1,2,3,4,5,6,7,8];
var res = '';

function displayVal(arr){
    alert(arr.shift());
    if(arr.length != 0){
        displayVal(arr);
    }
}

displayVal(arr);*/

/*2. Дано число. Сложите его цифры.
    Если сумма получилась более 9-ти, опять сложите его цифры.
    И так, пока сумма не станет однозначным числом (9 и менее).*/

/*var number = 28064;
var arr = number.toString().split('');;
var res = 0;
function displayVal(arr){
    res += Number(arr.shift());
    if(arr.length > 0){
        if(res > 9){
            return false;
        }
        displayVal(arr);
    }
}

displayVal(arr);
alert(res);*/

