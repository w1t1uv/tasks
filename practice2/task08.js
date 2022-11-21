// 08-is-equal-deep
// * Task description: Write a method that makes a deep compare of two objects
// * Expected Result: True if objects are equal, false if objects are different ({ a: 1, b: { c: 1 } }, { a: 1, b: { c: 1 } }) => true

let deepCompare = (obj1, obj2) => {
	let obj1Keys = Object.keys(obj1);
	let obj2Keys = Object.keys(obj2);

	if (obj1Keys.length === 0 && obj2Keys.length === 0) {
		return true;
	}

	let compareList = obj1Keys.map((key) => {
		let valueOfObj1 = obj1[key];
		let valueOfObj2 = obj2[key];
		if ((Number.isNaN(valueOfObj1) && Number.isNaN(valueOfObj2))
			|| (valueOfObj1 === null && valueOfObj2 === null)) {
			return true;
		}
		if (valueOfObj1 === valueOfObj2) {
			return true;
		}
		if (Array.isArray(valueOfObj1) && Array.isArray(valueOfObj2)) {
			return isArraysDeepCompare(valueOfObj1, valueOfObj2);
		}
		if (typeof valueOfObj1 === 'object' && typeof valueOfObj2 === 'object') {
			return deepCompare(valueOfObj1, valueOfObj2);
		}

		return false;
	});

	return !compareList.includes(false) && !compareList.includes(undefined);
};

let isArraysDeepCompare = (arr1, arr2) => {
	if (arr1.length !== arr2.length) {
		return false;
	}

	let compared = arr1.map((el, id) => {
		if (Array.isArray(el) && Array.isArray(arr2[id])) {
			return isArraysDeepCompare(el, arr2[id]);
		}
		if (typeof el === 'object' && typeof arr2[id] === 'object') {
			return deepCompare(el, arr2[id]);
		}

		return arr2[id] === el;
	});

	return !compared.includes(false);
};

let obj6 = { a: 1, b: { c: 1 } };
let obj7 = { a: 1, b: { c: 1 } };

console.log(deepCompare(obj6, obj7));