import { bfs } from "../bfs";
import { convertToTree } from "../helper";
import { TreeNode } from "../treeNode";

describe("bfs", function () {
  let root: TreeNode<string> | null;
  beforeEach(() => {
    root = convertToTree(
      [1, 2, 3, 4, 5, 6, 7, null, null, 8, 9, null, null, null, 10],
      0
    );
  });

  test("bfs", () => {
    expect(bfs(root)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});
