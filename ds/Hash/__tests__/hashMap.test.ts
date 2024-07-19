import { HashMap } from "../hashMap";

describe("HashMap", function () {
  let map: HashMap;

  beforeEach(() => {
    map = new HashMap(2);
  });

  test("constructor", () => {
    expect(map).toEqual(expect.any(HashMap));
  });

  test("set get has", () => {
    expect(map.has("abc")).toBeFalsy();
    expect(map.size).toEqual(0);

    map.set("abc", 1);
    expect(map.size).toEqual(1);
    expect(map.has("abc")).toBeTruthy();
    expect(map.get("abc")).toEqual(1);
    expect(map.get("def")).toEqual(null);

    map.set("def", 2);
    map.set("ghi", 3);
    expect(map.size).toEqual(3);
    expect(map.get("def")).toEqual(2);
    expect(map.get("ghi")).toEqual(3);

    map.delete("ghi");
    expect(map.size).toEqual(2);
    expect(map.get("ghi")).toEqual(null);

    map.set("def", 3);
    expect(map.get("def")).toEqual(3);

    map.set("jkl", 5);
    map.set("mno", 6);
    map.set("pqr", 7);

    expect(map.has("jkl")).toBeTruthy();
    expect(map.has("mno")).toBeTruthy();
    expect(map.has("pqr")).toBeTruthy();

    expect(map.size).toEqual(5);
  });
});
