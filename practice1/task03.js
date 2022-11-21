// 03-compact
// * Task description: Write a method that clears array from all unnecessary elements, like false, undefined, empty strings, zero, null
// * Expected Result: [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]

let clean = (arr) => arr.filter((item) => item);

let arr1 = [0, 1, false, 2, undefined, '', 3, null];

console.log(clean(arr1));