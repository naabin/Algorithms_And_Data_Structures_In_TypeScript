import { exchange } from "./utility";

export function shellSort<T>(arr: T[], comparator: (a: T, b: T) => number): void {
  const n = arr.length;
  let h = 1;
  while (h < Math.floor(n/3)) h = 3 * h + 1;
  while (h >= 1) {
    for (let i = h; i < n; i++) {
      for (let j = i; j >= h && comparator(arr[j], arr[j - h]) < 0; j -= h) {
        exchange(arr, j, j - h);
      }
    }
    h = Math.floor(h/3);
  }
}