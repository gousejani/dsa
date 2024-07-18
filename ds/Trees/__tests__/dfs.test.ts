import {
  inOrderTraversal,
  postOrderTraversal,
  preOrderTraversal,
} from "../dfs";
import { convertToTree } from "../helper";
import { TreeNode } from "../treeNode";

describe("dfs", function () {
  let root: TreeNode<string> | null;
  beforeEach(() => {
    root = convertToTree(
      [1, 2, 3, 4, 5, 6, 7, null, null, 8, 9, null, null, null, 10],
      0
    );
  });

  test("preOrder", () => {
    expect(preOrderTraversal(root)).toEqual([1, 2, 4, 5, 8, 9, 3, 6, 7, 10]);
  });

  test("postOrder", () => {
    expect(postOrderTraversal(root)).toEqual([4, 8, 9, 5, 2, 6, 10, 7, 3, 1]);
  });

  test("inOrder", () => {
    expect(inOrderTraversal(root)).toEqual([4, 2, 8, 5, 9, 1, 6, 3, 7, 10]);
  });
});
