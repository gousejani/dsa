import { HeapSort } from "../heapSortInPlace";

describe("heapSortInPlace", function () {
  test("sort", () => {
    expect(new HeapSort([3, 4, 1, 2]).sort()).toEqual([1, 2, 3, 4]);
    expect(new HeapSort([3, 4, 4, 1, 1, 2]).sort()).toEqual([1, 1, 2, 3, 4, 4]);
  });
});
