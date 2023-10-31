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

class LinkedList<T> {
	private head: LinkedListNode<T> | undefined;
	private tail: LinkedListNode<T> | undefined;
	private length: number;

	constructor() {
		this.head = undefined;
		this.tail = undefined;
		this.length = 0;
	}

	public size(): number {
		return this.length;
	}

	public isEmpty(): boolean {
		return this.length === 0;
	}

  // TODO

	addAtHead() {}

	addAtTail() {}

	addAt() {}

	peakHead() {}

	peakTail() {}

	getAtIndex() {}

	printList() {}
}
