import { MaxHeap } from "./maxHeap";

export function heapSort(arr: number[]): number[] {
  const h = new MaxHeap(arr.length);
  for (let el of arr) {
    h.insert(el);
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    arr[i] = h.extractMax() as number;
  }

  return arr;
}

export function heapSortDesc(arr: number[]): number[] {
  const h = new MaxHeap(arr.length);
  for (let el of arr) {
    h.insert(el);
  }

  for (let i = 0; i < arr.length; i++) {
    arr[i] = h.extractMax() as number;
  }

  return arr;
}
