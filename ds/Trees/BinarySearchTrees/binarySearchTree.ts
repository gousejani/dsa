import { TreeNode } from "../treeNode";

export class BinarySearchTree {
  root: TreeNode<number> | null;

  constructor(arr: number[]) {
    this.root = this.convertToTree(arr, 0);
  }

  size(root = this.root): number {
    if (root == null) return 0;
    return 1 + this.size(root.left) + this.size(root.right);
  }

  find(val: number, root = this.root): TreeNode<number> | null {
    if (!root) return null;
    if (root.value == val) return root;
    else if (val < root.value) {
      return this.find(val, root.left);
    } else {
      return this.find(val, root.right);
    }
  }

  findInsert(
    val: number,
    root = this.root as TreeNode<number>
  ): TreeNode<number> {
    if (root.value == val) return root;
    else if (val < root.value) {
      if (root.left == null) {
        return root;
      }
      return this.findInsert(val, root.left);
    } else {
      if (root.right == null) {
        return root;
      }
      return this.findInsert(val, root.right as TreeNode<number>);
    }
  }

  insert(val: number) {
    const n = this.findInsert(val);
    const node = new TreeNode(val);
    node.parent = n;
    if (n.left === null) {
      n.left = node;
    } else {
      n.right = node;
    }
  }

  deleteNode(nodeToDelete: TreeNode<number>) {
    if (nodeToDelete.parent) {
      if (nodeToDelete.parent.value > nodeToDelete.value) {
        nodeToDelete.parent.left = null;
      } else {
        nodeToDelete.parent.right = null;
      }
    } else {
      this.root = null;
    }
  }

  deleteNodeAndPromoteLeft(nodeToDelete: TreeNode<number>) {
    if (nodeToDelete.parent) {
      if (nodeToDelete.parent.value > nodeToDelete.value) {
        nodeToDelete.parent.left = nodeToDelete.left;
      } else {
        nodeToDelete.parent.right = nodeToDelete.left;
      }
      nodeToDelete.left!.parent = nodeToDelete.parent;
    } else {
      this.root = nodeToDelete.left;
      nodeToDelete.left!.parent = undefined;
    }
  }

  delete(val: number) {
    let nodeToDelete = this.find(val);
    if (nodeToDelete === null) {
      return;
    }

    if (nodeToDelete.right === null && nodeToDelete.left === null) {
      //removeNode
      this.deleteNode(nodeToDelete);
    } else if (nodeToDelete.right === null && nodeToDelete.left) {
      // remove node and promote left;
      this.deleteNodeAndPromoteLeft(nodeToDelete);
    } else {
      let nextNode = this.next(nodeToDelete);
      if (nextNode!.parent!.value > nextNode!.value) {
        nextNode!.parent!.left = null;
      } else {
        nextNode!.parent!.right = null;
      }

      nodeToDelete.value = nextNode!.value;
    }
  }

  next(curr: TreeNode<number>) {
    if (curr.right) {
      return this.leftDescendent(curr.right);
    } else {
      return this.rightAncestor(curr);
    }
  }

  range(x: number, y: number) {
    let out = [];
    let el = this.findInsert(x);
    while (el) {
      if (el.value >= x && el.value <= y) {
        out.push(el.value);
      }
      el = this.next(el) as any;
    }
    return out;
  }

  leftDescendent(curr: TreeNode<number>) {
    while (curr.left) {
      curr = curr.left;
    }

    return curr;
  }

  rightDescendent(curr: TreeNode<number>) {
    while (curr.right) {
      curr = curr.right;
    }

    return curr;
  }

  rightAncestor(curr: TreeNode<number>): TreeNode<number> | null {
    let parent = curr.parent;
    if (!parent) return null;
    if (parent.value > curr.value) {
      return parent;
    }
    curr = parent;
    return this.rightAncestor(curr);
  }

  leftAncestor(curr: TreeNode<number>) {
    let parent = curr.parent;
    if (!parent) return null;
    if (parent.value < curr.value) {
      return parent;
    }
    curr = parent;
  }

  convertToTree(arr: any[], idx: number | null, parent?: TreeNode<any>) {
    if (idx == null) return null;
    if (arr[idx] == null) return null;

    let n = new TreeNode(arr[idx]);
    if (parent) n.parent = parent;

    n.left = this.convertToTree(arr, getLeftChild(idx), n);
    n.right = this.convertToTree(arr, getRightChild(idx), n);

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
}

// const bst = new BinarySearchTree([13, 11, 18, 10, 12, 16, 19])

// bst.leftDescendent(bst.root as any);
// bst.rightDescendent(bst.root as any);
// bst.findInsert(17);
// console.log(bst.rightAncestor(bst.findInsert(19)));
