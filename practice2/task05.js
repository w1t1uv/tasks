// 05-is-equal
// * Task description: Write a method that makes a shallow compare of two objects
// * Expected Result: True if objects are identical, false if objects are different ({ a: 1, b: 1 }, { a: 1, b: 1 }) => true

function compare(obj1, obj2) {
	let objectKeys1 = Object.keys(obj1);
	let objectKeys2 = Object.keys(obj2);

	if (objectKeys1.length !== objectKeys2.length) {
		return false;
	}
	return !objectKeys1.filter((key) => obj1[key] !== obj2[key]).length;
};

let obj2 = {a: 1, b: 2};
let obj3 = {a: 1, b: 2};

console.log(compare(obj2, obj3));