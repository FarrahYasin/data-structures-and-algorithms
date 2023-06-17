'use strict';

const Node = require('./Node');

class LinkedList {
  constructor() {
    this.head = null;
  }

  /*insert method//Arguments: value//Returns: nothing
Adds a new node with that value to the head of the list with an
 O(1) Time performance.
   */

  addToHead(value) { //insert method
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
  addToTail(value){ //insert method
    const newNode = new Node(value);
    if(this.head===null){
      this.head=newNode;
    }
    else{
      let currentNode = this.head;
      while(currentNode.next!==null){
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
  }

  /* includes method//Arguments: value//Returns: Boolean
  Indicates whether that value exists as a Node’s value somewhere within the list. */
  includes(value){
    let currentNode = this.head;
    while (currentNode.next !== null) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }

  /* to string method// Arguments: none
Returns: a string representing all the values in the Linked List, formatted as:
 "{ a } -> { b } -> { c } -> NULL"  */

  toString() {
    let currentNode = this.head;
    let resultAsString = '';

    while (currentNode !== null) {
      resultAsString +=currentNode.value+ ' -> ' ;
      currentNode = currentNode.next;
      console.log(resultAsString);

    }
    return resultAsString + 'NULL';
    // return console.log(' head '+ string + 'NULL');
  }
}

module.exports = LinkedList;

