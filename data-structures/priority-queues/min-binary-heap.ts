export class MinBinaryHeap<T> {
	private heap: T[];

	constructor() {
		this.heap = [];
	}

	heapify() {}

	size(): number {
		return this.heap.length;
	}

	isEmpty(): boolean {
		return this.size() === 0;
	}

	add(): void {}

	poll(): T | null {
		throw new Error('Not implemented');
	}

	remove(element: T): boolean {
		throw new Error('Not implemented');
	}

	clear(): void {}

	peek(): T | null {
		throw new Error('Not implemented');
	}

	contains(): boolean {
		throw new Error('Not implemented');
	}

	private sink(k: number): void {}

	private swim(k: number): void {}

	private removeAt() {}

	private getLeftChildIndex(parentIndex: number): number {
		return parentIndex * 2 + 1;
	}

	private getRightChildIndex(parentIndex: number): number {
		return parentIndex * 2 + 1;
	}

	private getParentIndex(childIndex: number): number {
		return Math.floor((childIndex - 1) / 2);
	}
}
