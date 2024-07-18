import { ListNode } from "./listNode";

export class DoublyLinkedList<T> {
  head: ListNode<T> | null;
  tail: ListNode<T> | null;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // PushFront(Key) add to front
  pushFront(val: T) {
    let n = new ListNode<T>(val);
    if (this.head) {
      n.next = this.head;
      this.head.prev = n;
    }

    this.head = n;

    if (!this.tail) {
      this.tail = this.head;
    }
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
      if (!this.head) {
        this.tail = null;
      } else {
        this.head.prev = null;
      }
      return n.value;
    }

    return null;
  }

  // PushBack(Key) add to back
  pushBack(val: T) {
    this.length++;
    let n = new ListNode<T>(val);
    if (!this.tail) {
      this.head = n;
      this.tail = n;
      return;
    }

    this.tail.next = n;
    n.prev = this.tail;
    this.tail = n;
  }

  // Key TopBack() return back item

  topBack(): T | null {
    if (this.tail) {
      return this.tail.value;
    }

    return null;
  }

  // PopBack() remove back item
  popBack(): T | null {
    this.length--;
    if (!this.tail) {
      return null;
    }

    let val = this.tail.value;

    if (!this.tail.prev) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }

    return val;
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
    let curr = this.head;

    while (curr) {
      if (curr && curr.value == val) {
        break;
      }
      curr = curr.next;
    }

    if (!curr) return;

    this.length--;

    if (curr.prev && curr.next) {
      curr.prev.next = curr.next;
      curr.next.prev = curr.prev;
    } else if (!curr.prev) {
      // removing head
      this.head = curr.next;
      if (this.head) {
        this.head.prev = null;
      }
    } else if (!curr.next) {
      // removing tail
      curr.prev.next = null;
      this.tail = curr.prev;
    }
  }

  // Boolean Empty() empty list?

  empty(): boolean {
    if (this.head) {
      return false;
    }

    return true;
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

  // AddBefore(Node, Key) adds key before node
  // TODO

  // AddAfter(Node, Key) adds key after node
  // TODO

  listFront(): Array<T> {
    let out = [];
    let curr = this.head;
    while (curr) {
      out.push(curr.value);
      curr = curr.next;
    }

    return out;
  }

  listBack(): Array<T> {
    let out = [];
    let curr = this.tail;
    while (curr) {
      out.push(curr.value);
      curr = curr.prev;
    }

    return out;
  }
}
