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