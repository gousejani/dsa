import { ListNode } from "./listNode";

export class LinkedList<T> {
  head: ListNode<T> | null;
  length: number;
  constructor() {
    this.head = null;
    this.length = 0;
  }

  // PushFront(Key) add to front
  pushFront(val: T) {
    let n = new ListNode<T>(val);
    n.next = this.head;
    this.head = n;
    this.length++;
  }

  // Key TopFront() return front item
  topFront(): T | null {
    if (this.head) {
      return this.head.value;
    }

    return null;
  }

  // PopFront() remove front item
  popFront(): T | null {
    this.length--;
    let n = this.head;
    if (n) {
      this.head = n.next;
      return n.value;
    }

    return null;
  }

  // PushBack(Key) add to back
  pushBack(val: T) {
    this.length++;
    let n = new ListNode<T>(val);

    if (!this.head) {
      this.head = n;
      return;
    }

    let curr = this.head;

    while (curr?.next) {
      curr = curr.next;
    }

    curr.next = n;
  }

  // Key TopBack() return back item

  topBack(): T | null {
    if (!this.head) {
      return null;
    }

    let curr = this.head;

    while (curr?.next) {
      curr = curr.next;
    }

    return curr.value;
  }

  // PopBack() remove back item
  popBack(): T | null {
    this.length--;
    if (!this.head) {
      return null;
    }

    let prev = null;
    let curr = this.head;

    while (curr?.next) {
      prev = curr;
      curr = curr.next;
    }

    if (!prev) {
      this.head = null;
    } else {
      prev.next = null;
    }
    return curr.value;
  }

  // Boolean Find(Key) is key in list?
  find(val: T): boolean {
    let curr = this.head;
    let found = false;
    while (curr) {
      if (curr.value == val) {
        found = true;
        break;
      }
      curr = curr.next;
    }

    return found;
  }

  // Erase(Key) remove key from list
  erase(val: T) {
    let prev = null;
    let curr = this.head;
    let found = false;
    while (curr) {
      if (curr.value == val) {
        found = true;
        break;
      }
      prev = curr;
      curr = curr.next;
    }

    if (!found) return;

    this.length--;
    if (!prev) {
      this.head = curr!.next;
    } else {
      prev.next = curr!.next;
    }
  }

  // Boolean Empty() empty list?

  empty(): boolean {
    if (this.head) {
      return false;
    }

    return true;
  }

  // AddBefore(Node, Key) adds key before node
  addBefore(n: ListNode<T>, val: T) {
    let prev = null;
    let curr = this.head;
    do {
      if (curr == n) {
        break;
      }
      prev = curr;
      curr = curr!.next;
    } while (curr);

    let newN = new ListNode<T>(val, n);
    if (!prev) {
      this.head = newN;
    } else {
      prev.next = newN;
    }

    this.length++;
  }

  // AddAfter(Node, Key) adds key after node

  addAfter(n: ListNode<T>, val: T) {
    let newNode = new ListNode<T>(val, n.next?.next || null);
    n.next = newNode;
    this.length++;
  }

  // get(index) return value at node idx;
  get(idx: number): T | null {
    let curr = this.head;
    let i = 0;
    while (i < idx && curr) {
      curr = curr.next;
      i++;
    }
    if (curr) return curr.value;
    return null;
  }
}
