import { exchange } from "./utility";

export function quickSort<T>(arr: T[], comparator: (a: T, b: T) => number): void {
  sort<T>(arr, 0, arr.length - 1, comparator);
}
function sort<T>(arr: T[], low: number, high: number, comparator: (a: T, b: T) => number): void {
  if (high <= low) return;
  let j = partition<T>(arr, low, high, comparator);
  sort<T>(arr, low, j - 1, comparator);
  sort<T>(arr, j + 1, high, comparator);
}

function partition<T>(arr: T[], low: number, high: number, comparator: (a: T, b: T) => number): number {
  let i = low, j = high + 1;
  const v: T = arr[low];
  while (true) {
    while (comparator(arr[++i], v) < 0) if (i == high) break;
    while (comparator(v, arr[--j]) < 0) if (j == low) break;
    if (i >= j) break;
    exchange<T>(arr, i, j);
  }
  exchange(arr, low, j);
  return j;
}