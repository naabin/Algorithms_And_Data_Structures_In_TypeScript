export function exchange<T>(arr: T[], x: number, y: number) {
  const temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
}