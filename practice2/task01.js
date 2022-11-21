// 01-is-plain-object
// * Task description: Write a method that verifies an argument is a plain object, not an array or null
// * Expected Result: True if object is plain, false otherwise. ({ a: 1 }) => true, ([1, 2, 3]) => false

let check = (arr) => (typeof arr === Object && !Array.isArray(arr) && typeof arr !== null);

let arr = [1, 2, 3];

console.log(check(arr));