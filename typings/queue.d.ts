export interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T | null | undefined;
  isEmpty(): boolean;
  size(): number;
}