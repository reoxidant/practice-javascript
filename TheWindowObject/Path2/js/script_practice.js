

function myOpen() {
    window.open('https://apple.ru')
}
    //TODO Нужно сделать чтобы по айдишнику openWindow килкали и создавалось окно с параметрами
    // высота 220 ширина 420 фиксированное, без скролла, без статуса, влево на 500, вверх на 300, без адресной строки, б
    // без меню, без кнопок навигации.
    window.onload = function () {
        var w1 = null;
        var openWindow = document.getElementById('openWindow');

    openWindow.onclick = function(){
       w1 = window.open(
           "w1.html",
           "test",
           "height=220, width=420, scrollbars=yes, status=no, left=500, top=300, location=no, menubar=no, toolbar=no"
       );
    };

    //TODO На кнопку вешаем событие, при которой идет проверка на обьект открытого окна,
    // если проверка удачна, то закрывает окно и проверяет статус, что окно закрыто.

    var closeWindowBtn = document.getElementById('closeWindow');

    closeWindowBtn.onclick = function(){
        if(typeof w1 == 'object'){
            w1.close();
            console.log(w1.closed);
        }
    };

    // console.log(w1);

    //TODO Создадим переменную со строкой Hello World!



    //TODO Создадим функцию getMyVar для получению параметров нашего окна и внешних её переменых
    function getMyVar(){
        //TODO вывести значение переменной в сплывающем окне.
        var str = "Hello World!";
        alert(str);
        //TODO Откорректировать строку Hello World!
        w1.editMyStr();
        alert(str);
        //TODO В окне f1 изменить контент с помощью функции getAlert()

        //TODO В окен f1 обратимся к родителькому окну где находится функция myOpen и вызовем её еще раз.

        //TODO Сфокусируемся на окне вызванного и созданого обьекта типа window

        //TODO Позволяет напечатать содержимое указаного окна вызваного обьекта window

        //TODO Перемещает указаное окно по скролу по вертикали и по горизонтали на некоторое колличество пикселей.

        //TODO Перемещает указаное окно по скролу, передав в параметрах функции два значения,
        // которые и определят положение окна в скролле

        //TODO Перемещаем окно относительно указанных пикселей

        //TODO Перемещаем левый верхний угол окна с заданными координатами.

        //TODO Метод, используемый для регулировки размера окна заданной ширины и высоты.

        //TODO Метод, используемый для указанного пикселя, чтобы изменить размер окна

        //TODO Выведем внутреную высоту созданого окна и внутреннию ширину созданного окна

        //TODO Выведем внешнию высоту созданного окна и внешнию ширину созданного окна.

    }

    //TODO при клике на клавишу функции вызываем функцию getMyVar

    var f = document.getElementById('function');

    f.onclick = function(){
        getMyVar();
    }

};