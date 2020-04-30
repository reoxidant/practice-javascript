const arr = [1,2,3];
const arr2 = [5,6,11];

//old version
const max1 = Math.max.apply(arr, arr2);
//ecmascript 2016

const max2 = Math.max(100, ...arr, 663 ,...arr2, 40);

console.log(max2);

const shallowCopy = [100, ... arr, 42, 24, ... arr2, 11];

console.log(shallowCopy);