// Задачи на приемы работы с циклами на JavaScript

// На цикл в цикле

// 1. Выведите на экран таблицу умножения (как в школьной тетради).

/*var arr = [2,3,4,5,6,7,8,9];
var res = 0;
var k = 0;

for(var i = 1; i <= arr.length; i++){
    document.write('<p>');
    for(var l = 1; l <= 9; l++){
        res = arr[k]*l;
        document.write(arr[k] + ' x ' + l + ' = ' + res);
        document.write('<br>')
    }
    document.write('</p>');
    k++;
}*/

// Пирамидки

// 2. С помощью цикла for сформируйте строку '123456789' и запишите ее в переменную str.

/*var str = '';
for(var i = 1; i < 10; i++){
    str+=i;
}
alert(str);*/

// 3. С помощью цикла for сформируйте строку '987654321' и запишите ее в переменную str.

/*var str = '';
for(var i = 9; i!=0; i--){
    str += i;
}
alert(str);*/

// 4. С помощью цикла for сформируйте строку '-1-2-3-4-5-6-7-8-9-' и запишите ее в переменную str.

/*var str = '';
for(var i = 1; i < 10; i++){
    str += '-'+i;
}
alert(str+'-');*/

// 5. Нарисуйте пирамиду, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:

/*var str = '';
for(var i = 0; i < 20; i++){
    var k = 1;
    while(k != 0){
        str+='x';
        k--;
    }
    document.write(str+'<br>');
}*/

// 6. С помощью двух вложенных циклов нарисуйте следующую пирамидку:

/*var str = '';
for(var i = 1; i <= 9; i++){
    for(var j = 1; j <= i; j++){
        document.write(i);
    }
    document.write('<br>')
}*/

// 7. Нарисуйте пирамиду, как показано на рисунке, воспользовавшись циклом for:

/*var str = '';
for(var i = 1; i < 6; i++){
    for(var j = 1; j <= i; j++){
        str += 'xx';
    }
    str += '<br>';
}
document.write(str);*/
