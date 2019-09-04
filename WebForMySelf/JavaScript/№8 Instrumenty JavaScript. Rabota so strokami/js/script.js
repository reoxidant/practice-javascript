//Написали результат работы функции, которая срабатывает при загрузке страницы
function stringWork() {
	var str = document.getElementById('head').innerHTML;
	/////////////////////////////////////////////////////
	///new String();
	///String();
	//TODO функция констуктор String, возвращается обьект
	//var result = typeof new String(str);
	//TODO функция String не являющикся конструктором, при передаче любых данных представляет в простом строковом виде, содержит функцию toString.
	//var result = typeof String(str);
	//TODO как мы можем обращаться к строке то?, интерпритатор сам преобращает строку в обьект.

	//TODO возвращает символ строки по индексу, так же можно обращаться как массив
	//var result = str.charAt(10);
	//var result = str[10];

	//TODO возвращает символ строки по индексу, так же можно обращаться как массив
	//var result = str. charCodeAt(15);
	//TODO обьеденяет строки в одну строку
	//var result = str. concat('hello ',' World ', '!!!');
	//var result = str + ' hello ' + ' World ' + '!!!';
	//TODO вызываем у обьекта строки новый метод fromCharCode, параметры юникод или медот вызывающий юникод, вернет нам обратно символ для этого юникода, можно указать несколько параметров
	//var result = String.fromCharCode(1054);
	//var result = String.fromCharCode(str.charCodeAt(15),str.charCodeAt(25));
	//TODO поиск подстроки в строке, если строка найдена вернет 1, если не найдена вернет -1, как только найдет первое сходное значение, вернет его и перестанет работать
	//var result = str.indexOf('с');
	//TODO начнет поиск строки с 32 символа
	//var result = str.indexOf('с',32);
	//TODO соврешит помск строки с конца и вернет его индекс
	//var result = str.lastIndexOf('с');
	//TODO Проверим результат функции
	//var result = str[48];
	//var result = str[str.indexOf('с')];
	var result = str.length;
	
	var strings = ['Привет','Мир','Что то изучаем','Сравнение'];
	
	
	//var result = str.localeCompare('A');
	//var result = strings.sort(function(a,b) {return a.localeCompare(b)});
	
	//var result = str.match(/\d+/);
	//var result = str.replace(/\d+/g,'Hello');
	
	
	//var result = str.search(/\d+/);//RegExp
	
	//var result = str.slice(1);//RegExp
	//var result = str.split(' ',3);//RegExp
	//var result = str.substr(1);//RegExp
	
	//var result = str.substring(3,1);//RegExp
	//var result = str.toLocaleLowerCase();//RegExp
	//var result = str.toLowerCase();//RegExp
	//var result = str.toUpperCase();//RegExp
	
	
	/////////////////////////////////////////////////////
	document.getElementById('result').innerHTML = result;
}

window.onload = function () {
	stringWork();
}

