// 03-without
// * Task description: Write a method that returns a new object without provided properties
// * Expected Result: ({ a: 1, b: 2 }, 'b') => { a: 1 }

let without = (object, ...args) => {
	let newObject = { ...object };

	args.forEach((arg) => {
		delete newObject[arg];
	});

	return newObject;
};

let obj12 = {a: 1, b: 2};

console.log(without(obj12, 'b'));