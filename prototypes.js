//Prototypes
const animal = {
    say:function(){
        console.log(this.name, 'goes', this.voice);
    }
};

/*const dog = {
    name:'dog',
    voice:"woof",

};*/

/*const cat = {
    name:'cat',
    voice:"meow",
};*/

//simple

/*dog.say();
cat.say();*/

//Object.setPrototypeOf, use, but to slow

/*Object.setPrototypeOf(dog, animal);
Object.setPrototypeOf(cat, animal);*/
/*dog.say();
cat.say();*/

//Object.create

const newDog = Object.create(animal);
newDog.name = 'dog';
newDog.voice = 'woof';
// newDog.say();

//function object-constructor

function createAnimal(name, voice){
    const result = Object.create(animal);
    result.name = name;
    result.voice = voice;
    return result;
}

/*const dog = createAnimal('dog', 'woof');
const cat = createAnimal('cat', 'meow');*/

// console.log(res1, res2);

//function class
function Animal(name, voice){
    this.name = name;
    this.voice = voice;
}

Animal.prototype.say = function(){
    console.log(this.name, 'goes', this.voice);
};

const dog = new Animal('dog', 'woof');
const cat = new Animal('cat', 'meow');

/*dog.say();
cat.say()*/;


//make null parent prototypes

const obj = Object.create(null); //no prototype object
console.log(obj.toString());