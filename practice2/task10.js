// 10-intersection-deep
// * Task description: Write a method that finds all intersections of objects
// * Expected Result: ({ a: 1, b: { c: 3 } }, { c: 1, b: { c: 3 } }) => { b: { c: 3 } }

let deepIntersection = (obj1, obj2) => {
	let obj1Keys = Object.keys(obj1);

	return obj1Keys.reduce((acc = {}, key) => {
		if (obj1[key] === obj2[key]) {
			acc = {
				...acc,
				[key]: obj1[key],
			};
		}
		if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
			let isEqualArrays = isEqualDeep(obj1[key], obj2[key]);

			if (isEqualArrays) {
				acc = {
					...acc,
					[key]: obj1[key],
				};
			}
		} else if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
			let hasIntersection = deepIntersection(obj1[key], obj2[key]);

			if (Object.keys(hasIntersection).length !== 0) {
				acc = {
					...acc,
					[key]: hasIntersection,
				};
			}
		}
		return acc;
	}, {});
};

let obj10 = { a: 1, b: { c: 3 } };
let obj11 = { c: 2, b: { c: 3 } };

console.log(deepIntersection(obj10, obj11));