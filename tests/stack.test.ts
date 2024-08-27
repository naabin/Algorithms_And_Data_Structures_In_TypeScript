import { Stack } from "../src";

const stack = new Stack<number>();
for (let i = 0; i < 10; i++) {
  stack.push(i);
}

test('check the size of the stack correctly', () => {
  const result = stack.size();
  expect(result).toBe(10);
})

test('removes the head of the stack correctly', () => {
  const result = stack.pop();
  expect(result).toBe(9);
})

test('check the size after popping correctly', () => {
  const size = stack.size();
  expect(size).toBe(9);
})

test('check if the stack is empty', () => {
  expect(stack.isEmpty()).toBe(false);
})

test('check the stack after being emptied', () => {
  for (let i = 0; i < 10; i++) stack.pop();
  expect(stack.isEmpty()).toBe(true);
})