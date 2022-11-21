let without = (object, ...args) => {
	let newObject = { ...object };

	args.forEach((arg) => {
		delete newObject[arg];
	});

	return newObject;
};

let obj12 = {a: 1, b: 2};

console.log(without(obj12, 'b'));