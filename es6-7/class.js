//prototype object

/*function Animal(name, voice) {
    this.name = name;
    this.voice = voice;
}

Animal.prototype.say = function(){
    console.log(this.name, 'goes', this.voice);
};

const dog = new Animal('dog', 'woof');
dog.say();*/

//class

class Animal{
    constructor(name, voice){
        this.name = name;
        this.voice = voice;
    }

    say(){
        console.log(this.name, 'goes', this.voice);
    }
}

const cat = new Animal('cat', 'meow');
// cat.say();


class Bird extends Animal{
    constructor(name, voice, canFly){
        super(name, voice);
        this.say();
        this.canFly = canFly;
    }
    say(){
        console.log('Do you can to fly?');
        console.log(this.canFly);
        console.log('I am', this.name, 'i goes', this.voice);
    }
}

const duck = new Bird('Duck', 'quack', 'no');
duck.say();

