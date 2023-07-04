'use strict';

const Node = require('../Node');

class LinkedList{
  constructor() {
    this.head = null;
    this.tail = null;
  }
  add(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      newNode.next = null;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }
  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.tail.next = null;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
    this.tail = newNode;
    this.tail.next = null;
  }
  toString() {
    let currentNode = this.head;
    let result = '';

    while (currentNode !== null) {
      result += currentNode.value + ' -> ';
      currentNode = currentNode.next;
    }
    return result + 'NULL';
  }

  insertBefore(value, newValue) {
    let currentNode = this.head;
    if (currentNode.value === value || currentNode === null) {
      this.append(newValue);
    }
    while (currentNode.next !== null && currentNode.next.value !== value) {
      currentNode = currentNode.next;
    }
    const newNode = new Node(newValue);
    newNode.next = currentNode.next;
    currentNode.next = newNode;
  }

  insertAfter(value, newValue) {
    let currentNode = this.head;

    while (currentNode !== null && currentNode.value !== value) {
      currentNode = currentNode.next;
    }
    const newNode = new Node(newValue);
    newNode.next = currentNode.next;
    currentNode.next = newNode;
  }
  includes(value) {
    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }

  findNodeAtIndex(index) {
    let currentNode = this.head;
    let count = 0;
    while (currentNode) {
      if (count === index) {
        return currentNode.value;
      }
      count++;
      currentNode = currentNode.next;
    }
    return "not found";
  }

  findLength() {
    let count = 0;
    let currentnode = this.head;
    while (currentnode !== null) {
      count++;
      currentnode = currentnode.next;
    }
    return count;
  }

  kthNodeFromTail(k) {
    const length = this.findLength();
    if (length < k || k < 0) {
      return "k must be greater than or equal to The length of your linkedlist";
    }

    const kFromHead = length - k;
    console.log(kFromHead);
    return this.findNodeAtIndex(kFromHead);
  }

  zipLists(list1, list2) {
    const zippedList = new LinkedList();

    let current1 = list1.head;
    let current2 = list2.head;

    while(current1 && current2) {
      zippedList.append(current1.value);
      current1 = current1.next;

      zippedList.append(current2.value);
      current2 = current2.next;
    }
    while(current1) {
      zippedList.append(current1.value);
      current1 = current1.next;
    }
    while(current2) {
      zippedList.append(current2.value);
      current2 = current2.next;
    }

    return zippedList;
  }
  
}

let ll = new LinkedList();
ll.add(111);
ll.add(222);
ll.add(333);
ll.add(444);
ll.add(555);

let ll2 = new LinkedList();
ll2.append(111);
ll2.append(222);
ll2.append(333);
ll2.append(444);

console.log(ll2.tostring());
console.log(ll.tostring());


let ll3 = ll.zipLists(ll, ll2);

// console.log(ll3.tostring());
describe("new test" , () =>{
    it("test " , () =>{
      expect(ll3.toString()).toBe('555 -> 444 -> 444 -> 333 -> 333 -> 222 -> 222 -> 111 -> 111 -> NULL');
    });
  });

module.exports = LinkedList;
