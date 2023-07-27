###WhiteBoard:


### The code:
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
