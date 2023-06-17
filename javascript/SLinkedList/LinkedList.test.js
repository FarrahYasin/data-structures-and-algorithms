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

});


