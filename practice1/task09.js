// 09-chunk
// * Task description: Write a method that splits an array into parts of determined size
// * Expected Result: ([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]

function chunk(arr, chunkSize) {
	let result = [];

	for(let i = 0; i < arr.length; i += chunkSize) {
		let chunk = arr.slice(i, i + chunkSize);

		result.push(chunk);
	};
	return result;
};

let arr8 = [1, 2, 3, 4, 5];

console.log(chunk(arr8, 2));