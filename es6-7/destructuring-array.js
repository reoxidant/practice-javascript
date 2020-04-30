//Array destructuring

const fib = [1,2,3,5,8,13];

const [a,b,c] = fib;

/*console.log(a,b,c);*/


const line = [[10,20],[50, 23]];

const [[p1x, p1y], [p2x, p2y]] = line;

//console.log(p1x, p1y, p2x, p2y);

const people = ['chris', 'sandra'];

const [a, b, c = 'guest'] = people;

/*console.log(a,b,c);*/

const people = ['chris', 'sandra', 'john'];

const [a, ...other] = people;

/*console.log(a, other);*/

const dist = {
    duck:'quack',
    dog:'wuff',
    mouse:'squake',
    hamster:'squake'
}

const res = Object.entries(dist)
    .filter(([key, value]) => value === 'squake')
    .map(([key]) => key);

// console.log(res);


const shape = {
    type: 'segment',
    coordinates:{
        start: [10,15],
        end: [17, 120]
    }
};

const {coordinates:{start: [posX1, posY1], end: [posX2, posY2]}} = shape;

console.log(posX1, posY1, posX2, posY2);

