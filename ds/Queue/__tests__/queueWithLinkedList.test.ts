import { Queue } from "../queueWithLinkedList";

describe("Queue", function () {
  let q: Queue<number>;

  beforeEach(() => {
    q = new Queue<number>();
  });

  test("constructor", () => {
    expect(q).toEqual(expect.any(Queue<number>));
    expect(q.empty()).toBeTruthy();
  });

  test("enqueue", () => {
    q.enqueue(0);
    expect(q.empty()).toBeFalsy();
    expect(q.getLength()).toEqual(1);
    q.enqueue(1);
    expect(q.getLength()).toEqual(2);
    expect(q.peek()).toEqual(0);
  });

  test("dequeue", () => {
    q.enqueue(0);
    expect(q.empty()).toBeFalsy();
    expect(q.getLength()).toEqual(1);
    q.enqueue(1);
    expect(q.getLength()).toEqual(2);
    expect(q.dequeue()).toEqual(0);
    expect(q.getLength()).toEqual(1);
    q.enqueue(2);
    expect(q.dequeue()).toEqual(1);
    expect(q.getLength()).toEqual(1);
    expect(q.dequeue()).toEqual(2);
    expect(q.dequeue()).toEqual(null);
    expect(q.empty()).toBeTruthy();
  });

  test("peek", () => {
    q.enqueue(0);
    expect(q.peek()).toEqual(0);
    q.enqueue(1);
    expect(q.peek()).toEqual(0);
    expect(q.dequeue()).toEqual(0);
    expect(q.peek()).toEqual(1);
    q.enqueue(2);
    expect(q.dequeue()).toEqual(1);
    expect(q.dequeue()).toEqual(2);
    expect(q.peek()).toEqual(null);
  });
});
