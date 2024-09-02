import { IBinarySearchTree } from "../typings/binary-search-tree";
import { Queue } from "./queue";
class BSTNode<Key, Value> {
  key: Key;
  value: Value;
  left: BSTNode<Key, Value> | null;
  right: BSTNode<Key, Value> | null;
  n: number;
  constructor(key: Key, value: Value, n: number) {
    this.key = key; 
    this.value = value;
    this.n = n;
    this.left = null;
    this.right = null;
  }
}
export class BST<Key, Value> implements IBinarySearchTree<Key, Value> {
  private root: BSTNode<Key, Value> | null;
  private comparator: (a: Key, b: Key) => number;

  constructor(comparator: (a: Key, b: Key) => number) {
    this.comparator = comparator;
    this.root = null;
  }

  size(): number {
    return this.getSize(this.root);
  }
  getSize(node: BSTNode<Key, Value> | null): number {
    if (node === null) return 0;
    return node.n;
  }
  get(key: Key): Value | null {  
    return this.getValue(this.root, key);
  }
  getValue(x: BSTNode<Key, Value> | null, key: Key): Value | null {
    if (x === null) return null;
    let cmp: number = this.comparator(key, x.key);
    if (cmp < 0) return this.getValue(x.left, key);
    else if (cmp > 0) return this.getValue(x.right, key);
    return x.value;
  }
  put(key: Key, value: Value) : void{
    this.root = this.putNode(this.root, key, value);
  }
  private putNode(node: BSTNode<Key, Value> | null, key: Key, value: Value) : BSTNode<Key, Value> {
    if (node === null) return new BSTNode(key, value, 1);
    let cmp: number = this.comparator(key, node.key);
    if (cmp < 0) node.left = this.putNode(node.left, key, value);
    if (cmp > 0) node.right = this.putNode(node.right, key, value);
    else node.value = value;
    node.n = this.getSize(node.left) + this.getSize(node.right) + 1;
    return node;
  }
  min(): Key | null {
    if (this.isEmpty()) return null;
    const x: BSTNode<Key, Value> = this.getMin(this.root!);
    return x.key;
  }
  private getMin(x: BSTNode<Key, Value>): BSTNode<Key, Value> {
    if (x.left === null) return x;
    return this.getMin(x.left);
  } 
  max(): Key | null {
    if (this.isEmpty()) return null;
    const x: BSTNode<Key, Value> = this.getMax(this.root!);
    return x.key;
  }
  private getMax(x: BSTNode<Key, Value>): BSTNode<Key, Value> {
    if (x.right === null) return x;
    return this.getMax(x.right);
  }
  select(k: number): Key {
    if (k < 0 || k >= this.size()) throw new Error("Invalid k value");
    const x: BSTNode<Key, Value> | null = this.getSelect(this.root, k);
    return x!.key;
  }
  private getSelect(x: BSTNode<Key, Value> | null, k: number): BSTNode<Key, Value> | null {
    if (x === null) return null;
    let t = this.getSize(x.left);
    if (t > k) return this.getSelect(x.left, k);
    if (t < k) return this.getSelect(x.right, k - t - 1);
    else return x;

  }
  rank(node: Key): number {
    return this.getRank(node, this.root);
  }
  private getRank(key: Key, node: BSTNode<Key, Value> | null): number {
    if (node === null) return 0;
    let cmp = this.comparator(key, node.key);
    if (cmp < 0) return this.getRank(key, node.left);
    else if (cmp > 0) return 1 + this.getSize(node.left) + this.getRank(key, node.right);
    else return this.getSize(node.left);
  }
  deleteMin(): void {
    if (this.isEmpty()) return;
    this.root = this.getDeleteMin(this.root);
  }

  private getDeleteMin(x: BSTNode<Key, Value> | null): BSTNode<Key, Value> | null {
    if (x?.left === null) return x.right;
    x!.left = this.getDeleteMin(x!.left);
    x!.n = this.getSize(x!.left) + this.getSize(x!.right) + 1;
    return x;
  }

  delete(key: Key) {
    this.root = this.getDelete(this.root, key);
  }

  private getDelete(x: BSTNode<Key, Value>| null, key: Key) : BSTNode<Key, Value> | null {
    if (x === null) return null;
    let cmp = this.comparator(key, x.key);
    if (cmp < 0) x.left = this.getDelete(x.left, key);
    if (cmp > 0) x.right = this.getDelete(x.right, key);
    else {
      if (x.right === null) return x.left;
      if (x.left === null) return x.right;
      const temp = x;
      x = this.getMin(temp.right!);
      x.right = this.getDeleteMin(temp.right);
      x.left = temp.left;
    }
    x.n = this.getSize(x.left) + this.getSize(x.right) + 1;
    return x;
  }
  
  /**
   * TODO:
   */
  getKeys(): Iterable<Key> {
    return this.keysInRange(this.min()!, this.max()!);
  }

  keysInRange(low: Key, high: Key): Iterable<Key> {
    const queue = new Queue<Key>();
    this.getAllKeys(this.root, queue, low, high);
    return queue;
  }


  private getAllKeys(x: BSTNode<Key, Value> | null, queue: Queue<Key>, low: Key, high: Key) {
    if (x === null) return;
    let cmplow = this.comparator(low, high);
    let cmphigh = this.comparator(high, low);
    if (cmplow < 0) this.getAllKeys(x.left, queue, low, high);
    if (cmplow <= 0 && cmphigh >= 0) queue.enqueue(x.key);
    if (cmphigh > 0) this.getAllKeys(x.right, queue, low, high); 
  }

  isEmpty(): boolean {
    return this.root == null;
  }

}

// const bst = new BST<string, number>((a, b) => a.localeCompare(b));
// const values = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
// for (let i = 0; i < 7; i++) {
//   bst.put(values[i], i);
// }

// const queue = bst.getKeys();
// for (let key of queue) {
//   console.log(key);
// }
