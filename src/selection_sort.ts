import { exchange } from "./utility";

export function selectionSort<T>(arr:T[], comparator: (a: T, b: T) => number): void {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (comparator(arr[j], arr[min]) < 0) min = j;
    }
    exchange<T>(arr, i, min);
  }
}