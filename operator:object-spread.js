// Spread operator for Objects

const defaults = {
    host: 'localhost',
    user:'admin',
    dbName:'moodle'
};

const options = {
    user: 'guest',
    password: '1234'
};

//es 6 without spread operator
const res = Object.assign({}, defaults, options);
// console.log(res);

const res2 = { ...defaults, ... options};

//add property to obj

const port = 8080;
const res3 = {
    ...defaults,
    ...options,
    port,
    connect(){

    }
};

console.log(res3);
