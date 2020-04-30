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








