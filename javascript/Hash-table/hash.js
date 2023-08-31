'use strict';
const LinkedList = require('./Linked-list');

class Hashtable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
  }

  hash(key) {
    let asciiSum = key.split('').reduce((acc, char) => {
      acc = acc + char.charCodeAt();
      return acc;
    }, 0);
    let index = (asciiSum * 599) % this.size;
    return index;
  }

  set(key, value) {
    const index = this.hash(key);
    if (!this.table[index]) {
      this.table[index] = new LinkedList();
    }
    const linkedList = this.table[index];
    if (linkedList.contains(key)) {
      linkedList.find(key).value = value;
    } else {
      linkedList.append(key, value);
    }
  }

  get(key) {
    const index = this.hash(key);
    if (this.table[index]) {
      return this.table[index].find(key);
    }
    return undefined;
  }

  has(key) {
    const index = this.hash(key);
    return this.table[index] && this.table[index].contains(key);
  }

  keys() {
    const keysArray = [];
    for (let i = 0; i < this.size; i++) {
      if (this.table[i]) {
        keysArray.push(...this.table[i].keys());
      }
    }
    return keysArray;
  }
}

const myHashtable = new Hashtable(10);
myHashtable.set('FirstName', 'Farah');
myHashtable.set('Age', 21);

console.log(myHashtable.get('FirstName'));
console.log(myHashtable.has('Age'));
//console.log(myHashtable.has('LastName'));
console.log(myHashtable.keys());

module.exports = Hashtable;


// // const myHashtable = new Hashtable(10);

// Hashtable.set('FirstName', 'Farah');
// Hashtable.set('Age', 21);



// //  input:           :              Output:

// Hashtable.get('FirstName');//       Farah
// Hashtable.get('Age');//              21
// Hashtable.get('LastName');//      undefined
// Hashtable.has('FirstName'); //       true
// Hashtable.has('Age'); //             true
// Hashtable.has('LastName'); //        false
// Hashtable.keys();//              ['FirstName', 'Age']





