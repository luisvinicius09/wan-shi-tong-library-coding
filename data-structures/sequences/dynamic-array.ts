// Native implementation
const array: number[] = [];

// O(1)
array[0] = 0;
array[1] = 1; // [0, 1]

// O(1)
array.push(2);
array.push(3); // [0, 1, 2, 3]

// O(n)
array.splice(0, 1); // [1, 2, 3]
array.shift(); // [2, 3]

// Own implementation
class DynamicArray<T> {
	private capacity: number;
	private length: number;
	private array: Array<T | undefined>;

	constructor(capacity: number) {
		this.capacity = capacity;
		this.length = 0;
		this.array = new Array(capacity);
	}

	get(i: number) {
		return this.array[i];
	}

	set(i: number, n: T) {
		this.array[i] = n;
	}

	push(n: T) {
		if (this.length === this.capacity) {
			this.resize();
		}
		this.array[this.length] = n;
	}

	pop() {
		if (this.length > 0) {
			const item = this.array[this.length - 1];
			this.array[this.length - 1] = undefined;
			this.length--;

			return item;
		}
	}

	resize() {
		const newCapacity = this.capacity * 2;

		const newArray = new Array(newCapacity);
		this.capacity = newCapacity;

		for (let i = 0; i < newArray.length; i++) {
			newArray[i] = this.array[i];
		}

		this.array = newArray;
	}

	getSize() {
		return this.length;
	}

	getCapacity() {
		return this.capacity;
	}
}
