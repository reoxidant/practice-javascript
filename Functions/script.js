

//TODO Вызов функции с параметрами
/*var result = 100;

function func(param1,param2) {
	
	
	if(param1 == 40) {
		return; //вернется undefined
	}
	var result = param1 * param2;
	return result;
	//alert(result);
}

var a  = 10;
var b  = 50;

//func(a,a*b);
///var res = func(a,a+b);
result = func(a,b);

console.log(result);*/

//TODO Функции второго уровня с работой локальных и глобальных переменных

/*var c = 3;

function func(param1,param2) {
	
	var result = param1 * param2;
	
	function func2(a) {
		return result * param2 * a * c;
	}
	
	result = func2(2);
	
	return result;
	
}

document.write(func(10,30));*/


//TODO Доступ к фунции сохранится только созданой переменной. Обращание к функции работает только по имени переменой. Можно создать анонимную функциию.
/*var func = function foo(param1, param2){
	console.log(param1);
};
func(10,20);*/

//TODO осуществит вызов исполнения функции без его обьявления, нужна чтобы 2 и более человек не обьявили одну и туже функцию.
/*
(function (param1,param2) {
	console.log(param1);
}   (10,20));*/

//TODO Рассчитаем факториал числа с помощью рекурси
/*function func(x) {
	
	if( x <= 1) {
		return 1;
	}
	
	return  x * func(x-1);
}

console.log(func(3));//1*2*3*/
/*

//TODO Рассчитаем факториал с помощью выражения
var f = function fact(x) {
	if( x <= 1) {
		return 1;
	}
	
	return  x * fact(x-1);
};

document.write(f(4));*/

//TODO Передадим параметры функции.

/*function func() {
	
	//var result = param1 * param2;
	
	return result;
	
}*/

// Функция без передачи параметров в нее вернет значение NaN.
// alert(func());

// Мы можем передать значения в функции по умолчанию, если не заданы параметры при вызове функции.
/*function func(param1 = 10; param2 = 30;) {

	//var result = param1 * param2;


	return result;

}
alert(func());
 */


//При передачи множества аргументов в функцию, аргументы попадают в массив arguments под своим определенным индексом.


/*
function func() {

	//var result = param1 * param2;
	var result = arguments[1] * arguments[3];

	//arguments

	return result;
}
alert(func(10,20,63,23,25,34,5467,678));
 */
