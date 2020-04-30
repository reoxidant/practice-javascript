//Написали результат работы функции, которая срабатывает при загрузке страницы
function stringWork() {
	var str = document.getElementById('head').innerHTML;
	/////////////////////////////////////////////////////
/*	charAt();
	charCodeAt();
	concat();
	fromCharCode();
	indexOf();
	lastIndexOf();
	length();
	localeCompare();
	sort();
	match();
	replace();
	search();
	slice();
	split();
	substr();
	substring();
	toLocaleLowerCase();
	toLowerCase();
	toUpperCase();
	*/

	var result = str.charAt(7);
	var result = str.charCodeAt(2);
	var result = str.concat(' Привет МАШУЛЬ!!');
	var result = String.fromCharCode(1015);
	var result = str.indexOf('а');
	var result = str.lastIndexOf('а');
	var result = str.length;
	var result = 'Привет'.localeCompare('Ку'); //true строка больше переданой
	var strings = ['Привет','Мир','Что то изучаем','Сравнение'];
	var result = strings.sort(function(a,b){
		if(a > b)
			return -1; //или указать число меньше 0
		if(a < b)
			return 1; //или указать цифру больше 0
		if(a==b)
			return 0 ;
	});

	var result = str.replace(/\d+/g, 'Привет МАША');
	var result = str.search('1');
	var result = str.slice(11,20);
	var result = str.split('-',3);
	//сколько символов вырезать
	var result = str.substr(0,6);
	//на каком закончить вырезание
	var result = str.substring(0,10);
	var result = str.toLowerCase();
	var result = str.toLocaleUpperCase();
	/////////////////////////////////////////////////////
	document.getElementById('result').innerHTML = result;
}

window.onload = function () {
	stringWork();
};

