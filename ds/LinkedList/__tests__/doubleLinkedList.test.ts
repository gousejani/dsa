import { alphabets, arrayRange } from "../../../utils/helper";
import { DoublyLinkedList } from "../doubleLinkedList";

describe("DoublyLinkedList", function () {
  let list: DoublyLinkedList<String>;

  beforeEach(() => {
    list = new DoublyLinkedList<String>();
  });

  test("constructor", () => {
    expect(list).toEqual(expect.any(DoublyLinkedList<String>));
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

  test("listFront listBack", () => {
    const ll = new DoublyLinkedList<number>();
    ll.pushBack(0);
    expect(ll.listFront()).toEqual([0]);
    expect(ll.listBack()).toEqual([0]);
    ll.pushFront(1);
    expect(ll.listFront()).toEqual([1, 0]);
    expect(ll.listBack()).toEqual([0, 1]);
    ll.pushFront(2);
    expect(ll.listFront()).toEqual([2, 1, 0]);
    expect(ll.listBack()).toEqual([0, 1, 2]);
    ll.pushFront(3);
    expect(ll.listFront()).toEqual([3, 2, 1, 0]);
    expect(ll.listBack()).toEqual([0, 1, 2, 3]);
    ll.pushBack(4);
    expect(ll.listFront()).toEqual([3, 2, 1, 0, 4]);
    expect(ll.listBack()).toEqual([4, 0, 1, 2, 3]);
    expect(ll.popBack()).toEqual(4);
    expect(ll.listFront()).toEqual([3, 2, 1, 0]);
    expect(ll.listBack()).toEqual([0, 1, 2, 3]);
    expect(ll.popBack()).toEqual(0);
    expect(ll.listFront()).toEqual([3, 2, 1]);
    expect(ll.listBack()).toEqual([1, 2, 3]);
    expect(ll.popFront()).toEqual(3);
    expect(ll.listFront()).toEqual([2, 1]);
    expect(ll.listBack()).toEqual([1, 2]);

    expect(ll.topFront()).toEqual(2);
    expect(ll.topBack()).toEqual(1);

    ll.pushFront(0);
    ll.erase(2);

    expect(ll.listFront()).toEqual([0, 1]);
    expect(ll.listBack()).toEqual([1, 0]);

    ll.erase(0);
    expect(ll.listFront()).toEqual([1]);
    expect(ll.listBack()).toEqual([1]);
    expect(ll.length).toEqual(1);
  });
});
