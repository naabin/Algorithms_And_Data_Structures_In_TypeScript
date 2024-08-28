export function mergeSort<T>(arr: T[], comparator: (a: T, b: T) => number): void {
  const aux = new Array<T>(arr.length);
  sort(arr, comparator, 0, arr.length - 1, aux);
}

function sort<T>(arr: T[], comparator: (a: T, b: T) => number, low: number, high: number, aux: T[]): void {
  if (high <= low) return;
  let mid = Math.floor(low + (high - low)/2);
  sort<T>(arr, comparator, low, mid, aux);
  sort<T>(arr, comparator, mid+1, high, aux);
  merge<T>(arr, aux, comparator, low, mid, high);
}

function merge<T>(arr: T[], aux:T[], comparator: (a: T, b: T) => number, low: number, mid: number, high: number): void {
  let i = low, j = mid + 1;
  for (let k = low; k <= high; k++) {
    aux[k] = arr[k];
  }
  for (let k = low; k <= high; k++) {
    if (i > mid) arr[k] = aux[j++];
    else if (j > high) arr[k] = aux[i++];
    else if (comparator(aux[j], aux[i]) < 0) arr[k] = aux[j++]
    else arr[k] = aux[i++];
  }
}