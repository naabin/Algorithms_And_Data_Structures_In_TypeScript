import {Queue} from '../src/queue';

const queue = new Queue<number>();
for (let i = 0; i < 10; i++) {
  queue.enqueue(i);
}

test('check the size of the queue correctly', () => {
  const size = queue.size();
  expect(size).toBe(10);
});

test('check the dequeue operation', () => {
  const result = queue.dequeue();
  expect(result).toBe(0);
})

test('check the size after dequeue correctly', () => {
  const size = queue.size();
  expect(size).toBe(9);
})

test('check enqueue operations correctly', () => {
  queue.enqueue(11);
  expect(queue.size()).toBe(10);
})
test('check the size of the queue after being emtpy', () => {
  for (let i = 0; i < 10; i++) {
    queue.dequeue();
  }
  expect(queue.size()).toBe(0);
})
