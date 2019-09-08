
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

//TODO альтернативные способы создания обьектов date()
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




