import { IQueue } from "../typings/queue";
import { NodeObj } from "./node";



export class Queue<T> implements IQueue<T>, Iterable<T> {
  first: NodeObj<T> | null | undefined;
  last: NodeObj<T> | null | undefined;
  n: number;

  constructor() {
    this.first = null;
    this.last = null;
    this.n = 0;
  }

  enqueue(item: T): void {
    const oldLast = this.last;
    this.last = new NodeObj(item, null);
    if (this.isEmpty()) this.first = this.last;
    else oldLast!.next = this.last;
    this.n++;
  }
  dequeue(): T | null | undefined {
    const item = this.first?.item;
    this.first = this.first?.next;
    this.n--;
    if (this.isEmpty()) this.last = null;
    return item;
  }
  isEmpty(): boolean {
    return this.first == null;
  }
  size(): number {
    return this.n;
  }
  [Symbol.iterator](): Iterator<T, any, undefined> {
   let currentNode = this.first;
   return {
    next() {
      if (!currentNode) return {value: undefined, done: true};
      const returnValue = {
        value: currentNode.item!,
        done: false
      };
      currentNode = currentNode.next;
      return returnValue;
    }
   } 
  }

}