import {selectionSort} from '../src/selection_sort';


test('checks selection sorting correctly', () => {
  const nums = [1, 3, 4, 0, 2, 10];
  selectionSort<number>(nums, (a, b) => a - b);
  expect(nums).toEqual([0, 1, 2, 3, 4, 10]);
})