import { MaxHeap } from "../maxHeap";

describe("MaxHeap", function () {
  let h: MaxHeap;

  beforeEach(() => {
    h = new MaxHeap(10);
  });

  test("constructor", () => {
    expect(h).toEqual(expect.any(MaxHeap));
    expect(h.size).toEqual(0);
    expect(h.maxSize).toEqual(10);
  });

  test("insert and extract", () => {
    h.insert(4);
    h.insert(13);
    h.insert(5);

    expect(h.size).toEqual(3);
    expect(h.extractMax()).toEqual(13);
    expect(h.size).toEqual(2);
    expect(h.extractMax()).toEqual(5);
    expect(h.size).toEqual(1);

    h.insert(3);
    h.insert(9);

    expect(h.extractMax()).toEqual(9);
    expect(h.extractMax()).toEqual(4);
    expect(h.size).toEqual(1);
  });

  test("delete and change priority", () => {
    h.insert(4);
    h.insert(13);
    h.insert(5);
    h.delete(2);

    expect(h.size).toEqual(2);
    expect(h.extractMax()).toEqual(13);
    expect(h.extractMax()).toEqual(4);
    expect(h.size).toEqual(0);

    h.insert(4);
    h.insert(13);
    h.changePriority(0, 1);

    expect(h.extractMax()).toEqual(4);

    h.insert(12);
    h.insert(5);
    h.changePriority(1, 100);

    expect(h.extractMax()).toEqual(100);
  });

  test("parent and child", () => {
    const h = new MaxHeap(3);

    h.insert(1);
    expect(h.getParent(0)).toEqual(null);
    expect(h.getLeftChild(0)).toEqual(null);
    expect(h.getRightChild(0)).toEqual(null);
    h.insert(2);
    expect(h.getLeftChild(0)).toEqual(1);
    expect(h.getRightChild(0)).toEqual(null);
  });
});
