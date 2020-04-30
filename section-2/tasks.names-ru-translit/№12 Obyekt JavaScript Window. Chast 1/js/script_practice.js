window.onload = function(){
    //TODO написали функцию поиска элемента с id popup_overlay у обьекта document
    var wrap = document.getElementById('popup_overlay');
    //TODO написали функцию поиска элемента с id popup_close у обьекта document
    var closeButton = document.getElementById('popup_close');
    //TODO обратились к свойству onclick у обьекта элемента с id popup_close и присвоили функциию, повесив туда событие.
    closeButton.onclick = popupClose;
    //TODO написали функцию поиска элемента с id popupIn(кнопка показать) у обьекта document
    var popIn = document.getElementById('popupIn');
    //TODO обратились к свойству onclick у обьекта элемента с id popupIn и присвоили функциию popup, повесив туда событие.
    popIn.onclick = popup;



    var tIn, tOut;

    function popup() {
        //TODO обратимся к свойству стиля и укажем что элемент блочный - покажем элемент.
        wrap.style.display = "block";
        //TODO функция в которую передается параметр 1, для того чтобы увеличить колличество прозрачности у элемента.
        popupIn(1);
    }

    function popupClose(){
        popupOut(0);
    }

    //TODO рекурсивная функция увеличения прозрачности у элемента, чтобы показать наш попап
    function popupIn(x) {

        /// 0.05 0.1 0.15
        //TODO тернарный оператор, который смотрит, если ли уже в данного элемента значение прозрачности в стилях,
        // иначе выставлет значение к 0
        //TODO parseFloat возвращает число с плавающей точкой.
        var op = parseFloat(wrap.style.opacity) ? parseFloat(wrap.style.opacity):0;
        //TODO условие проверки двух значений, в случае, если передаваемое число больше, то увеличит кол прозрачности на 0.05.
        if(op < x) {
            // TODO отменяет многократные повторения действий, установленные вызовом функции setTimeout или функции setInterval.
            clearInterval(tOut);
            // TODO задает значение прозрачности выбраному элементу
            op += 0.05;
            wrap.style.opacity = op;
            // setTimeout(popupIn, 50, x);
            //TODO рекурсивный вызов функции, позволяет вызвать функцию один раз через определённый интервал времени в 50 милисекунд.
            //АДАПТИВНО
            tIn = setTimeout(function(){
                popupIn(x);
            }, 50)
        }
    }

    //TODO рекурсивная функция уменьшения прозрачности у элемента, чтобы наш попап пропал
    function popupOut(x) {

        /// 0.05 0.1 0.15
        // TODO тернарный оператор, который смотрит, если ли уже в данного элемента значение прозрачности в стилях, иначе выставлет значение к 0
        // TODO parseFloat возвращает число с плавающей точкой
        var op = parseFloat(wrap.style.opacity) ? parseFloat(wrap.style.opacity) : 0;

        //TODO условие проверки двух значений, в случае, если передаваемое число меньше, то уменьшит кол прозрачности на 0.05.
        if(op > x) {
            // TODO отменяет многократные повторения действий, установленные вызовом функции setTimeout или функции setInterval
            clearInterval(tIn);
            // TODO задает значение прозрачности выбраному элементу
            op -= 0.05;
            wrap.style.opacity = op;
            //setTimeout(popupIn, 50, x);
            //TODO рекурсивный вызов функции, позволяет вызвать функцию один раз через определённый интервал времени в 100 милисекунд.
            tOut = setTimeout(function () {
                popupOut(x);
            }, 50);
        }
        //TODO условие проверки достигнетого значения прозрачности, если передаваемое значение равно значению элемента, то блок скрывается параметров display none
        if(op == x) wrap.style.display = 'none';

    }

    //setTimeout(popup,3000);
    //TODO выбираем элемент(заголовок) по айди у обьекта документ
    var h1 = document.getElementById('header');
    //TODO указываем для элемента h1 событие клика, записав в свойстве onclick функцию.
    h1.onclick = function () {
        //TODO отменяем ранее установленный вызов функции setTimeOut()
        clearInterval(setIntChangeColor);
    };

    //TODO функция смены цвета в стилях для елемента h1

    function changeColor() {
        ///color
        //TODO если цвет заголовка черный, то измени цвет на белый, иначе на черный
        if(h1.style.color === "black"){
            h1.style.color = "white";
        }else{
            h1.style.color = "black";
        }
    }

    //TODO установливаем интервал повтора функции через каждые 500 милиссекунд
    var setIntChangeColor = setInterval(changeColor, 50);

    //Какие модальные окна бывают...
    //TODO вызов функции всплывающего окна, чаще всего для откладки
    // alert(1);

    //TODO вызов функции всплывающего окна, чаще всего для подтверждения действия.
    // confirm('Вы готовы стать программистом?');

    //TODO вызов функции всплывающего окна, чаще всего для написания ответа.

    // prompt("Что вы далаете вечером?");

    //TODO пример функции do - while, с однозначным вопросом, где пока не введен ответ, будет воспроизводится вызов всплывающего окна.
    do{
        var str = prompt("Введите свою дату рождения");
        var result = confirm('Вы ввели '+ str + ' нажмите ОК для закрытия окна, или Отмена для повторения функции');
    }while(!result);

    alert(str);
};
