import { Trie } from "../trie";

describe("trie", function () {
  let trie: Trie;
  beforeEach(() => {
    trie = new Trie();
  });

  test("add and complete", () => {
    expect(trie).toBeInstanceOf(Trie);

    trie.add("boston");
    trie.add("bologna");

    expect(trie.complete("mi")).toEqual([]);
    expect(trie.complete("b").sort()).toEqual(["boston", "bologna"].sort());

    trie.add("milan");

    expect(trie.complete("m").sort()).toEqual(["milan"].sort());
    trie.add("madagascar");
    expect(trie.complete("m").sort()).toEqual(["milan", "madagascar"].sort());
    expect(trie.complete("ma").sort()).toEqual(["madagascar"].sort());
  });
});
