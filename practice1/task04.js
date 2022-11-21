// 04-from-pairs
// * Task description: Write a method that returns an object composed of key-value pairs.
// * Expected Result: [['a', 1], ['b', 2]] => { a: 1, b: 2 }

let arrToObj = Object.fromEntries;

let arr2 = [['a', 1], ['b', 2]];

console.log(arrToObj(arr2));