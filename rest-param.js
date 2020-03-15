//Rest parameter

//start old code
max(1,3);
max(3,4,5);

function max(arguments){
    var numbers = Array.prototype.slice.call(arguments);
}
//end
function max_new(... numbers){
    console.log(numbers);
}

max_new(1,3,5,4);  //[ 1, 3, 5, 4 ]
max_new(); // []