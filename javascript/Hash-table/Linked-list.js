const Node = require('./Node');

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(key, value) {
    const newNode = new Node(key, value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  find(key) {
    let current = this.head;
    while (current) {
      if (current.key === key) {
        return current.value;
      }
      current = current.next;
    }
    return undefined;
  }

  contains(key) {
    return this.find(key) !== undefined;
  }

  keys() {
    const keysArr = [];
    let current = this.head;
    while (current) {
      keysArr.push(current.key);
      current = current.next;
    }
    return keysArr;
  }
}

module.exports =LinkedList;
