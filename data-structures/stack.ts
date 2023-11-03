import { LinkedList } from './linked-list';

export class Stack<T> {
	private list: LinkedList<T>;

	size(): number {
		return this.list.size();
	}

	isEmpty(): boolean {
		return this.list.isEmpty();
	}

	clear() {}

	push(value: T): boolean {
    return this.list.addAtTail(value);
  }

	pop() {}

	peek() {}

	contains() {}
}
