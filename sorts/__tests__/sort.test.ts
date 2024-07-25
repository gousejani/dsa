import { bubbleSort } from "../bubbleSort";
import { insertionSort } from "../insertionSort";
import { mergeSort } from "../mergeSort";
import { quickSort } from "../quickSort";

describe("sort test", () => {
  it("bubble sort", () => {
    expect(bubbleSort([3, 4, 2, 1])).toEqual([1, 2, 3, 4]);
    expect(bubbleSort([])).toEqual([]);
    expect(bubbleSort([0, -3, -1, 6, 8, -Infinity, Infinity, 5])).toEqual([
      -Infinity,
      -3,
      -1,
      0,
      5,
      6,
      8,
      Infinity,
    ]);
  });

  it("insertion sort", () => {
    expect(insertionSort([3, 4, 2, 1])).toEqual([1, 2, 3, 4]);
    expect(insertionSort([])).toEqual([]);
    expect(insertionSort([1])).toEqual([1]);
    expect(insertionSort([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
    expect(insertionSort([0, -3, -1, 6, 8, -Infinity, Infinity, 5])).toEqual([
      -Infinity,
      -3,
      -1,
      0,
      5,
      6,
      8,
      Infinity,
    ]);
  });

  it("merge sort", () => {
    expect(mergeSort([3, 4, 2, 1])).toEqual([1, 2, 3, 4]);
    expect(mergeSort([])).toEqual([]);
    expect(mergeSort([3, 4, 2, 5, 1])).toEqual([1, 2, 3, 4, 5]);
    expect(mergeSort([1])).toEqual([1]);
    expect(mergeSort([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
    expect(mergeSort([0, -3, -1, 6, 8, -Infinity, Infinity, 5])).toEqual([
      -Infinity,
      -3,
      -1,
      0,
      5,
      6,
      8,
      Infinity,
    ]);
  });

  it("quick sort", () => {
    expect(quickSort([3, 4, 2, 1])).toEqual([1, 2, 3, 4]);
    expect(quickSort([])).toEqual([]);
    expect(quickSort([3, 4, 2, 5, 1])).toEqual([1, 2, 3, 4, 5]);
    expect(quickSort([1])).toEqual([1]);
    expect(quickSort([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
    expect(quickSort([0, -3, -1, 6, 8, -Infinity, Infinity, 5])).toEqual([
      -Infinity,
      -3,
      -1,
      0,
      5,
      6,
      8,
      Infinity,
    ]);
  });
});
