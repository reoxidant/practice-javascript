// Destructuring - Деструктуризация

const person = {
    firstName: 'John',
    lastName: 'Smith',
    age: 30,
    name:{
        first: 'Peter',
        last: 'Smith'
    },
    role: 'admin'
};

// const firstName = person.firstName;
// const lastName = person.lastName;

// const { firstName, lastName } = person;
// console.log(firstName, lastName);

//two level in
const { name:{first: firstName, last: lastName}} = person;
// console.log(firstName, lastName);

//role
// const {role = 'user'} = person; //admin
const {permissions: {role = 'user'} = {}} = person; //user
// console.log(role);

function connect({
     host = "localhost",
     port = 12345,
     user = "guest"
     } = {}){
     console.log('user: ' + user, 'port: ' + port, 'host: ' + host);
};

connect({
   host: "localhost",
   port: 1829,
   user: "peter"
}); //user: peter port: 1829 host: localhost

connect({port: 1488}); //user: guest port: 1488 host: localhost
connect(); //error, use obj = {}

const animals = {
    duck: 'quack',
    dogs:{
        first: "wuff",
        second: "rrrr"
    },
    mouse:'squeak',
    cat: 'meow'
};

const {duck, dogs:{first: firstDog, second: secondDog}, ...otherAnimals} = animals;

console.log(duck, firstDog, secondDog, otherAnimals);