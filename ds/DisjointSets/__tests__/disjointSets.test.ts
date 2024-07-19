import { DisjointSets } from "../disjointSets";

describe("DisjointSets", function () {
  let ds: DisjointSets<string>;

  beforeEach(() => {
    ds = new DisjointSets<string>(["a", "b", "c", "d"]);
  });

  test("constructor", () => {
    expect(ds).toEqual(expect.any(DisjointSets));
  });

  test("makeset", () => {
    expect(ds.find("a")).not.toEqual(ds.find("b"));
    expect(ds.find("d")).not.toEqual(ds.find("b"));
    expect(ds.find("c")).not.toEqual(ds.find("b"));
  });

  test("union", () => {
    ds.union("a", "b");
    ds.union("c", "d");
    expect(ds.find("a")).toEqual(ds.find("b"));
    expect(ds.find("c")).toEqual(ds.find("d"));
    expect(ds.find("c")).not.toEqual(ds.find("b"));
    expect(ds.find("a")).not.toEqual(ds.find("d"));
  });

  test("union and rank", () => {
    const ds = new DisjointSets<number>([1, 2, 3, 4, 5, 6]);
    ds.union(2, 4);
    expect(ds.find(2)).toEqual(ds.find(4));
    ds.union(2, 5);

    ds.union(3, 1);
    ds.union(2, 3);
    ds.union(2, 6);

    expect(ds.rank[ds.find(2) as number]).toBe(2);
  });
});
