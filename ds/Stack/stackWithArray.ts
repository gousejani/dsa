export class Stack<T> {
  s: Array<T>;
  length: number;

  constructor() {
    this.s = [];
    this.length = 0;
  }

  push(val: T) {
    this.length++;
    this.s.push(val);
  }

  pop(): T | null {
    if (this.length == 0) {
      return null;
    }
    this.length--;
    return this.s.pop() as T;
  }

  top(): T | null {
    if (this.length == 0) {
      return null;
    }
    return this.s[this.length - 1];
  }

  getLength(): number {
    return this.length;
  }

  empty(): boolean {
    return this.length == 0;
  }
}
