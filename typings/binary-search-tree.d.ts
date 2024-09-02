export interface IBinarySearchTree<K, V> {
  size(): number;
  get(key: K): V | null;
  put(key: K, value: V) : void;
  min(): K | null;
  max(): K | null;
  select(k: number);
  rank(node: K): int;
  deleteMin(): void;
  delete(key: K);
  getKeys(): Iterable<K>;
  keysInRange(low: K, high: K): Iterable<K>;
  isEmpty(): boolean;
}