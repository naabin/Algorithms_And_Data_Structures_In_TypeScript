
import { shellSort } from "../src/shell_sort";

const chars = ['S', 'H', 'E', 'L', "L", "S", "O", "R", "T"]

test('testing shell sort correctly', () => {
  shellSort<string>(chars, (a, b) => a.localeCompare(b));
  const expected = ["E", "H", "L", "L", "O", "R", "S", "S", "T"];
  expect(chars).toEqual(expected);
})