import { TreeNode } from "./treeNode";

export function inOrderTraversal(root: TreeNode<any> | null) {
  let out: Array<any> = [];
  inOrder(root);

  function inOrder(root: TreeNode<any> | null) {
    if (root === null) {
      return;
    }
    inOrder(root.left);
    out.push(root.value);
    inOrder(root.right);
  }

  return out;
}

export function preOrderTraversal(root: TreeNode<any> | null) {
  let out: Array<any> = [];
  preOrder(root);

  function preOrder(root: TreeNode<any> | null) {
    if (root === null) {
      return;
    }
    out.push(root.value);
    preOrder(root.left);
    preOrder(root.right);
  }

  return out;
}

export function postOrderTraversal(root: TreeNode<any> | null) {
  let out: Array<any> = [];
  postOrder(root);

  function postOrder(root: TreeNode<any> | null) {
    if (root === null) {
      return;
    }
    postOrder(root.left);
    postOrder(root.right);
    out.push(root.value);
  }

  return out;
}
