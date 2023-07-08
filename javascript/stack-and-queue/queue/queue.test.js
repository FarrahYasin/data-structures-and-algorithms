'use strict';

const Node = require('../Node');
class Queue{
  constructor(){
    this.front=null;
    this.rear=null;
    this.length=0;
  }

  isEmpty() {
    return this.front === null;
  }

  toString() {
    let currentNode = this.front;
    let resultAsString = '';

    while (currentNode !== null) {
      resultAsString +=currentNode.value+ ' -> ' ;
      currentNode = currentNode.next;
      //   console.log(resultAsString);
    }
    return resultAsString + 'NULL';
    // return console.log(' head '+ string + 'NULL');
  }

  enqueue(value){
    const newNode = new Node(value);
    if(this.isEmpty()){
      this.front=newNode;
      this.rear=newNode;
    }
    else{
      this.rear.next=newNode;
      this.rear=newNode;
    }
    console.log(newNode);
    this.length++;
  }

  dequeue(){
    if(this.isEmpty()) {
      throw new Error('queue is empty!');
    }
    const temp= this.front;
    this.front=this.front.next;
    temp.next=null;
    this.length--;

    return temp.value;

  }

  peek(){
    if (this.isEmpty()) return null;
    return this.front.value;
  }
}
const q = new Queue();

q.enqueue(1);//add new node
// Queue {
//   front: Node { value: 1, next: null },
//   rear: Node { value: 1, next: null },
//   length: 1 }
//the queue:    1 -> NULL    the front is : 1

q.enqueue(2);//add new node
// Queue {
//   front: Node { value: 1, next: Node { value: 2, next: null },
//   rear: Node { value: 2, next: null },
//   length: 2}
//the queue:   1 -> 2 -> NULL         the front is : 1

q.enqueue(3);//add new node
// Queue {
//   front: Node { value: 1, next: Node { value: 2, next: [Node] ,
//   rear: Node { value: 3, next: null },
//   length: 3
// }
//the queue:   1 -> 2 -> 3 -> NULL      the front is : 1

q.enqueue(4);//add new node
// Queue {
//   front: Node { value: 1, next: Node { value: 2, next: [Node] } },
//   rear: Node { value: 4, next: null },
//   length: 4} 
//   the queue 1 -> 2 -> 3 -> 4 -> NULL         the front is : 1

q.enqueue(5);//add new node
// Queue {
//   front: Node { value: 1, next: Node { value: 2, next: [Node]},
//   rear: Node { value: 5, next: null },
//   length: 5 }
//the queue 1 -> 2 -> 3 -> 4 -> 5 -> NULL
// the front is : 1

console.log(q);
console.log(q.toString());
console.log('the front is : '+ q.peek());

console.log("----------------------");



q.dequeue();
console.log(q);
console.log(q.toString());
console.log('the front is : '+ q.peek());

// Queue {
//   front: Node { value: 1, next: Node { value: 2, next: [Node] } },
//   rear: Node { value: 5, next: null },
//   length: 5
// }
// 1 -> 2 -> 3 -> 4 -> 5 -> NULL
// the front is : 1
// ----------------------
// Queue {
//   front: Node { value: 2, next: Node { value: 3, next: [Node] } ,
//   rear: Node { value: 5, next: null },
//   length: 4
// }
// 2 -> 3 -> 4 -> 5 -> NULL
// the front is : 2



// __________TESTING THE Queue__________________

describe('Testing The Stack', () => {

  it('Can successfully create new instance from the Queue', ()=>{
    const qQueue = new Queue();
    expect(qQueue instanceof Queue).toBeTruthy();
  });

  it('Can successfully enqueue into a queue', ()=>{
    const qqQueue = new Queue();

    qqQueue.enqueue(1);
    expect(qqQueue.toString()).toBe('1 -> NULL');
    expect(qqQueue.length).toBe(1);
});

  it('Can successfully enqueue multiple values into a queue  ', ()=>{
    const q1_Queue = new Queue();

    q1_Queue.enqueue(1);
    q1_Queue.enqueue(2);
    q1_Queue.enqueue(3);
    q1_Queue.enqueue(4);

    expect(q1_Queue.toString()).toBe('1 -> 2 -> 3 -> 4 -> NULL');
    expect(q1_Queue.length).toBe(4);

  });
  it('Can successfully dequeue out of a queue the expected value  ', ()=>{
    const q2_Queue = new Queue();

    q2_Queue.enqueue(1);
    q2_Queue.enqueue(2);
    q2_Queue.enqueue(3);
    q2_Queue.enqueue(4);

    expect(q2_Queue.toString()).toBe('1 -> 2 -> 3 -> 4 -> NULL');

    q2_Queue.dequeue();
    expect(q2_Queue.toString()).toBe('2 -> 3 -> 4 -> NULL');
    expect(q2_Queue.peek()).toBe(2);
    expect(q2_Queue.length).toBe(3);

    q2_Queue.dequeue();
    expect(q2_Queue.toString()).toBe('3 -> 4 -> NULL');
    expect(q2_Queue.peek()).toBe(3);
    expect(q2_Queue.length).toBe(2);

    q2_Queue.dequeue();
    expect(q2_Queue.toString()).toBe('4 -> NULL');
    expect(q2_Queue.peek()).toBe(4);
    expect(q2_Queue.length).toBe(1);

    q2_Queue.dequeue();
    expect(q2_Queue.toString()).toBe('NULL');
    expect(q2_Queue.peek()).toBe(null);
    expect(q2_Queue.length).toBe(0);

  });

  it('Can successfully peek into a queue, seeing the expected value  ', ()=>{
    const q3_Queue = new Queue();

    q3_Queue.enqueue(1);
    q3_Queue.enqueue(2);
    q3_Queue.enqueue(3);
    q3_Queue.enqueue(4);
    expect(q3_Queue.toString()).toBe('1 -> 2 -> 3 -> 4 -> NULL');

    q3_Queue.dequeue();
    expect(q3_Queue.peek()).toBe(2);
    expect(q3_Queue.toString()).toBe('2 -> 3 -> 4 -> NULL');

    q3_Queue.dequeue();
    expect(q3_Queue.peek()).toBe(3);
    expect(q3_Queue.toString()).toBe('3 -> 4 -> NULL');

    q3_Queue.dequeue();
    expect(q3_Queue.peek()).toBe(4);
    expect(q3_Queue.toString()).toBe('4 -> NULL');

    q3_Queue.dequeue();
    expect(q3_Queue.peek()).toBe(null);
    expect(q3_Queue.toString()).toBe('NULL');
  });

  it('Can successfully empty a queue after multiple dequeues  ', ()=>{
    const q4_Queue = new Queue();

    q4_Queue.enqueue(1);
    q4_Queue.enqueue(2);
    q4_Queue.enqueue(3);
    q4_Queue.enqueue(4);
    expect(q4_Queue.toString()).toBe('1 -> 2 -> 3 -> 4 -> NULL');
    expect(q4_Queue.peek()).toBe(1);
    expect(q4_Queue.length).toBe(4);


    q4_Queue.dequeue();
    expect(q4_Queue.peek()).toBe(2);
    expect(q4_Queue.toString()).toBe('2 -> 3 -> 4 -> NULL');
    expect(q4_Queue.length).toBe(3);

    q4_Queue.dequeue();
    expect(q4_Queue.peek()).toBe(3);
    expect(q4_Queue.toString()).toBe('3 -> 4 -> NULL');
    expect(q4_Queue.length).toBe(2);

    q4_Queue.dequeue();
    expect(q4_Queue.peek()).toBe(4);
    expect(q4_Queue.toString()).toBe('4 -> NULL');
    expect(q4_Queue.length).toBe(1);

    q4_Queue.dequeue();
    expect(q4_Queue.peek()).toBe(null);
    expect(q4_Queue.toString()).toBe('NULL');
    expect(q4_Queue.length).toBe(0);

    // q4_Queue.dequeue();
    // expect(q4_Queue.dequeue()).toBe('queue is empty!');
    expect(() => q4_Queue.dequeue()).toThrowError('queue is empty!');
    expect(q4_Queue.peek()).toBe(null);
    expect(q4_Queue.toString()).toBe('NULL');
});

  it('Can successfully instantiate an empty queue  ', ()=>{
    const q5_Queue = new Queue();

    expect(q5_Queue instanceof Queue).toBeTruthy();
    expect(q5_Queue.peek()).toBe(null);
    expect(q5_Queue.toString()).toBe('NULL');
    expect(q5_Queue.length).toBe(0);

  });

  it('Calling dequeue or peek on empty queue raises exception  ', ()=>{
    const q6_Queue = new Queue();

    // q6_Queue.dequeue();
    // expect(q6_Queue.dequeue()).toBe("queue is empty!");
    expect(() => q6_Queue.dequeue()).toThrowError('queue is empty!');
    expect(q6_Queue.peek()).toBe(null);
    expect(q6_Queue.toString()).toBe('NULL');
    expect(q6_Queue.length).toBe(0);
  });

});
