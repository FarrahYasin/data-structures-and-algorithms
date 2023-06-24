'use strict';

const LinkedList = require('./LinkedList');

describe('testing the Linked List', () => {
  const list = new LinkedList();

  it('Can successfully instantiate an empty linked list ', () => {
    // const list = new LinkedList();
    expect(list.head).toBeNull(); //mean head points to NULL
  });

  it('Can properly insert into the linked list from head', () => {
    // const list = new LinkedList();
    list.addToHead('Farah');
    expect(list.head.value).toBe('Farah');
    expect(list.head.next).toBeNull();

  });

  it('The head property will properly point to the first node in the linked list', () => {
    // const list = new LinkedList();
    expect(list.head.value).toEqual('Farah');
    expect(list.head.next).toBeNull();
  });
  it('can properly insert multiple nodes into the linked list', () => {
    const list = new LinkedList();
    list.addToTail('Farah');
    expect(list.head.value).toEqual('Farah');
    list.addToTail('Natali');
    expect(list.head.next.value).toEqual('Natali');
    list.addToTail('Mark');
    expect(list.head.next.next.value).toEqual('Mark');
  });
  it('Will return true when finding a value within the linked list that (exists)', () => {
    // const list = new LinkedList();
    list.addToHead('Farah');
    expect(list.includes('Farah')).toBe(true);
  });
  it('Will return false when searching for a value in the linked list that does (not exist)', () => {
    // const list = new LinkedList();
    list.addToHead('farah');
    expect(list.includes('Sara')).toBe(false);
  });
  it('Can properly return a collection of all the values that exist in the linked list (from head)', () => {
    const list = new LinkedList();
    list.addToHead('farah');
    list.addToHead('sara');
    list.addToHead('joodi');

    const FinalResult = list.toString();
    expect(FinalResult).toBe('joodi -> sara -> farah -> NULL');
  });

  it('Can properly return a collection of all the values that exist in the linked list (from tail)', () => {
    const list = new LinkedList();
    list.addToTail('farah');
    list.addToTail('sara');
    list.addToTail('joodi');

    const FinalResult = list.toString();
    expect(FinalResult).toBe('farah -> sara -> joodi -> NULL');
  });



  //new testing
  it('Can successfully add a node to the end of the linked list', () => {
    const list = new LinkedList();
    list.append(12);
    expect(list.toString()).toBe('12 -> NULL');
  });

  it('Can successfully add multiple nodes to the end of a linked list', () => {
    const list = new LinkedList();
    list.append(12);
    list.append(13);
    list.append(14);
    expect(list.toString()).toBe('12 -> 13 -> 14 -> NULL');
  });

  it('can successfully insert a node before a node located in the middle of a linked list', () => {
    const list = new LinkedList();
    list.append(11);
    list.append(12);
    list.append(14);
    list.append(15);
    list.insertBefore(14, 13);
    expect(list.toString()).toBe('11 -> 12 -> 13 -> 14 -> 15 -> NULL');
  });

  it('can successfully insert a node before the first node of a linked list', () => {
    const list = new LinkedList();
    list.append(0);
    list.append(2);
    list.append(3);
    list.append(4);
    list.append(5);
    list.insertBefore(2, 1);
    expect(list.toString()).toBe('0 -> 1 -> 2 -> 3 -> 4 -> 5 -> NULL');
  });

  it('can successfully insert after a node in the middle of the linked list', () => {
    const list = new LinkedList();
    list.append(11);
    list.append(13);
    list.append(15);
    list.append(16);
    list.insertAfter(11, 12);
    expect(list.toString()).toBe('11 -> 12 -> 13 -> 15 -> 16 -> NULL');
  });

  it('can successfully insert a node after the last node of the linked list', () => {
    const list = new LinkedList();
    list.append(11);
    list.insertAfter(11, 12);
    expect(list.toString()).toBe('11 -> 12 -> NULL');
  });


});


