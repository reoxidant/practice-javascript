//TODO С помощью метода open можно открыть окно в веб браузере
function myOpen() {
	//TODO чаще всего браузер будет блокировать работу метода open,
	// поэтому мы будет получать доступ к методу через клик на элемент страницы.
	window.open('http://yandex.ru');
}

//TODO сформировать функцию после загрузки страницы
window.onload = function () {

	console.log(window.name);
	
	var w1 = null;
	//TODO Создадим переменную которая ссылается на элемент документа c айди openWindow
	var openWindow = document.getElementById('openWindow');
	//TODO По клику на указаный элемент создается новое окно
	openWindow.onclick = function () {

		w1 = window.open(
					'w1.html',//TODO страничка перехода
					'w1',//TODO Название окна

					//TODO Атрибуты передаваемого окна
					"width=420,height=220,resizable=no,scrollbars=yes,status=no,left=500,top=300,menubar=no,toolbar=no,location=no"
					
					);
		//TODO покажет обьект window, который открыл данное окно через свойство opener
		console.log(w1.opener);
	};
	//TODO Найдем элемент в документе и запишем ссылку на обьек closeWindow в переменную closeWindow
	var closeWindow = document.getElementById('closeWindow');
	//TODO Создадим событие на обьект closeWindow по нажатия кнопки
	closeWindow.onclick = function () {
		//TODO в теле функции проверяем, если тип обьекта w1 обьект, то закроем методом close, данное окно
		if(typeof w1 == 'object') {
			w1.close();
			w1.editMyVar();
			//TODO проверим статус данного окна в свойстве close, обьекта w1
			console.log(w1.closed);
		}
		
	};
	//TODO Создадим переменную myVar, запишем Строку = "Hello world!"
	var myVar = 'Hello world!';
	//TODO Создадим функцию getMyVar для получению параметров нашего окна и внещних её переменых
	function getMyVar() {
		//TODO В теле выведем переменую myVar, до того, как её отредактировать функцией editMyVar
		/*alert(myVar);
		TODO Создадим функцию editMyVar где, отредактируем переменую родительского окна
		myVar = w1.editMyVar();
		//TODO Выведем переменую, которая была отредактирована, окном w1
		alert(myVar);*/
		//TODO Найдем элемент в документе с айди f1, который является iframe
		//var fr = document.getElementById('f1');
		//TODO Вызовем alert айфрейма с айди f1 с помощью свойства contentWindow - указываем именно нужный iframe
		// и дальше описаный в нем метод getAlert(), который в файле scriptF.js
		//fr.contentWindow.getAlert();
		//
		//TODO Обращается в тому же iframe, но только из контекста frames с айди ['f1'] и вызываем метод getAlert()
		//window.frames['f1'].getAlert();
		//TODO Обращается в тому же iframe, но только из контекста frames с айди ['f1'] и вызываем метод getParentFunc()
		// Функция которого откроет в новой вкладке страницу yandex.
		//window.frames['f1'].getParentFunc();

		//TODO Сфокусируемся на окне вызванного и созданого обьекта типа window
		//w1.focus();
		//TODO Позволяет напечатать содержимое указаного окна вызваного обьекта window
		//w1.print();
		//TODO Перемещает указаное окно по скролу по вертикали и по горизонтали на некоторое колличество пикселей.
		//w1.scrollBy(50,50);
		//TODO Перемещает указаное окно по скролу, передав в параметрах функции два значения,
		// которые и определят положение окна в скролле
		//w1.scrollTo(50,50);
		//TODO Перемещаем окно относительно указанных пикселей
		//w1.moveBy(50,50);
		//TODO Перемещаем левый верхний угол окна с заданными координатами.
		//w1.moveTo(50,50);
		//TODO Метод, используемый для регулировки размера окна заданной ширины и высоты.
		//w1.resizeTo(50,50);
		//TODO Метод, используемый для указанного пикселя, чтобы изменить размер окна
		//w1.resizeBy(-50,-50);
		
		//TODO Выведем внутреную высоту созданого окна и внутреннию ширину созданного окна
		alert(w1.innerHeight + '|' + w1.innerWidth);
		//TODO Выведем внешнию высоту созданного окна и внешнию ширину созданного окна.
		alert(w1.outerHeight + '|' + w1.outerWidth);
	}
	//TODO Создадим переменную в которой передадим прототип обьекта документа с айди function
	var f = document.getElementById('function');
	//TODO Прописываем в свойствах обьекта событие onclick при срабатывании которого, вызывается функция getMyVar()
	f.onclick = function() {
		//Выполнение функции getMyVar
		getMyVar();
	}
};



