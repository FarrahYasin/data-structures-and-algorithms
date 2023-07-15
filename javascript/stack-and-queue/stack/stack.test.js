'use strict';

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
  toString() {
    let currentNode = this.top;
    let resultAsString = '';

    while (currentNode !== null) {
      resultAsString +=currentNode.value+ ' -> ' ;
      currentNode = currentNode.next;
      //   console.log(resultAsString);
    }
    return resultAsString + 'NULL';
    // return console.log(' head '+ string + 'NULL');
  }

}

const newStack = new Stack();

newStack.push(10);
newStack.push(12);
newStack.push(14);
newStack.push(15);
console.log("before pop operation");
console.log(newStack);

console.log(newStack.toString());

console.log("the value of the top is "+newStack.peek());

newStack.pop();
console.log("----------------------");

console.log("after pop operation");
console.log(newStack);

console.log(newStack.toString());
console.log("the value of the top is "+newStack.peek());



// __________TESTING THE STACK__________________

describe('Testing The Stack', () => {

  it('Create a new instance from the Stack', ()=>{
    const sstack = new Stack();
    expect(sstack instanceof Stack).toBeTruthy();
  });

  it('Can successfully push onto a stack', ()=>{
    const pStack = new Stack();
    pStack.push(10);
    expect(pStack.toString()).toBe('10 -> NULL');
    expect(pStack.peek()).toBe(10);
  });
  it('Can successfully push multiple values onto a stack',()=>{
    const p_Stack = new Stack();
    p_Stack.push(5);
    p_Stack.push(20);
    p_Stack.push(35);
    p_Stack.push(40);
    expect(p_Stack.toString()).toBe('40 -> 35 -> 20 -> 5 -> NULL');
    expect(p_Stack.peek()).toBe(40);

  });
  it('Can successfully pop off the stack ',()=>{
    const p2_Stack = new Stack();
    p2_Stack.push(5);
    p2_Stack.push(20);
    p2_Stack.push(35);
    p2_Stack.push(40);
    p2_Stack.pop();
    expect(p2_Stack.toString()).toBe('35 -> 20 -> 5 -> NULL');
  });
  it('Can successfully empty a stack after multiple pops  ',()=>{
    const p3_Stack = new Stack();
    p3_Stack.push(5);
    p3_Stack.push(20);
    p3_Stack.push(35);
    p3_Stack.push(40);
    p3_Stack.pop();
    p3_Stack.pop();
    p3_Stack.pop();
    p3_Stack.pop();
    expect(p3_Stack.toString()).toBe('NULL');
    expect(p3_Stack.isEmpty()).toBe(true);

  });
  it('Can successfully peek the next item on the stack  ',()=>{
    const p4_Stack = new Stack();
    p4_Stack.push(5);
    p4_Stack.push(20);
    p4_Stack.push(35);
    p4_Stack.push(40);
    expect(p4_Stack.peek()).toBe(40);
    p4_Stack.pop();
    expect(p4_Stack.peek()).toBe(35);

  });
  it('Can successfully instantiate an empty stack  ',()=>{
    const p5_Stack = new Stack();
    expect(p5_Stack.toString()).toBe('NULL');
    expect(p5_Stack instanceof Stack).toBeTruthy();
    expect(p5_Stack.isEmpty()).toBe(true);
  });
  it('Calling pop or peek on empty stack raises exception  ',()=>{
    const p6_Stack = new Stack();
    expect(p6_Stack.pop()).toBe('the stack is empty');
    expect(p6_Stack.toString()).toBe('NULL');
    expect(p6_Stack.peek()).toBe(null);
  });
});


module.exports=Stack;
