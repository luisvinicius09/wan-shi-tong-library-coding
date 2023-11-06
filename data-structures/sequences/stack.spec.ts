import { expect, beforeEach, describe, it } from 'vitest';
import { Stack } from './stack';

describe('Stack', () => {
	let stack: Stack<number>;

	beforeEach(() => {
		stack = new Stack();
	});

	it('should add an element to the stack', () => {
		stack.push(0);
		stack.push(1);
		stack.push(2);

		expect(stack.isEmpty()).toBe(false);
		expect(stack.size()).toBe(3);
		expect(stack.peek()).toBe(2);
	});

	it('should pop an element from the stack', () => {
		stack.push(0);
		stack.push(1);
		stack.push(2);

		expect(stack.isEmpty()).toBe(false);
		expect(stack.size()).toBe(3);
		expect(stack.peek()).toBe(2);

		stack.pop();

		expect(stack.size()).toBe(2);
		expect(stack.peek()).toBe(1);

		stack.pop();

		expect(stack.size()).toBe(1);
		expect(stack.peek()).toBe(0);

		stack.pop();

		expect(stack.isEmpty()).toBe(true);
		expect(stack.peek()).toBe(null);
	});
});
