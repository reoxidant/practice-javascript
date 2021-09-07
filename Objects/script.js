
//Свойства являются ячейками для хранения значений, а методы созданы для манипуляции свойствами обьекта.
//var a = 1;
//var b = 1;
//В переменную y будет присвоена та же ссылка на переменную x
//x
//var y = x;

//TODO обьявим пустой обьект, два свойства не могут быть одинаковыми с одними и тем же названием
var obj = {
	
};

var a = 10;
var b = 20;
//TODO Создадим обьект со списком свойст свойствами
var obj1 = {
	one : 'Hello',
	two : 'World',
	'some string' : a + b,
	three : {
		a:1,
		b:2,
		c: {
			'str1' : 10,
			'str2' : 30,
		}
	}
};

//TODO альтернативные способы создания обьектов date(), array(), object()
 var date = new Date(); // соответсвует Date.prototype - наследуем свойства обьекта Date и род Object, при создании своего обьекта
 var arr = new Array(); // соответсвует [] Array.prototype - наследуем свойства обьекта Array и род Object, при создании своего обьекта
 var obj2 = new Object();// соответсвует var obj2 = {};


 ///console.log(obj1.two);

//TODO обращение к свойству обьекта, которое является строкой
//var str = 'some string';
//console.log(obj1[str]);
//console.log(obj1['some string']);
//TODO присваивание свойству значение
 //obj1.two = 'New string';

//TODO Функция для создания нового свойства обьекта, принимается параметры o-обьект, i-имя свойства(строка), v-значение свойства.
 /*function addObj(o, i, v) {
 	return o[i] = v;
 }

 addObj(obj, 'one', 'Hello');
 addObj(obj, 'two', 'World');*/
 
 //console.log(obj.one);
//TODO наследуем свойства обьекта Object, при создании своего обьекта
 //console.log(Object.prototype);
 
//TODO Создаем новый обьект статическим методом обьекта Object куда передаем прототип obj1 и можем обращаться к его свойствам
// уже в новом обьекте
var obj3 = Object.create(obj1);
//TODO Создадим обьект указав, что у него нет никакого прототипа
var obj3 = Object.create(null);//undefined
//TODO Создадим пустой обьет который равназначем другим выражением в комментариях
var obj3 = Object.create(Object.prototype);//var obj2 = new Object();// var obj2 = {};


//TODO При обращении к свойству обьекта, которого нет у данного обьекта, интерпритатор пытается искать данное свойство в
// родительских обьектах от которого этот прототип обьекта наследовался
//obj3.one = 1; - присвоем свойству обьекта наследника значение 1
//console.log(obj3.one); - выведется 1
//console.log(obj1.one); - выведется hello, т.к мы взяли только существующее свойство one у родителя,
// а в свой обьект записали другое значение для родительского свойства one и интерпритатор обращается именно к нему.

//TODO Удалил свойство из обьекта, удаляет только собственное свойство, не родительское
//delete obj3.one;
//console.log(obj3.one);//undefined
//console.log(obj1.one);//hello
//TODO Проходимся по обекту и выводим все простые свойства, без вложенных обьектов
var obj5 = {
    one : 'Hello',
    two : 'World',
    'some string' : a + b
};

function interation_simple_property(obj){
    for(prop in obj){
        console.log(prop + ' -- ' + obj[prop]);
    }
}

interation_simple_property(obj5);


//TODO Проходимся по обекту и выводим все свойста вложенных обьектов
function iteration(o) {
	for ( v in o) {
	    //проверка на вложенный обьект
		if(typeof o[v] == 'object') {
			iteration(o[v]);
		}
		else {
			console.log( v + ' - ' + o[v]);
		}
	}
}

iteration(obj1);

var a = 10;
var b = 20;

var obj1 = {
	one : 'Hello',
	two : 'World',
	'some string' : a + b,
	three : {
		a:1,
		b:2,
		c: {
			'str1' : 10,
			'str2' : 30,
		}
	},
	five : undefined
};

var obj2 = Object.create(obj1);//var obj2 = new Object();// var obj2 = {};




/*function iteration(o) {
	for ( v in o) {
		if(typeof o[v] == 'object') {
			iteration(o[v]);
		}
		else {
			console.log( v + ' - ' + o[v]);
		}

	}
}

iteration(obj1);*/

// one = undefined
//TODO Вернется true, если у свойства задано значение и false, если значения нет или свойсто не определенно
/*if(obj1.five) {
	alert(obj1.one); //false, условие не сработает, потому что значение свойства five = undefined
}*/

/*
//TODO ищем свойство в обьекте, слева свойство должно быть именно указана как строка, справа обьект.
if('one' in obj2)   {
	alert(obj1.one);//true, выводется hello, потому что дочерний элемент имеет свойсто one
}

if('five' in obj1)   {
	alert(obj1.one);//true, вывод hello, т.к интерпритатор только искал свойство, но не значение
}*/

//TODO Проверяет существование собственного свойства.
/*if(obj2.hasOwnProperty('one'))   {
	alert(obj1.one);//Условие не сработает,потому что obj2 не имеет собственного свойства one, а только имеет родительское.
}*/
//TODO Проверяет существование собственного свойства, так же ищет только те свойства, атрибут которых имеет значение true - истина
/*if(obj2.propertyIsEnumerable('one'))   {
	alert(obj1.one);//не сработает, птому что своство one настледуемое
}*/

//TODO Проверка на существовании значения в атрибует,если значение неопредено, то условие невыполнится
/*if(obj1.one !== undefined) {
	alert(obj1.one);
}*/

//TODO итерация, которая проверит собственные своства обьекта, если есть только наследуемые, то код завершит выполнение.
// так же при выполнении кода, если встретится функция в обьете, то цикл остановится
function iteration(o) {
	for ( v in o) {

		if(!o.hasOwnProperty(v)) continue;

		if(typeof o[v] === 'function')  continue;

		if(typeof o[v] == 'object') {
			iteration(o[v]);
		}
		else {
			console.log( v + ' - ' + o[v]);
		}
	}
}

//iteration(obj2);// ничего не выполнится, т.к не имеет собственных свойств.
/*

//TODO определили свойство func со значением функции. вызвали с помощью литерала obj3.func();
var obj3 = {
	prop1 : 30,
	prop2 : 50,
	func : function() {
		console.log(this.prop1 + this.prop2);
	}
}
//TODO Метод обьекта определили за пределами самого обьекта, записав ее в переменную func2
obj3.func2 = function() {
	alert('func2');
}

//TODO Сформировали отдельный метод
function foo() {
	console.log('foo');
}
//TODO записали в свойство func3 обьекта obj3 метод foo
obj3.func3 = foo;

obj3.func();*/

var o = {
	prop1 : 10,
	prop2 : 50,
	//TODO будет возвращена ошибка, так как prop1 и prop2 ищутся во вне самого обьекта, али внутри его самого.
	/*    func0 : function() {
            console.log(prop1 + prop2);
        },*/
	//TODO мы должны ссылаться в функции на свойство через ключ слово this.
	func1 : function() {
		console.log(this.prop1 + this.prop2);
	},
	//TODO описываем метод доступа получения свойства у обьекта, которое вернет сумму двух значений у свойст prop1 и prop2
	// возвращаемое значение станет значением данного свойства, когда мы будем к нему обращаться
	get summ() {
		return this.prop1 + this.prop2;
	},
	//TODO описываем метод записи, т.е мы укажет o.summ = 5 и в данный метод упадет параметром значение 5, где вернет значение функции
	// и запишет данные в свойство summ
	set summ(value) {

		this.prop1 += value;
	}
};

//TODO Увеличиваем свойство за счет меода записи на 5 значении выше
/*o.summ = 5;
console.log(o.summ);

o.summ = 5;
console.log(o.summ);

o.summ = 5;
console.log(o.summ);*/

//TODO к обьекту "О" свойства prop3 добавим атрубуты
// value-значение,
// writable-запись,
// enumerable - доступность свойства для перечисление foreach, если false то не отображается
// configurate - разрешнить или запретить свойства для настройки

Object.defineProperty(o, 'prop3', {
	value: 100,
	writable: true,
	enumerable : false,
	configurable : true,
});

//o.prop3 = 50;

Object.defineProperty(o, 'prop3', {

	enumerable : true,
});


//iteration(o);

//TODO создаем новый обьект с параметрами, которые используется в обьекте
//var o2  = new fuu(a,b,c);


//TODO сформируем свойства обьекта из параметров переданных в функцию People
function People(name, age) {
	this.name  = name;
	this.age  = age;
	//TODO Вернет сумму друх переданых параметров
	/*this.summ = function() {
		return this.name + ' - ' + this.age;
	}*/
}

var Ben = new People('Ben',18);

//TODO укажем прототип для обьекта ben
People.prototype = obj1;
//TODO создадим новое свойство в которой будет записана функция
People.prototype.summ = function() {
	return this.name + ' - ' + this.age;
};
//TODO вызываем метод summ у родительского обьекта obj1, который для него неопределен
console.log(obj1.summ());// вернет undefined

var obj = {
	str:'hello',
	str2:'Masha',
	str3:''
};

var obj2 = Object.create(obj);
//TODO Вернется true, если у свойства задано значение и undefined, если значения нет или свойсто не определенно
/*if(obj.str){
    alert(obj.sdfdf);
}*/

//TODO ищем свойство в обьекте, слева свойство должно быть именно указана как строка, справа обьект.
/*if('str' in obj){
    alert(obj.str);//У собственного обьекта
}*/

/*if('str' in obj2){
    alert(obj2.str2);//У прототипа обьекта от которого был создан obj
}*/

//TODO Проверяет существование собственного свойства у прототипа обьекта, но только не у
/*if(obj2.hasOwnProperty('str2')){
    alert(obj2.str2); //не сработает, т.к не имеет собственного свойства
}*/

/*if(obj.hasOwnProperty('str2')){
    alert(obj.str2); //вернет false, потому что нету такого собственного свойства
}*/

//TODO Проверяет существование собственного свойства, так же ищет только те свойства, атрибут которых имеет значение true - истина
/*if(obj.propertyIsEnumerable('str3')){
    alert(obj.str3);//ничего не вернет т.к свойство пустое
}*/

/*if(obj.propertyIsEnumerable('str2')){
    alert(obj.str2);//вернет значение
}*/

/*if(obj2.propertyIsEnumerable('str'))   {
    alert(1);
	alert(obj2.str);//не сработает, потому что свойство наследуемое от прототипа obj
}*/

//TODO Проверка на существовании значения в атрибует,если значение неопредено, то условие невыполнится
/*if(obj.str !== undefined){
    alert(obj.str);
}*/
//TODO итерация, которая проверит собственные своства обьекта, если есть только наследуемые, то код завершит выполнение.
// так же при выполнении кода, если встретится функция в обьете, то цикл остановится

var one = {
	test:'test1',
	str:'hello',
	mood:function(){
		return "Good";
	},
	two:{
		a:12,
		b:5,
		c:1
	},
	g:'koko'
};

var two = Object.create(one);
function iteration(o){
	for(v in o){
		if(!o.hasOwnProperty(v)) continue;
		if(typeof o[v] === "function") continue;
		if(typeof o[v] == 'object'){
			iteration(o[v]);
		}
		console.log(v + '-' + o[v]);
	}
}

// iteration(two);

//TODO определили свойство func со значением функции. вызвали с помощью литерала obj3.func();

var obj3 = {
	a:11,
	b:28,
	c:3,
	func:function(){
		console.log(this.a + this.b);
	}
};

// obj3.func();

//TODO Метод обьекта определили за пределами самого обьекта, записав ее в переменную func2

obj3.func2 = function(){
	console.log('func2');
};

// console.log(obj3.func2());

//TODO Сформировали отдельный метод

function say(){
	console.log('say hello');
}

// say();

//TODO записали в свойство func3 обьекта obj3 метод foo

obj3.func3 = say;

// obj3.func3();



var val = {
	a:40000,
	b:28,
	c:30,

	//TODO будет возвращена ошибка, так как a и b ищутся во вне самого обьекта, али внутри его самого.
	d:function(){
		//ссылается на внешние ссылки переменых
		console.log(a + b);
	},
	// TODO мы должны ссылаться в функции на свойство через ключ слово this.
	h:function(){
		//вернет значение суммы
		console.log(this.a + this.b + this.c);
	},
	//TODO описываем метод доступа получения свойства у обьекта, которое вернет сумму двух значений у свойст a и b
	// возвращаемое значение станет значением данного свойства, когда мы будем к нему обращаться

	get summ(){
		return this.a + this.b;
	},
	//TODO описываем метод записи, т.е мы укажем val.setval и в данный метод упадет параметром значение 5000,
	// где вернет значение функции и запишет данные в свойство setval
	set setval(v){
		this.a += v;
	}
};

//TODO Увеличиваем свойство за счет метода записи на 5 значении выше

val.setval = 5000;
// console.log(val.a);

//TODO к обьекту val добавим свойства j и f, опредилим для свойст атрибуты с помощью метода defineProperty
// value-значение,
// writable-запись,
// enumerable - доступность свойства для перечисление foreach, если false то не отображается
// configurate - разрешнить или запретить свойства для настройки

Object.defineProperty(val,'j', {
	value:999,
	writable:true,
	enumerable:true,
	configurable:true
});

val.j = 111; //не отобразится, потому что атрибут enumerable - null

Object.defineProperty(val, 'f', {
	enumerable: true,
	writable:true
});

val.f = 222;

//iteration(val);

//TODO создаем новый обьект с параметрами, которые используется в обьекте

// var obj4 = new func5(a,b,c);

//TODO сформируем свойства обьекта из параметров переданных в функцию People

function Man(name, old, year) {
	this.year = year;
	this.name = name;
	this.old = old;
	this.count = function(){
		var date = new Date();
		var c = date.setFullYear(year) - date.setFullYear(old);
		return parseInt(c/(365*24*60*60*1000))
	},
		//TODO Вернет строку переданых параметров
		this.str = function() {
			return this.name + '-' + this.old + 'ЛЕТ';
		}
}

var man = new Man('Masha', 1993, 2083);

/*console.log(man.str());
console.log(man.count());*/

//TODO в обьекте Man появится прототип обьекта val, просто ссылка на обект val
man.prototype = val;

//TODO создадим новое свойство в которой будет записана функция, она лежит в прототипе обьекта Man

man.prototype.count_years = function(){
	return this.year + '-'+ this.old + '=' + (this.year-this.old);
};

//TODO вызываем метод count_years у обьекта val, у которого для него значения неопределены, а функция существует
console.log(val.count_years()); //Внернет undefined-undefined=NaN
console.log(man.prototype);//Ссылка на обьект val