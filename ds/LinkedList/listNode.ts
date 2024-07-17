export class ListNode<T> {
  value: T;
  next: ListNode<T> | null = null;
  prev: ListNode<T> | null = null;

  constructor(val: T, next?: ListNode<T> | null, prev?: ListNode<T> | null) {
    this.value = val;
    if (next) this.next = next;
    if (prev) this.prev = prev;
  }
}
