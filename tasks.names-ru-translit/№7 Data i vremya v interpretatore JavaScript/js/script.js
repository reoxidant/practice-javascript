
//TODO Создаем обьект время
var date = new Date();

//TODO Получаем текущее число недели, все последующие методы работают с локульным временем
//alert(date.getDate());
//TODO Выведем название дня недели
//var days = ['Воскресенье','Понедельник','Вторник'];
//alert(days[date.getDay()]);
//TODO Получаем текущий год
//alert(date.getFullYear());
//TODO Получаем текущие время в часах
//alert(date.getHours());
//TODO Получаем текущие время в милиссикундах
//alert(date.getMilliseconds());
//TODO Получаем текущие время в минутах
//alert(date.getMinutes());

//TODO Получаем название текущего месяца
//var month = ['Январь','Февраль','Март','Апрель'];
//alert(month[date.getMonth()]);

//TODO Получаем текущие время в секундах
//alert(date.getSeconds());
//TODO Получаем время в секундах от 1 января 1970 года
//alert(date.getTime());

//TODO Получаем время расхождение по гринвечу в минутах
//alert(date.getTimezoneOffset());

/*
//TODO Указываем обьект которому мы хотим обращатся и устанавливать время
//TODO Устанавливаем день месяца к текущей дате
date.setDate(10);
//TODO Устанавливаем год к текущей дате, так же месяц и день
date.setFullYear(2014,7,21);
//TODO Устанавливаем час к текущей дате, так же указываем мин, сек и мил
date.setHours(22,43,10,50);
м\//TODO Устанавливаем минуты к текущей дате, так же указываем  сек и мил
date.setMinutes(56,34,10);
м\//TODO Устанавливаем число месяца к текущей дате, так же указываем число деня в недели
date.setMonth(11,3);
м\//TODO Устанавливаем кол милисекунд от 1970года 1 янв. к текущей дат
date.setTime(347534856348);*/
//date.setUTCFullYear(2014);- UTC - универсальное время

//TODO преобразуем дату в строковое значение
alert(date.toDateString());

//TODO преобразуем дату в формате JSON строки
alert(date.toJSON());

//TODO преобразуем дату в строку от локальных настроек
alert(date.toLocaleDateString());
//TODO преобразуем локальное время в милиссикундах от 1970
alert(date.toLocaleTimeString());

//TODO возвращает время по формату с TIME в милиссикундах от 1970
alert(date.now());
//setMilliseconds()
//setSeconds()

//TODO создали функцию показывающая настоящее время
function displayTime() {
	var now = new Date();
	
	var div = document.getElementById("clock");
	
	div.innerHTML = now.toLocaleTimeString();
	
	setTimeout(displayTime,1000);	
}

//TODO создали функцию показывающая дни, часы, минуты и секунды до определенной даты.
function displayTime2() {
	var now = new Date();
	
	var div = document.getElementById("clock");
	
	var sDate  = new Date(2016,11,31);
	
	var timer = sDate.getTime() - now.getTime();
	
	// 270 34 45 53
	
	
	var days = parseInt(timer/(24*60*60*1000));
	
	var hours = parseInt(timer/(60*60*1000))%24;
	
	var min = parseInt(timer/(60*1000))%60;
	
	var sec = parseInt(timer/(1000))%60;
	
	
	
	div.innerHTML = days + ' : ' + hours + ' : ' + min + ' : ' + sec;
	
	setTimeout(displayTime2,1000);	
}


window.onload = displayTime2;

//console.log(Date.parse(date.toString()));