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







