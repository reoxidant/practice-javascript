///alert(window.name);

//TODO Изменим своство переменной myvar родительского окна, через обращение к свойству opener, обьекта window
function editMyVar() {
	//TODO вернет измененное значение переменной myVar
	return window.opener.myVar = 50;
}

