const array: number[] = [];

// O(1)
array[0] = 0;
array[1] = 1;

// O(1)
array.push(2);
array.push(3);

// O(n)
array.splice(0, 1);
array.shift();
