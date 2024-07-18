import { ListNode } from "../LinkedList/listNode";

export class Stack<T> {
  head: ListNode<T> | null;
  length: number;

  constructor() {
    this.head = null;
    this.length = 0;
  }

  push(val: T) {
    this.length++;
    const n = new ListNode(val);
    if (this.head) {
      n.next = this.head;
    }
    this.head = n;
  }

  pop(): T | null {
    if (this.head === null) {
      return null;
    }
    this.length--;
    const val = this.head.value;
    this.head = this.head.next;
    return val;
  }

  top(): T | null {
    if (this.head === null) {
      return null;
    }

    return this.head.value;
  }

  getLength(): number {
    return this.length;
  }

  empty(): boolean {
    return this.length == 0;
  }
}
