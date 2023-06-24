'use strict';

const Node = require('./Node');

class LinkedList {
  constructor() {
    this.head = null;
    this.tail=null;
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

  //append
  append(value){
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.tail.next = null;
    }
    let currentNode = this.head;
    while(currentNode.next){
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
    this.tail = newNode;
    this.tail.next = null;
  }

  //insert Before
  insertBefore(value, newValue){
    let currentNode = this.head;
    if(currentNode.value === value || currentNode === null){
      this.append(newValue);
    }
    while( currentNode.next !== null && currentNode.next.value !== value){
      currentNode = currentNode.next;
    }
    const newNode = new Node(newValue);
    newNode.next = currentNode.next;
    currentNode.next = newNode;
  }

  //insert after
  insertAfter(value, newValue){
    let currentNode = this.head;
    while(currentNode !== null && currentNode.value !== value){
      currentNode = currentNode.next;
    }
    const newNode = new Node(newValue);
    newNode.next = currentNode.next;
    currentNode.next = newNode;
  }

}

module.exports = LinkedList;

