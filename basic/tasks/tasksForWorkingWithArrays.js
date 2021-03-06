// Задачи на функции работы с массивами в JavaScript

//Задача 1 Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.

/*var arr1 = ['a','b','c'];
var arr2 = [1,2,3];

var merge_arr = arr1.concat(arr2);
alert(merge_arr);*/

// Задача 2. Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.

/*var arr1 = ['a','b','c'];
arr1.push(1,2,3);
alert(arr1);*/

// Задача 3. Многомерные массивы
// Переменная lang может принимать два значения: 'ru' и 'en'. Переменная month может принимать значения от 0 до 11.

// var lang = {ru:['Январь','Февраль'],en:['January','Febrary']};

// Работа с concat

// 1. Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.

/*var arr1 = [1,2,3];
var arr2 = [4,5,6];
var res = arr1.concat(arr2);
alert(res);*/

// Работа с reverse

// 2. Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].

/*var arr = [1,2,3];
alert(arr.reverse());*/

// Работа с push, unshift

// 3. Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.

/*var arr = [1,2,3];
arr.push(4,5,6)
alert(arr);*/

// 4. Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.

/*var arr = [1,2,3];
arr.unshift(4,5,6);
alert(arr);*/

// Работа с shift, pop

// 5. Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.

/*var arr = ['js', 'css', 'jq'];
alert(arr.shift());*/

// 6. Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.

/*var  arr = ['js','css','jq'];
alert(arr.pop());*/

// Работа с slice

// 7. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].

/*var arr = [1,2,3,4,5];
var new_arr = arr.slice(0,3);
alert(new_arr);*/

// 8. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].

/*var arr = [1,2,3,4,5];
var new_arr = arr.slice(3,5);
alert(new_arr);*/

// Работа с splice

// 9. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].

/*var arr = [1,2,3,4,5];
arr.splice(1,2);
alert(arr);*/

// 10. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].

/*var arr = [1,2,3,4,5];
var narr = arr.splice(1,3);
alert(narr);*/

// 11. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].

/*var arr = [1,2,3,4,5];
arr.splice(3,0,'a','b','c');
alert(arr);*/

// 12. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

/*var arr = [1,2,3,4,5];
arr.splice(1,0,'a','b');
arr.splice(6,0,'c');
arr.splice(8,0,'e');
alert(arr);*/


// Работа с sort

// 13. Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.

/*var arr =[3,4,1,2,7];
arr.sort();
alert(arr);*/


// Работа с Object.keys

// 14. Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей.

/*var obj = {js:'test',jq:'hello',css:'world'};
var res = Object.keys(obj);
alert(res);*/
