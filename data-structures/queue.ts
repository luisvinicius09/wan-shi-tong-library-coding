import { LinkedList } from './linked-list';

export class Queue<T> {
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

	enqueue(value: T): void {
		this.list.addAtHead(value);
	}

	dequeue(): T | null {
		if (this.isEmpty()) return null;

		return this.list.removeAtTail();
	}

	peekFront(): T | null {
		if (this.isEmpty()) return null;

		return this.list.peakHead();
	}

	peekBack(): T | null {
		if (this.isEmpty()) return null;

		return this.list.peakTail();
	}

	contains(value: T): boolean {
		return this.list.contains(value);
	}
}
