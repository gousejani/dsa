import { ListNode } from "../LinkedList/listNode";

export class Queue<T> {
  head: ListNode<T> | null;
  tail: ListNode<T> | null;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(val: T) {
    this.length++;
    let n = new ListNode(val);
    if (this.tail == null) {
      this.head = n;
    } else {
      this.tail.next = n;
    }

    this.tail = n;
  }

  peek(): T | null {
    if (this.head == null) {
      return null;
    }
    return this.head.value;
  }

  dequeue(): T | null {
    if (this.head == null) {
      return null;
    }
    const val = this.head.value;

    if (this.head.next == null) {
      this.tail = null;
    }
    this.head = this.head.next;
    this.length--;

    return val;
  }

  empty(): boolean {
    return this.length == 0;
  }

  getLength(): number {
    return this.length;
  }
}
