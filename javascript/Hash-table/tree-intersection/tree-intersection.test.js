'use strict';

const Node = require('./Node');
const BinaryTree  = require('./BinaryTree');
const treeIntersection = require('./tree-intersection');

describe('tree_intersection function', () => {
  it('should find the common values between two trees', () => {
    // Create nodes for the first tree
    const node1 = new Node(1);
    const node2 = new Node(2);
    const node3 = new Node(3);
    const node4 = new Node(4);
    const node5 = new Node(5);

    node1.left = node2;
    node1.right = node3;
    node2.left = node4;
    node2.right = node5;

    const tree1 = new BinaryTree(node1);

    // Create nodes for the second tree
    const node6 = new Node(2);
    const node7 = new Node(4);
    const node8 = new Node(5);
    const node9 = new Node(6);
    const node10 = new Node(7);

    node6.left = node7;
    node6.right = node8;
    node7.left = node9;
    node7.right = node10;

    const tree2 = new BinaryTree(node6);

    const commonValues = treeIntersection(tree1, tree2);
    expect(commonValues).toEqual(new Set([2, 4, 5]));
  });
});
