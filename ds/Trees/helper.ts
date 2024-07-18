import { TreeNode } from "./treeNode";

export function convertToTree(arr: any[], idx: number | null) {
  if (idx == null) return null;
  if (arr[idx] == null) return null;

  let n = new TreeNode(arr[idx]);

  n.left = convertToTree(arr, getLeftChild(idx));
  n.right = convertToTree(arr, getRightChild(idx));

  return n;

  function getLeftChild(i: number) {
    const left = 2 * i + 1;
    return left < arr.length ? left : null;
  }

  function getRightChild(i: number) {
    const right = 2 * i + 2;
    return right < arr.length ? right : null;
  }
}
