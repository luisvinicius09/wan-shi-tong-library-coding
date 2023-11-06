import { beforeEach, describe, expect, it } from 'vitest';
import { LinkedList } from './linked-list';

let list: LinkedList<unknown>;

describe('Linked List', () => {
	beforeEach(() => {
		list = new LinkedList();
	});

	it.todo('should be empty');

	it.todo('should return null if list is undefined');

	it('should add an element to the list through the head', () => {
		list.addAtHead(0);
		list.addAtHead(1);

		expect(list.peakHead()).toBe(1);

		list.addAtHead(2);
		list.addAtHead(3);

		expect(list.size()).toBe(4);
		expect(list.peakHead()).toBe(3);
	});

	it('should add an element to the list through the tail', () => {
		list.addAtTail(5);
		list.addAtTail(4);

		expect(list.peakTail()).toBe(4);

		list.addAtTail(3);
		list.addAtTail(2);
		list.addAtTail(1);

		expect(list.size()).toBe(5);
		expect(list.peakTail()).toBe(1);
	});
});
