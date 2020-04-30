//Сlass properties

class Counter{
    num = 1;

    inc = () => console.log(this.num += Counter.incrementCounter);

    static incrementCounter = 2;
    static incrementAll = function(arr){
        arr.forEach((c) => c.inc());
    }
}

const counter = new Counter();
//old
console.log(counter.num);
counter.inc();
setTimeout(counter.inc, 1000);
Counter.incrementAll([]);

class Counter{
    constructor(){
        this.count = 0;
        this.inc = () => console.log(this.num += Counter.incrementCounter);
    }
}

Counter.incrementCounter = 0;
Counter.incrementAll = function(arr){
    arr.forEach((c) => c.incrementCounter);
};
