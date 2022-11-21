// 06-unique
// * Task description: Write a method that returns a duplicate-free array
// * Expected Result: Duplicate-free array [1, 2, 3, 1, 2] => [1, 2, 3]

let unique = (arr) => Array.from(new Set(arr));

let arr4 = [1, 2, 3, 1, 2];

console.log(unique(arr4));