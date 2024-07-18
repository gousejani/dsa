import { heapSort, heapSortDesc } from "../heapSort";

describe("heapSort", function () {
  test("sort asc", () => {
    expect(heapSort([3, 4, 1, 2])).toEqual([1, 2, 3, 4]);
    expect(heapSort([3, 4, 4, 1, 1, 2])).toEqual([1, 1, 2, 3, 4, 4]);
  });

  test("sort desc", () => {
    expect(heapSortDesc([3, 4, 1, 2])).toEqual([4, 3, 2, 1]);
    expect(heapSortDesc([3, 4, 4, 1, 1, 2])).toEqual([4, 4, 3, 2, 1, 1]);
  });
});
