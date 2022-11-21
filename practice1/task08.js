// 08-flatten
// * Task description: Write a method that turns a deep array into a plain array
// * Expected Result: [1, 2, [3, 4, [5]]] => [1, 2, 3, 4, 5]

let flat = (arr) => arr.flat(Infinity);

let arr7 = [1, 2, [3, 4, [5]]];

console.log(flat(arr7));