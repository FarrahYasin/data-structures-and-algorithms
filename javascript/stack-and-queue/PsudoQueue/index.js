
// const Node = require('../Node');
// const Stack= require('../stack/stack.test');
const Node = require('../Node');

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }

  push(value){
    const newNode=new Node(value);

    if(this.isEmpty()){
      this.top=newNode;
      this.length++;
    }
    else{
      newNode.next=this.top;
      this.top=newNode;
      this.length++;
    }
  }
  pop(){
    if(this.isEmpty()){
      console.log('the stack is empty');
      return 'the stack is empty';
    }
    else{
      const temp=this.top;
      this.top=this.top.next;
      temp.next=null;
      this.length--;
      return temp.value;
    }
  }
  isEmpty(){
    return this.top === null;
  }
  peek(){
    if(this.isEmpty()) return null;
    return this.top.value;
  }
  // toString() {
  //   let currentNode = this.top;
  //   let resultAsString = '';

  //   while (currentNode !== null) {
  //     resultAsString +=currentNode.value+ ' -> ' ;
  //     currentNode = currentNode.next;
  //     //   console.log(resultAsString);
  //   }
  //   return resultAsString + 'NULL';
  //   // return console.log(' head '+ string + 'NULL');
  // }

}
class PseudoQueue{
  constructor(){
    this.s1 = new Stack() ;
    this.s2 = new Stack();
    this.front = null;
  }
  
  enqueue(value, r) {
    this.s1.push(value);
  
    if(r){
      while (this.s1.length > 0 ) {
        this.s2.push(this.s1.pop());
      }
    }
  }
  
  dequeue(){
    const temp = this.s2.pop();
    this.front = this.s2.top;

    return temp;
  }
}

let q1 = new PseudoQueue();
q1.enqueue(1);
q1.enqueue(2);
q1.enqueue(3);
q1.enqueue(4);
q1.enqueue(5,true);

q1.dequeue();
q1.dequeue();
q1.dequeue();
q1.dequeue();

console.log(q1);

