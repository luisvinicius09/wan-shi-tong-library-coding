import { it, describe, beforeEach, expect } from 'vitest';
import { Queue } from '../queue';

describe('Queue', () => {
	let queue: Queue<number>;

	beforeEach(() => {
		queue = new Queue();
	});

	it('should add an item to the queue', () => {
		queue.enqueue(0);
		queue.enqueue(1);
		queue.enqueue(2);
		queue.enqueue(3);

		expect(queue.size()).toBe(4);
		expect(queue.peekFront()).toBe(3);
		expect(queue.peekBack()).toBe(0);
	});

	it('should dequeue an item from the queue', () => {
		queue.enqueue(0);
		queue.enqueue(1);
		queue.enqueue(2);
		queue.enqueue(3);

		expect(queue.size()).toBe(4);
		expect(queue.peekFront()).toBe(3);
		expect(queue.peekBack()).toBe(0);

		queue.dequeue();

		expect(queue.size()).toBe(3);
		expect(queue.peekFront()).toBe(3);
		expect(queue.peekBack()).toBe(1);

		queue.dequeue();

		expect(queue.size()).toBe(2);
		expect(queue.peekFront()).toBe(3);
		expect(queue.peekBack()).toBe(2);

		queue.dequeue();

		expect(queue.size()).toBe(1);
		expect(queue.peekFront()).toBe(3);
		expect(queue.peekBack()).toBe(3);

		queue.dequeue();

		expect(queue.isEmpty()).toBe(true);
		expect(queue.peekFront()).toBe(null);
		expect(queue.peekBack()).toBe(null);
	});
});
