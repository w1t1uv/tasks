let intersection = (obj1, obj2) => {
	let obj1Keys = Object.keys(obj1)
	return obj1Keys.reduce((acc = {}, key) => {
		if(obj1[key] === obj2[key]) {
			acc = {
				...acc,
				[key]: obj1[key],
			};
		}
		return acc;
	}, {});
};

let obj8 = { a: 1, b: 2 };
let obj9 = { c: 1, b: 2 };

console.log(intersection(obj8, obj9));