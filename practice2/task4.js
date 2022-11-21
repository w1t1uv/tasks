let isEmpty = (obj) => {
	let objectKeys = Object.keys(obj);
	if (objectKeys.length === 0) {
		return true;
	}
	return !objectKeys.filter((key) => obj[key] || obj[key] === false || obj[key] === 0).length;
};

let obj1 = {};

console.log(isEmpty(obj1));