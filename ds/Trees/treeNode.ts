export class TreeNode<T> {
  value: T;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;
  constructor(val: T, left?: TreeNode<T> | null, right?: TreeNode<T> | null) {
    this.value = val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
