import { Queue } from "../Queue/queueWithLinkedList";
import { TreeNode } from "./treeNode";

export function bfs(root: TreeNode<any> | null) {
  let out: any = [];
  if (root == null) {
    return out;
  }

  let queue = new Queue<TreeNode<any>>();
  queue.enqueue(root);

  while (queue.getLength() > 0) {
    let n = queue.dequeue() as TreeNode<any>;
    out.push(n.value);

    if (n.left) {
      queue.enqueue(n.left);
    }
    if (n.right) {
      queue.enqueue(n.right);
    }
  }

  return out;
}
