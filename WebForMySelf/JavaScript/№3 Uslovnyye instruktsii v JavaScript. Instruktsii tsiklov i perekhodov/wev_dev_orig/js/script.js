/*
var a = 10;
var b = 20;
*/

// var a = 10+20;

// TODO Напишем условные инструкции
/*
if(a > 9) alert('Hello');

//TODO Проверка истинности
if(10){
	var c = b+a;
	alert(c);
}
*/

//эти значения вернут истину 1,2,3 Infinity -Infinity 'string' => TRUE,
// а эти знания вернут ложь false 0 -0 null NaN Undefined => FALSE

//TODO Написания инструкций if else

// var c = 0;
/*if(((a > b && 'hello' != 'string') || !false) && !(a - 10)) {}

if(a > 0) {
	if(b < 25) {
		if(c == 0) {
			c = b + a;
			alert(c);
		}
	}
}
*/

/*
if(a) {
	if(a > 10) {
		alert('a > 10');
	} 	
	else {
		alert('else');
	}
}
*/

/*
if(a > 10) {
	console.log('a > 10');
}
else if( a < 10 ) {
	console.log('a < 10');
}
else if( a == 0) {
	console.log('a == 0');
}
else {
	console.log('else');
}
*/

//alert(c);

//TODO switch конструкция
/*switch(a + b) {
	
	case 10:
		/// a+b;
		alert('hello');
		break;
	
	case 30:
	
		alert('20');
		break;
	
	default:
		document.write('default');
		break;
	
}*/

//TODO if else контрукция по строгому равенству
/*if((a + b) === 10) {
	alert('hello');
}
else if((a + b) === 30) {
	alert('20');
}
else {
	document.write('default');
}*/


//TODO Цикл while
/*var count = 0;

while(count < 10) {
	console.log(count);
	count++;
}*/

/*var c = 2;
var i = 0;

//TODO цикл do/while
do {
	c = c*2;
	i++;
}
while(i < 9);
console.log(c)*/
/*
var c = 2;
var i = 0;

//TODO цикл for
for(;i < 10 ; i++) {
	//////
	//////
	//////
	
	if(i == 5) {
		continue;
	}
	console.log(i);
	
}*/

//TODO Создали таблицу с помощью циклов for
/*var str = '<table border="1px" width="30%">';

for(var i = 1; i < 10; i++) {
	str += '<tr>';
	
	for(var j = 1; j < 10; j++) {
		str += '<td>';
			str += i*j;
		str += '</td>';	
	}
	
	str += '</tr>';
}
str += '</table>';*/
//TODO Вставил данные таблицы в html код страницы в блок c id karkas
var el = document.getElementById('karkas');
el.innerHTML = el.innerHTML + str;


