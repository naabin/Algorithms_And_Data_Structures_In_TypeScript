import { insertionSort } from "../src/insertion_sort";

const arr = [3, 4, 0, 2, 1]

test('testing insertions sort correctly', () => {
  insertionSort(arr, (a, b) => a - b);
  expect(arr).toEqual([0, 1, 2, 3, 4]);
})