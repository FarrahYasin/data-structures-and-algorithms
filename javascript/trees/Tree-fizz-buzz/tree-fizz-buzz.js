
class Node{
  constructor(value){
    this.value=value;
    this.next=[];
  }
}

class Tree{
  constructor(){
    this.root=null;
  }

  fizzBussTree(tree){
    let queue = [];
    queue.push(tree.root);

    while(queue.length>0){
      let item=queue.shift();
      if(item.value % 3 === 0){
        item.value = "Fizz";
      }
      else if(item.value % 5 === 0){
        item.value = "Buzz";
      }
      else if(item.value % 3 === 0 && item.value % 5 === 0){
        item.value = "FizzBuzz";
      }
      else if(item.value % 3 !== 0 || item.value % 5 !== 0){
        item.value = "string";
      }
      if(item.next.length > 0){
        queue.push(...item.next);
      }
      console.log(item);
    }

    return tree;

  }

}

let n1 = new Node(20);
let n2 = new Node(30);
let n3 = new Node(40);
let n4 = new Node(50);

let tree= new Tree();
let tree2 = new Tree();
tree.root=n1;
tree.root.next.push(n2);
tree.root.next.push(n3);
tree.root.next.push(n4);


console.log(tree2.fizzBussTree(tree));

// console.log(tree2)
// console.log(tree)



