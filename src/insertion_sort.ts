import { exchange } from "./utility";

export function insertionSort<T>(arr: T[], comparator: (a: T, b: T) => number): void {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = i; j > 0 && comparator(arr[j], arr[j-1]) < 0; j--) {
      exchange(arr, j, j-1);
    }
  }
}