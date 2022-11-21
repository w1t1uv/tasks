// 07-is-empty-deep
// * Task description: Write a method that makes a deep check is an object empty
// * Empty values: '', null, NaN, undefined, [], {}

let deepCheck = (item) => {
	if (item === null) {
		return true;
	}
	if (Array.isArray(item)) {
		if (item.length === 0) {
			return true;
		}

		let result;
		for (let i = 0; i < item.length; i += 1) {
			if (typeof item[i] === 'boolean' || (typeof item[i] === 'number' && !Number.isNaN(item[i]))
				|| (typeof item[i] === 'string' && item[i] !== '')) {
				result = false;
				break;
			}
			if (Array.isArray(item[i]) || (typeof item[i] === 'object' && item[i] !== null)) {
				result = deepCheck(item[i]);
				break;
			}

			result = true;
		}

		return result;
	}
	if (typeof item === 'object') {
		let objectKeys = Object.keys(item);
		if (objectKeys.length === 0) {
			return true;
		}

		let result;
		for (let i = 0; i < objectKeys.length; i += 1) {
			let value = item[objectKeys[i]];

			if (typeof value === 'boolean' || (typeof value === 'number' && !Number.isNaN(value))
				|| (typeof value === 'string' && value !== '')) {
				result = false;
				break;
			}
			if (Array.isArray(value) || (typeof value === 'object' && value !== null)) {
				result = deepCheck(value);
				break;
			}

			result = true;
		}

		return result;
	}
};

let obj5 = { a: { b: undefined } };

console.log(deepCheck(obj5));