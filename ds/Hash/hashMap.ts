import { ListNode } from "../LinkedList/listNode";

export class HashMap {
  cardinality: number;
  hashTable: Array<ListNode<any> | null>;
  x = 31;
  p = 10000121;
  size: number;

  constructor(m: number) {
    this.cardinality = m;
    this.hashTable = new Array(m).fill(null);
    this.size = 0;
  }

  hash(key: string): number {
    let hash = 0;
    for (let i = key.length - 1; i >= 0; i--) {
      hash = (hash * this.x + key[i].charCodeAt(0)) % this.p;
    }
    return hash % this.cardinality;
  }

  _getKey(key: string): ListNode<any> | null {
    let node = null;
    let h = this.hash(key);
    if (this.hashTable[h] == null) {
      return node;
    }

    let curr = this.hashTable[h] as ListNode<any> | null;

    while (curr) {
      if (curr.value.key === key) {
        node = curr;
        break;
      }
      curr = curr.next;
    }

    return node;
  }

  has(key: string): boolean {
    return this._getKey(key) !== null;
  }

  get(key: string): any {
    let n = this._getKey(key);
    if (n === null) return null;
    else return n.value.value;
  }

  set(key: string, value: any) {
    let h = this.hash(key);

    let curr = this.hashTable[h];

    if (curr == null) {
      this.hashTable[h] = new ListNode<any>({ key, value });
      this.size++;
      return;
    }

    let node = null;
    let prev = null;
    while (curr) {
      if (curr.value.key === key) {
        node = curr;
        break;
      }
      prev = curr;
      curr = curr.next;
    }

    if (node !== null) {
      node.value.value = value;
      return;
    }

    this.size++;
    prev!.next = new ListNode<any>({ key, value });
  }

  delete(key: string) {
    let h = this.hash(key);
    let curr = this.hashTable[h];

    if (curr == null) {
      return;
    }

    let node = null;
    let prev = null;
    while (curr) {
      if (curr.value.key === key) {
        node = curr;
        break;
      }
      prev = curr;
      curr = curr.next;
    }

    if (node === null) {
      return;
    }

    this.size--;

    if (prev) {
      prev.next = node.next;
    } else {
      this.hashTable[h] = node.next;
    }
  }
}
