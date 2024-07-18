import { convertToTree } from "../helper";
import { height, size } from "../sizeNheight";
import { TreeNode } from "../treeNode";

describe("size and height", function () {
  let root: TreeNode<string> | null;
  beforeEach(() => {
    root = convertToTree(
      [1, 2, 3, 4, 5, 6, 7, 8, null, 9, null, null, null, null, null, 10],
      0
    );
  });

  test("size", () => {
    expect(size(root)).toEqual(10);
  });

  test("height", () => {
    expect(height(root)).toEqual(5);
  });
});
