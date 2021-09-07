//TODO обьявим пустой обьект,
var test = {

};

//TODO Создадим обьект со списком свойст свойствами

var obj = {
	one:'hello',
	'new string':123
};

//TODO альтернативные способы создания обьектов date(), array(), object()
var date = new Date();
var array = new Array();
var obj1 = new Object();


//TODO обращение к свойству обьекта, которое является строкой
//console.log(obj['new string']);

//TODO присваивание свойству значение
obj.new = 'Hello World';
// console.log(obj.new);

//TODO Функция для создания нового свойства обьекта, принимается параметры o-обьект, i-имя свойства(строка), v-значение свойства.

function create_obj(o,i,v){
	return o[i] = v;
}
/*console.log(obj.three);
console.log(create_obj(obj, 'three','new prop'));
console.log(obj.three);*/

//TODO наследуем свойства обьекта Object, при создании своего обьекта
//console.log(Object.prototype);

//TODO Создаем новый обьект статическим методом обьекта Object куда передаем прототип obj1 и можем обращаться к его свойствам
// уже в новом обьекте

var obj2 = Object.create(obj);

//TODO Создадим обьект указав, что у него нет никакого прототипа

var obj3 = Object.create(null);

//TODO Создадим пустой обьет который равназначем другим выражением в комментариях

var obj4 = Object.create(Object.prototype);

//TODO При обращении к свойству обьекта, которого нет у данного обьекта, интерпритатор пытается искать данное свойство в
// родительских обьектах от которого этот прототип обьекта наследовался

/*console.log(obj3.one = 1);//1
console.log(obj2.one);//hello*/

//TODO Удалил свойство из обьекта, удаляет только собственное свойство, не родительское
//obj2.one = 1;
//delete obj2.one;
//console.log(obj2.one);//hello
//console.log(obj2.one);//hello

//TODO Проходимся по обекту и выводим все простые свойства, без вложенных обьектов
/*var obj6 = {
	one:'Hi',
	two:'all',
	three:'world'
};

for(val in obj6){
	console.log('Name:'+val+', Value:'+obj6[val]);
}

function iteration(obj){
	for(val in obj){
		console.log('Name:'+val+', Value:'+obj[val]);
	}
}

iteration(obj);*/

//TODO Проходимся по обекту и выводим все свойста вложенных обьектов

var obj7 = {
	one:'Hi',
	two:'all',
	three:'world',
	cat:{
		color:'black',
		paws:'little'
	}
};

function iteration_in(obj){
	for(val in obj){
		if(typeof obj[val] == 'object'){
			iteration_in(obj[val]);
		}else{
			console.log('Name:'+val+', Value:'+obj[val]);
		}
	}
}

iteration_in(obj7);



