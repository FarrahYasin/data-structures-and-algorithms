'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }

  isEmpty() {
    return this.top === null;
  }

  push(value) {
    let newNode = new Node(value);

    if (this.top === null) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
  }

  pop() {
    if (this.top === null) return 'can not remove from stack --> is empty!!';

    let temp = this.top;
    this.top = this.top.next;
    this.length--;
    return temp.value;
  }

  getMax() {
    if (this.length === 0) {
      console.log('Stack is empty');
    }
    let maxNumber = this.pop(),
      value = null;

    while (this.length !== 0) {
      value = this.pop();

      if (value >= maxNumber) {
        maxNumber = value;
      }
    }

    return maxNumber;
  }


}




let newStack = new Stack();

newStack.push(200);
newStack.push(201);
newStack.push(2002);
newStack.push(400);
newStack.push(100);
newStack.push(150);
newStack.push(190);
newStack.push(140);


console.log(newStack);
console.log(newStack.getMax());//2002
