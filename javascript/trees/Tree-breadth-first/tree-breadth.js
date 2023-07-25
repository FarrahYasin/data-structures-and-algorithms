'use strict';

const TreeBreadthFirst = require('./tree-breadth-first');

let tree;

tree = new TreeBreadthFirst();

tree.add(78);
tree.add(190);
tree.add(1003);
tree.add(200);
tree.add(500);

console.log('----------------------------------');

console.log(tree.preOrder());

console.log('----------------------------------');

let bTree = tree.breadthFirst();

console.log('breadthFirst:   ' + bTree);

console.log('----------------------------------');

console.log('preOrder:  ', tree.preOrder());
console.log('inOrder:  ', tree.inOrder());
console.log('postOrder:  ', tree.postOrder());
