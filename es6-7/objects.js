//Objects

const x = 10;
const y = 55;

const obj = {
    x:x,
    y:y,
    draw: function(){
        return '..';
    }
};

// console.log(obj);

//es 6

const new_obj = { x, y, draw(){console.log('Привет я Рома!')}};
//console.log(new_obj);

// --------

const prefix = "_mod_";

const data = {
    [prefix + 'name']: "John",
    [prefix + 'age']: 26
};

// console.log(data);


const defaults = {
    host: 'localhost',
    user:'admin',
    dbName:'moodle'
};

const options = {
    user: 'guest',
    password: '1234'
};

//Value options copy to defaults
// Object.assign(defaults, options);
// console.log(defaults);

//value options and defaults copy to {}
const res = Object.assign({}, defaults, options);
// console.log(res);

//shallowCopies

const myFriends = {
    myName : "Vitaliy",
    myFriends: ['Masha', 'Dasha', 'Katya', 'Nadya', 'Nastya', 'Zhenya', 'Natasha', 'Sveta', 'Sasha', 'Ulya', 'Ira', 'Lena']
};

const shallowCopy = Object.assign({}, myFriends);
myFriends.myFriends.push('Lubochka');

console.log(shallowCopy);




