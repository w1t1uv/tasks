// 01-fill
// * Task description: Write a method that creates a new array with given values
// * Expected Result: (3, 'a') => ['a', 'a', 'a']

let repeat = (arrSize, value) => new Array(arrSize).fill(value);

console.log(repeat(3, 'a'));