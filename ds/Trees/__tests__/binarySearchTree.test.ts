import { BinarySearchTree } from "../BinarySearchTrees/binarySearchTree";
import { TreeNode } from "../treeNode";

function isBST(root: TreeNode<any> | null): boolean {
  if (root == null) return true;
  if (root.left && root.left.value > root.value) return false;
  if (root.right && root.right.value < root.value) return false;
  return isBST(root.left) && isBST(root.right);
}

describe("dfs", function () {
  let bst: BinarySearchTree;
  beforeEach(() => {
    bst = new BinarySearchTree([13, 11, 18, 10, 12, 16, 19]);
  });

  test("find", () => {
    expect(bst.find(13)).toEqual(expect.any(TreeNode));
    expect(bst.find(16)).toEqual(expect.any(TreeNode));
    expect(bst.find(7)).toEqual(null);
  });

  test("findInsert", () => {
    expect(bst.findInsert(13).value).toEqual(13);
    expect(bst.findInsert(7).value).toEqual(10);
    expect(bst.findInsert(15).value).toEqual(16);
    expect(bst.findInsert(17).value).toEqual(16);
  });

  test("next element", () => {
    expect(bst.next(bst.find(10)!)).toEqual(expect.any(TreeNode));
    expect(bst.next(bst.find(10)!)!.value).toEqual(11);
    expect(bst.next(bst.find(12)!)!.value).toEqual(13);
    expect(bst.next(bst.find(13)!)!.value).toEqual(16);
    expect(bst.next(bst.find(19)!)).toEqual(null);
  });

  test("range of elements", () => {
    expect(bst.range(11, 17)).toEqual([11, 12, 13, 16]);
  });

  test("insert", () => {
    bst.insert(7);
    expect(bst.find(7)).toEqual(expect.any(TreeNode));
    expect(bst.find(7)!.value).toEqual(7);
  });

  test("delete", () => {
    expect(bst.size()).toEqual(7);
    bst.delete(12);
    expect(isBST(bst.root)).toBeTruthy();
    expect(bst.size()).toEqual(6);
    expect(bst.find(11)!.right).toEqual(null);

    bst.delete(13);
    expect(isBST(bst.root)).toBeTruthy();
    expect(bst.size()).toEqual(5);
    expect(bst.root!.value).toEqual(16);
    expect(bst.find(18)!.left).toEqual(null);

    bst.delete(11);
    expect(isBST(bst.root)).toBeTruthy();
    expect(bst.size()).toEqual(4);
    expect(bst.root!.left!.value).toEqual(10);

    bst.delete(18);
    expect(isBST(bst.root)).toBeTruthy();
    expect(bst.size()).toEqual(3);
    bst.delete(16);
    expect(isBST(bst.root)).toBeTruthy();
    expect(bst.size()).toEqual(2);
    expect(bst.root!.value).toEqual(19);

    bst.delete(19);
    expect(isBST(bst.root)).toBeTruthy();
    expect(bst.size()).toEqual(1);
    expect(bst.root!.value).toEqual(10);

    bst.delete(10);
    expect(isBST(bst.root)).toBeTruthy();
    expect(bst.size()).toEqual(0);
    expect(bst.root).toEqual(null);
  });

  test("rotateRight", () => {
    const bst = new BinarySearchTree([
      13,
      7,
      15,
      5,
      9,
      14,
      null,
      3,
      6,
      null,
      null,
      null,
      null,
      null,
      null,
      1,
    ]);
    expect(bst.height()).toEqual(5);
    bst.rotateRight(bst.find(7)!);
    expect(isBST(bst.root)).toBeTruthy();
    expect(bst.height()).toEqual(4);
  });
});
