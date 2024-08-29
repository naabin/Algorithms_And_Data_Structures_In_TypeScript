export interface IStack<T> {
  push(item: T): void;
  pop(): T | null | undefined;
  isEmpty(): boolean;
  size(): number;
}