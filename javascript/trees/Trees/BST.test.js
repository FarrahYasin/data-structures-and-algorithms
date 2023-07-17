'use strict';

const Node = require('./Node');
const BinaryTree = require('./BinaryTree');
const BinarySearchTree = require('./BinarySearchTree');

describe('Binary tree testing', () => {
  let nullRoot = new BinaryTree();

  it('Can successfully instantiate an empty tree', () => {
    expect(nullRoot.root).toBeNull();
});

  let node = new Node(102);
  let BT = new BinaryTree(node);
  it('Can successfully instantiate a tree with a single root node', () => {
    expect(BT.root.value).toEqual(102);
  });
});


describe('Binary Search tree testing', () => {
  let newTree = new BinarySearchTree();

  newTree.add(102);
  newTree.add(111);
  newTree.add(93);
  newTree.add(77);
  newTree.add(99);
  newTree.add(105);
  newTree.add(200);

  it('For a Binary Search Tree, can successfully add a left child and right child properly to a node' ,() => {

    expect(newTree.root.value).toEqual(102);
    expect(newTree.root.left.value).toEqual(93);
    expect(newTree.root.right.value).toEqual(111);
    expect(newTree.add(102)).toEqual('This is an existing value!');
  });

  it('false for the contains method, given an existing or non-existing node value' ,() => {
  
    expect(newTree.contains(13)).toEqual(false);
    expect(newTree.contains(102)).toEqual(true);
    expect(newTree.contains(77)).toEqual(true);
    expect(newTree.contains(93)).toEqual(true);
});

  it('Can successfully return a collection from a post-order traversal', () => {
    expect(newTree.postOrder()).toEqual([77, 99, 93, 105, 200, 111, 102]);
});

  it('Can successfully return a collection from an in-order traversal', () => {
    expect(newTree.inOrder()).toEqual([77, 93, 99, 102, 105, 111, 200]);
  });

  it('Can successfully return a collection from a pre-order traversal', () => {
    expect(newTree.preOrder()).toEqual([102, 93, 77, 99, 111, 105, 200]);
  });
});


