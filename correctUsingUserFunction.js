// Правильное использование пользовательских функций

//Задачи для решения

// 1. Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет,
// что оно больше нуля и меньше 10.
// Если это так - пусть функция возвращает true, если не так - false.

/*function isNumberInRange(num){
    if(num > 0 && num < 10){
        return true;
    }else{
        return false;
    }
}

isNumberInRange(-9);*/

/*2. Дан массив с числами.
    Запишите в новый массив только те числа, которые больше нуля и меньше 10-ти.
    Для этого используйте вспомогательную функцию isNumberInRange из предыдущей задачи.*/

/*var arr = [11,25,32,4,5,6,75,8,9,10];
var res = [];

function isNumberInRange(num){
    if(num > 0 && num < 10){
        return true;
    }else{
        return false;
    }
}

for(var i = 0; i < arr.length; i++){
    if(isNumberInRange(arr[i])){
        res.push(arr[i]);
    }
}

alert(res);*/

/*3. Cделайте функцию getDigitsSum (digit - это цифра),
которая параметром принимает целое число и возвращает сумму его цифр.*/

/*function getDigitsSum(num){
    var num = String(num);
    var res = 0;
    for(var i = 0; i < num.length; i++){
        res += Number(num[i]);
    }
    return res;
}

alert(getDigitsSum(12));*/


/*4. Найдите все года от 1 до 2019, сумма цифр которых равна 13.
Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи.*/


/*function getDigitsSum(num){
    var num = String(num);
    var res = 0;
    for(var i = 0; i < num.length; i++){
        res += Number(num[i]);
    }
    return res;
}
var valYear = 2019;
var res = [];

for(var i = 1; i <= valYear; i++){
    if(getDigitsSum(i) == 13){
        res.push(i);
    }
}

for (var i = 0; i<res.length; i++){
    document.write(res[i]+'<br>');
}*/

/*5. Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет.
    Если четное - пусть функция возвращает true, если нечетное - false. */


/*function isEven(num){
    if(num % 2 == 0){
        return true;
    }else{
        return false;
    }
}
alert(isEven(50));*/

/*6. Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные из этих чисел.
    Для этого используйте вспомогательную функцию isEven из предыдущей задачи.*/

/*var arr = [1,2,3,4,5,6,7,8,10];
var res = [];

for(var i = 0; i<arr.length; i++){
    if(isEven(arr[i])){
        res.push(arr[i]);
    }
}

function isEven(num){
    if(num % 2 == 0){
        return true;
    }else{
        return false;
    }
}

alert(res);*/

// 7. Сделайте функцию getDivisors, которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число).


/*function getDivisors(num){
    var res = [];
    for(var i = 0; i < num; i++){
        if(num % i == 0){
            res.push(i);
        }
    }
    return res;
}

alert(getDivisors(500));*/
