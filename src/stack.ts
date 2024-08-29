import { IStack } from "../typings/stack";
import { NodeObj } from "./node";



export class Stack<T> implements IStack<T>, Iterable<T> {
  first: NodeObj<T> | null | undefined;
  n: number = 0;

  constructor() {
    this.first = null;
  }

  push(item: T): void {
    const oldFirst = this.first;
    this.first = new NodeObj(item, oldFirst);
    this.first.next = oldFirst;
    this.n++;
  }
  pop(): T | null | undefined {
    const item = this.first?.item;
    this.first = this.first?.next;
    this.n--;
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