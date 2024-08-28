import { quickSort } from "../src";

const chars = ['Q', "U", "I", "C", "K", "S", "O", "R", "T"];

test('testing quick sort on string array correctly', ()=> {
  const expected = ["C", "I", "K", "O", "Q", "R", "S", "T", "U"]
  quickSort<string>(chars, (a, b) => a.localeCompare(b));
  expect(chars).toEqual(expected);
})

const nums = [1, 2, 3, 4, 5, 6, 7, 0, 8, -1];

test('testing quick sort on integer array correctly', () => {
  const expected = [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8];
  quickSort<number>(nums, (a, b) => a - b);
  expect(nums).toEqual(expected);
})