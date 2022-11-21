let check = (arr) => (typeof arr === Object && !Array.isArray(arr) && typeof arr !== null);

let arr = [1, 2, 3];

console.log(check(arr));