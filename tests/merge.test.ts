import { mergeSort } from "../src/merge_sort";

const chars = ['M', 'E', 'R', 'G', "E", "S", "O", "R", "T"]

test('merge sort test with string array correctly', () => {
  mergeSort<string>(chars, (a, b) => a.localeCompare(b));
  const expected = ["E", "E", "G", "M", "O", "R", "R", "S", "T"]
  expect(chars).toEqual(expected);
})

const nums = [0, -1, 3, 0, 6, 150, 2, 5, 5, 4, 2]

test('merge sort test with number correctly', () => {
  mergeSort<number>(nums, (a, b) => a - b);
  const expected = [-1, 0, 0, 2, 2, 3, 4, 5, 5, 6, 150];
  expect(nums).toEqual(expected);
})