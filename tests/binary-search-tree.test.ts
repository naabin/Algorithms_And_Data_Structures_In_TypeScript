import { BST } from "../src/binary-serach-tree";


const bst = new BST<string, number>((a, b) => a.localeCompare(b));

bst.put("a", 1);
bst.put("b", 2);
bst.put("c", 3);

test('testing min correctly', () => {
  const result = bst.min();
  expect(result).toBe('a');
})

test('testing max correctly', () => {
  const result = bst.max();
  expect(result).toBe('c');
})

test('testing deleteMin correctly', () => {
  bst.deleteMin();
  expect(bst.size()).toBe(2);
  const result = bst.min();
  expect(result).toBe('b');
})

test('test delete with given key correctly', () => {
  bst.delete('b');
  expect(bst.size()).toBe(1);
})