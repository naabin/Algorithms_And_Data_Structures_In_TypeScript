interface IPQ<Key> {
  insert(k: Key): void;
  popQ(): Key;
  isEmpty(): boolean;
  size(): number;
}

export class PQ<Key> implements IPQ<Key> {
  private heap: Key[];
  private comparator?: (a: Key, b: Key) => boolean;
  constructor(comparator?: (a: Key, b: Key) => boolean) {
    this.heap = [];
    this.comparator = comparator;
  }
  private compare(a: number, b: number): boolean {
    if (this.comparator) return this.comparator(this.heap[a], this.heap[b]);
    return this.heap[a] < this.heap[b];
  }
  private swim(k: number): void {

    while (k > 0 && this.compare(Math.floor(k/2), k)) {
      this.exchange(Math.floor(k/2), k);
      k = Math.floor(k/2);
    }
  }
  private sink(k : number): void {
    const n = this.heap.length;
    while (2 * k < n) {
      let j = 2 * k;
      if (j < n && this.compare(j, j + 1)) j++;
      if (!this.compare(k, j)) break;
      this.exchange(k, j);
      k = j;
    }
  }
  private exchange(i: number, j: number) : void {
    const temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }
  insert(k: Key): void {
    this.heap.push(k);
    this.swim(this.heap.length - 1);
  }
  popQ(): Key {
    const max = this.heap[0];
    this.exchange(0, this.heap.length - 1);
    this.heap.pop();
    this.sink(0);
    return max;
  }
  isEmpty(): boolean {
    return this.heap.length == 0;
  }
  size(): number {
    return this.heap.length;
  }
}
