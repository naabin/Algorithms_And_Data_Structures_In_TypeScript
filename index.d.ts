declare module 'algo-ds-ts' {
  export class Stack<T> {
    constructor();
    push(item: T): void;
    pop(): T | null | undefined;
    isEmpty(): boolean;
    size(): number;
  }
}