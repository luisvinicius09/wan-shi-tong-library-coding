class LinkedListNode<ValueType> {
	value: ValueType;
	next: LinkedListNode<ValueType> | null;
	prev: LinkedListNode<ValueType> | null;

	constructor(value: ValueType) {
		this.value = value;
		this.next = null;
		this.prev = null;
	}
}

interface List<T> {
	head: LinkedListNode<T>;
	tail: LinkedListNode<T>;
	length: number;
}

export class LinkedList<T> {
	private list: List<T> | undefined;

	constructor() {
		this.list = undefined;
	}

	public size(): number {
		if (this.list) return this.list.length;

		return 0;
	}

	public isEmpty(): boolean {
		return !this.list;
	}

	addAtHead(value: T): boolean {
		const newNode = new LinkedListNode(value);

		if (this.list) {
			this.list.head.prev = newNode;
			newNode.next = this.list.head;

			this.list.head = newNode;
			this.list.length++;
		} else {
			this.list = {
				head: newNode,
				tail: newNode,
				length: 1,
			};
		}

		return true;
	}

	addAtTail(value: T): boolean {
		const newNode = new LinkedListNode(value);

		if (this.list) {
			this.list.tail.next = newNode;
			newNode.prev = this.list.tail;

			this.list.tail = newNode;
			this.list.length++;
		} else {
			this.list = {
				head: newNode,
				tail: newNode,
				length: 1,
			};
		}

		return true;
	}

	addAt(value: T, idx: number): boolean {
		// if (idx < 0 || idx > this.size() || !this.list) return false;

		// const newNode = new LinkedListNode(value);

		// let current = this.list.head;

		// for (let i = 0; i < idx; i++) {
		// 	current = current.next!;
		// }

		// return true;
		throw new Error('Method not implemented.');
	}

	removeAtHead(): boolean {
		throw new Error('Method not implemented.');
	}

	removeAtTail(): boolean {
		throw new Error('Method not implemented.');
	}

	removeAt(idx: number): boolean {
		throw new Error('Method not implemented.');
	}

	peakHead(): T | null {
		if (!this.list) return null;

		return this.list.head.value;
	}

	peakTail(): T | null {
		if (!this.list) return null;

		return this.list.tail.value;
	}

	getAtIndex(idx: number): T | null {
		if (idx < 0 || idx >= this.size() || !this.list) return null;

		let current = this.list.head;

		for (let i = 0; i < idx; i++) {
			current = current.next!;
		}

		return current.value;
	}

	printList() {
		throw new Error('Method not implemented.');
	}
}
