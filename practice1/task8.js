let flat = (arr) => arr.flat(Infinity);

let arr7 = [1, 2, [3, 4, [5]]];

console.log(flat(arr7));