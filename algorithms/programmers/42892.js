function solution(nodeinfo) {
  const preorderList = [];
  const postorderList = [];

  class Node {
    constructor(value, x, y) {
      this.value = value;
      this.x = x;
      this.y = y;
      this.left = null;
      this.right = null;
    }
  }

  const insertNode = (parent, child) => {
    let direction = child.x < parent.x ? "left" : "right";

    if (!parent[direction]) {
      parent[direction] = child;
    } else {
      insertNode(parent[direction], child);
    }
  };

  const preorder = (node) => {
    if (!node) return;
    preorderList.push(node.value);
    preorder(node.left);
    preorder(node.right);
  };

  const postorder = (node) => {
    if (!node) return;
    postorder(node.left);
    postorder(node.right);
    postorderList.push(node.value);
  };

  const nodes = nodeinfo
    .map(([x, y], i) => new Node(i + 1, x, y))
    .sort((a, b) => b.y - a.y || a.x - b.x);

  const root = nodes[0];
  for (let i = 1; i < nodes.length; i++) {
    insertNode(root, nodes[i]);
  }

  preorder(root);
  postorder(root);

  return [preorderList, postorderList];
}

export default solution;
