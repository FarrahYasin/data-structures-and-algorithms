'use strict';

const TreeMax = require('./tree-max');

let tree;

tree = new TreeMax();

tree.add(78);
tree.add(190);
tree.add(1003);
tree.add(200);
tree.add(500);

console.log(tree.preOrder());
console.log(tree.findMax());
