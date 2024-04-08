// Simple abstraction using native JS
const arr = new Array(2); // -> [undefined, undefined]
	
// O(1) 
arr[0] = 0
arr[1] = 1 // -> [0, 1]

// OR

// O(1) 
arr.push(3) 
arr.push(4) // -> [3, 4]

// O(n) 
arr.slice(1, 1); // -> [4]