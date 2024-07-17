import { alphabets, arrayRange } from "../../../utils/helper";
import { LinkedList } from "../linkedList";

describe("LinkedList", function () {
  let list: LinkedList<String>;

  beforeEach(() => {
    list = new LinkedList<String>();
  });

  test("constructor", () => {
    expect(list).toEqual(expect.any(LinkedList<String>));
  });

  test("push", () => {
    alphabets(26).map((character) => list.pushFront(character));
    expect(list.length).toEqual(26);
    expect(list.get(25)).toEqual("a");
    alphabets(26).map((character) => list.pushBack(character));
    expect(list.get(26)).toEqual("a");
    expect(list.get(51)).toEqual("z");
  });

  test("pop", () => {
    alphabets(14).map((character) => list.pushBack(character));
    expect(list.length).toEqual(14);
    expect(list.popBack()).toEqual("n");
    arrayRange(5).map(() => list.popFront());
    expect(list.length).toEqual(8);
    expect(list.popFront()).toEqual("f");
  });

  test("get", () => {
    list.pushFront("one");
    expect(list.get(0)).toEqual("one");
    list.pushBack("two");
    expect(list.get(1)).toEqual("two");
    list.pushFront("three");
    expect(list.get(0)).toEqual("three");

    alphabets(26).map((character) => list.pushBack(character));
    expect(list.get(28)).toEqual("z");
    expect(list.get(0)).toEqual("three");
    list.popBack();
    expect(list.get(list.length - 1)).toEqual("y");
  });

  test("delete", () => {
    alphabets(26).map((character) => list.pushBack(character));
    list.erase("m");
    expect(list.length).toEqual(25);
    expect(list.get(13)).toEqual("o");
  });
});
