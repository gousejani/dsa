import { Stack } from "../stackWithLinkedList";

describe("Stack", function () {
  let s: Stack<number>;

  beforeEach(() => {
    s = new Stack<number>();
  });

  test("constructor", () => {
    expect(s).toEqual(expect.any(Stack<number>));
    expect(s.empty()).toBeTruthy();
  });

  test("push", () => {
    s.push(0);
    expect(s.empty()).toBeFalsy();
    expect(s.getLength()).toEqual(1);
    s.push(1);
    expect(s.getLength()).toEqual(2);
    expect(s.top()).toEqual(1);
  });

  test("pop", () => {
    s.push(0);
    s.push(1);
    expect(s.pop()).toEqual(1);
    s.push(2);
    expect(s.pop()).toEqual(2);
    expect(s.pop()).toEqual(0);
  });

  test("top", () => {
    s.push(0);
    s.push(1);
    expect(s.top()).toEqual(1);
    s.push(2);
    expect(s.top()).toEqual(2);
    s.pop();
    s.pop();
    expect(s.top()).toEqual(0);
  });
});
