//TODO Как обозначить массив
var arr = [];
//          0,1,2,3,4,5,6,7,8,9
//TODO Массив имеет индексы и может содержать в себе разные значение,переменные и выражения в том числе другие массивы
//var arr2 = [['world',2,3],1,2,3,4,5,6,7,8,9,10];

/*var a = 'script';
var arr3 = [1,2,3,4,5,a,7,8,[1,2,3],10];

var arr4 = [a+10,a-5];*/

//TODO  обьявляем и создаем обьект массива, приписывая в обьекте параметры - содержание будующего массива

/*var arr3 = new Array();//[]
//
var arr4 = new Array(5);//[]

var arr5 = new Array(1,2,3,4,5,6,7,'test',9,10);//[]*/

//TODO С помощью переменных и оператора [], мы можем обращаться в существующему
// массиву указывая индекс опеределенной ячейки массива.

var i = 5;

//TODO заносим в ячейку с индексом 5 значения hello
arr2[5] = 'hello';

arr2[10] = 11;
arr2[11] = 12;

//TODO пример разряженного массива
//arr2[100] = 100;

//TODO ниже код не сработает, потому что мы обращаемся к числовому индексу элемента, а ли к свойству массива
/*arr2['hello'] = 'world';
arr2['hello2'] = 'world';
arr2['hello3'] = 'world';*/

//alert(arr2);

//TODO запишем все ключи в переменую k
var k = Object.keys(arr2);

//TODO вывел элементы разряженного массива
/*for(var i = 0; i < arr2.length; i++) {
	document.write(arr2[i] + '<br />');
}*/


//TODO намеренно указываем, что размер массива будет равен только 50 значениям,
// что сделает массив или разряженным или сомкнет его
/*arr2.length = 50
//TODO обращение к вложенному элементу
alert(arr2[0][0]);
//TODO вывел элементы массива с каждым ключом, что разрушила наш разряженный массив
for(var i = 0; i < k.length; i++) {
	document.write(k[i] + '=>' + arr2[k[i]] + '<br />');
}*/
//TODO сделал вложеннный массив
var table = new Array(10);
for(var i = 0; i < table.length; i++) {
	table[i] = new Array(10);
}
//TODO записали значения для вложенного массива второго уровня и выводим результат
for(var row = 0; row < table.length; row++) {
	for(var col = 0; col < table[row].length; col++) {
		table[row][col] = row*col;
	}
}
alert(table[5][6]);





