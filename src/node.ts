export class NodeObj<T> {
  item: T | null;
  next: NodeObj<T> | null | undefined;

  constructor(item: T, next: NodeObj<T> | null | undefined) {
    this.item = item;
    this.next = next;
  }
}