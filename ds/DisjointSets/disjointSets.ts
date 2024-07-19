export class DisjointSets<T> {
  parent: number[] = [];
  rank: number[] = [];
  elementMap = new Map<T, number>();

  constructor(arr: T[]) {
    for (let i = 0; i < arr.length; i++) {
      this.elementMap.set(arr[i], i);
      this.parent.push(i);
      this.rank.push(0);
    }
  }

  find(element: T): number | null {
    if (!this.elementMap.has(element)) {
      return null;
    }

    let i = this.elementMap.get(element) as number;

    while (i != this.parent[i]) {
      i = this.parent[i];
    }

    return i;
  }

  union(el1: T, el2: T) {
    let p1 = this.find(el1) as number;
    let p2 = this.find(el2) as number;
    let r1 = this.rank[p1];
    let r2 = this.rank[p2];

    if (r1 < r2) {
      this.parent[p1] = p2;
    } else {
      this.parent[p2] = p1;
      if (r1 == r2) {
        this.rank[p1]++;
      }
    }
  }
}
