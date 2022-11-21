// 05-without
// * Task description: Write a method that returns an array without listed values
// * Expected Result: [1, 2, 3, 1, 2] without 1, 2 => [3]

let without = (arr) => arr.filter((item => item != 1 && item != 2))

let arr3 = [1, 2, 3, 1, 2];

console.log(without(arr3));