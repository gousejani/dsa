export class MaxHeap {
  maxSize: number;
  size: number;
  heapArray: Array<number>;

  constructor(maxSize: number) {
    this.maxSize = maxSize;
    this.size = 0;
    this.heapArray = new Array(maxSize);
  }

  siftUp(idx: number) {
    let parent = this.getParent(idx);
    while (parent !== null) {
      if (this.heapArray[parent] < this.heapArray[idx]) {
        this.swap(parent, idx);
      } else {
        break;
      }
      idx = parent;
      parent = this.getParent(idx);
    }
  }

  siftDown(idx: number) {
    let maxIdx = idx;
    let leftIdx = this.getLeftChild(idx);
    if (leftIdx !== null) {
      if (this.heapArray[leftIdx] > this.heapArray[maxIdx]) {
        maxIdx = leftIdx;
      }
    }

    let rightIdx = this.getRightChild(idx);
    if (rightIdx !== null) {
      if (this.heapArray[rightIdx] > this.heapArray[maxIdx]) {
        maxIdx = rightIdx;
      }
    }

    if (maxIdx !== idx) {
      this.swap(idx, maxIdx);
      this.siftDown(maxIdx);
    }
  }

  swap(i: number, j: number) {
    let temp = this.heapArray[i];
    this.heapArray[i] = this.heapArray[j];
    this.heapArray[j] = temp;
  }

  insert(val: number) {
    if (this.size === this.maxSize) {
      return; // Error
    }
    this.heapArray[this.size] = val;
    this.siftUp(this.size);
    this.size++;
  }

  delete(idx: number) {
    this.heapArray[idx] = Infinity;
    this.siftUp(idx);
    this.extractMax();
  }

  changePriority(idx: number, newPriority: number) {
    let oldPriority = this.heapArray[idx];
    this.heapArray[idx] = newPriority;
    if (newPriority > oldPriority) {
      this.siftUp(idx);
    } else {
      this.siftDown(idx);
    }
  }

  extractMax(): number | null {
    if (this.size == 0) return null;
    const maxVal = this.heapArray[0];
    this.swap(0, this.size - 1);
    this.size--;
    this.siftDown(0);

    return maxVal;
  }

  getParent(idx: number): number | null {
    let parent = Math.floor((idx - 1) / 2);
    return parent < 0 ? null : parent;
  }

  getLeftChild(idx: number): number | null {
    let left = Math.floor(2 * idx + 1);
    if (left > this.size - 1 || left > this.maxSize - 1) {
      return null;
    }

    return left;
  }

  getRightChild(idx: number): number | null {
    let right = Math.floor(2 * idx + 2);
    if (right > this.size - 1 || right > this.maxSize - 1) {
      return null;
    }

    return right;
  }
}
