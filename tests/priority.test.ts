import { PQ } from "../src/priority-queue";


const pq = new PQ<number>();
for (let i = 0; i < 10; i++) {
  pq.insert(i);
}

test('checks the delMax of the PQ correctly', () => {
  const item = pq.popQ();
  expect(item).toBe(9);
})

test('checks insert into the current pririty queue', () => {
  pq.insert(15);
  const result = pq.popQ();
  expect(result).toBe(15);  
})

test('check priority with comparator', () => {
  const minPQ = new PQ<number>((a, b) => a > b);
  for (let i = 0; i < 10; i++) {
    minPQ.insert(i);
  }
  const result = minPQ.popQ();
  expect(result).toBe(0);
})

