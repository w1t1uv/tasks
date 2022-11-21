// 07-is-equal
// * Task description: Write a method that makes a shallow compare of two arrays and returns true if they are identical.
// * Expected Result: ([1, 2, 3], [1, 2, 3]) => true

function compare(arr1, arr2) {
	if(arr1.length !== arr2.length) return false;

	for(let i = 0; i < arr1.length; i++)
		if(arr1[i] !== arr2[i]) return false;

	return true;
};

let arr5 = [1, 2, 3];
let arr6 = [1, 2, 3];

console.log(compare(arr5, arr6));