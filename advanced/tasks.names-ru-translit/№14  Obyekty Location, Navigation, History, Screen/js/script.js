window.onload = function () {
	//TODO Вывести в консоль информацию
	//console.log(window.location);

	//console.log(location.toString());

	//alert(location);//href

	//TODO Сделать массив из параментор передающихся в адресную строку массив должен содержать имя и значение
	/*function urlArgs() {

		var args = {};
		
		var query = window.location.search.substring(1);
		
		var parts = query.split("&");
		
		
		for(var i  = 0; i < parts.length; i++ ) {
			
			var pos = parts[i].indexOf('=');
			
			if(pos == -1) {
				continue;
			}
			
			var name = parts[i].substring(0,pos);
			var value = parts[i].substring(pos+1);
			
			args[name] = value;
			
		}
		
		return args;
	}
	
	var obj = urlArgs();
	
	console.log(obj.page);*/
	
	//TODO Cделать переход по ссылке на f1.html 3 способами,
	// перезагрузку страницы, по истории страниц назад, по истории страниц вперед, перепрыгнуть одну из страниц на следующую.
	// информация о браузере пользователя. информация о экране пользователя.
	var b = document.getElementById('openWindow');
	
	b.onclick = function () {
		//window.location.assign('f1.html');
		//window.location.replace('f1.html');
		//window.location.reload();
		
		//window.location = 'f1.html';
		
		//console.log(history.length); // History
		
		//history.back();
		//history.forward();
		
		//history.go(1);
		
		//console.log(window.navigator);
		console.log(window.screen);
		
	}
	
	
}



