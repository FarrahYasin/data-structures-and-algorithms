class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    // this.length = 1;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = -1;
  }

  add(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
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

  zipLists(list1, list2) {
    const zippedList = new LinkedList();
    let current1 = list1.head;
    let current2 = list2.head;
    while(current1 && current2) {
      zippedList.append(current1.value);
      current1= current1.next;
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


module.exports = LinkedList;

//output on compiler
// Test case1: If list 1 taller than list 2 :
// list1: 55 -> 44 -> 33 -> 22 -> 11 -> NULL
// list2: 40 -> 50 -> 69 -> 89 -> NULL
// result:55 -> 40 -> 44 -> 50 -> 33 -> 69 -> 22 -> 89 -> 11 -> NULL
// ------------ --------------  --------------
// Test case2: If list 1 smaller than list 2 :
// list1: 33 -> 22 -> 11 -> NULL
// list2: 40 -> 50 -> 69 -> 89 -> NULL
// result:33 -> 40 -> 22 -> 50 -> 11 -> 69 -> 89 -> NULL
// ------------ --------------  --------------
// Test case3: If list 2 and list1 have the same size :
// list1: 22 -> 11 -> NULL
// list2: 40 -> 50 -> NULL
// result:22 -> 40 -> 11 -> 50 -> NULL
// ------------ --------------  --------------
// Test case4: If list 1 was empty and list 2 is not empty:
// list1: NULL
// list2: 40 -> 50 -> 69 -> 89 -> NULL
// result:40 -> 50 -> 69 -> 89 -> NULL
// ------------ --------------  --------------
