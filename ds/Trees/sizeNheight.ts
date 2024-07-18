import { TreeNode } from "./treeNode";

export function size(root: TreeNode<any> | null): number {
  if (root == null) {
    return 0;
  }
  return 1 + size(root.left) + size(root.right);
}

export function height(root: TreeNode<any> | null): number {
  if (root == null) {
    return 0;
  }
  return 1 + Math.max(height(root.left), height(root.right));
}
