function square(x){
    return x*x;
}

const sq = x => x*x;

console.log(sq(3));

const arr = ['1', '3', '2', '4'];

const res = arr
    .map((item) => parseInt(item))
    .filter((item) => item%2)
    .reduce((max, value) => Math.max(max, value), 0);

console.log(res);

const res2 = arr
    .map(function(item){
        return parseInt(item);
    })
    .filter(function(item){
        return item%2;
    })
    .reduce(function(max, value){
        return Math.max(max, value)
    }, 0);

console.log(res2);

//error context this

/*const person  = {
  greet: function(name) {
      console.log("Hello, " + name);
  },
  greetAll: function (arr) {
      arr.forEach(function (item) {
          this.greet(item);
      });
  }
};

const names = ['Bob', 'Masha', 'Petr'];

person.greetAll(names);*/

//arrow function

const person  = {
    greet: function(name) {
        console.log("Hello, " + name);
    },
    greetAll: function (arr) {
        arr.forEach((item) =>{
            this.greet(item);
        });
    }
};

const names = ['Bob', 'Masha', 'Petr'];

person.greetAll(names); //Bob, Masha, Petr