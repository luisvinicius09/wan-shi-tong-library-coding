import { LinkedList } from './linked-list';

export class Stack<T> {
	private list: LinkedList<T>;

	constructor() {
		this.list = new LinkedList();
	}

	size(): number {
		return this.list.size();
	}

	isEmpty(): boolean {
		return this.list.isEmpty();
	}

	clear(): void {
		this.list.clear();
	}

	push(value: T): boolean {
		return this.list.addAtTail(value);
	}

	pop(): T | null {
		if (this.isEmpty()) return null;

		return this.list.removeAtTail();
	}

	peek(): T | null {
		if (this.isEmpty()) return null;

		return this.list.peakTail();
	}

	contains(value: T): boolean {
		return this.list.contains(value);
	}
}
