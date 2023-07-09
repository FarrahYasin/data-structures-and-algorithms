const LinkedList = require("./linkedList_zip");

console.log("Test case1: If list 1 taller than list 2 :");
let ll = new LinkedList();
ll.add(11);
ll.add(22);
ll.add(33);
ll.add(44);
ll.add(55);
let ll2 = new LinkedList();
ll2.append(40);
ll2.append(50);
ll2.append(69);
ll2.append(89);
console.log("list1: "+ ll.toString());
console.log("list2: "+ll2.toString());
let ll3 = ll.zipLists(ll, ll2);
console.log("result:"+ ll3.toString());
console.log("  ------------ --------------  --------------");



console.log("Test case2: If list 1 smaller than list 2 :");
// 33 -> 40 -> 22 -> 50 -> 11 -> 69 -> 89 -> NULL
let list1 = new LinkedList();
list1.add(11);
list1.add(22);
list1.add(33);
let list2 = new LinkedList();
list2.append(40);
list2.append(50);
list2.append(69);
list2.append(89);
console.log("list1: "+ list1.toString());
console.log("list2: "+list2.toString());
let list3 = list2.zipLists(list1, list2);
console.log("result:"+ list3.toString());
console.log("  ------------ --------------  --------------");


console.log("Test case3: If list 2 and list1 have the same size :");
let linkedList1 = new LinkedList();
linkedList1.add(11);
linkedList1.add(22);
let linkedList2 = new LinkedList();
linkedList2.append(40);
linkedList2.append(50);
console.log("list1: "+ linkedList1.toString());
console.log("list2: "+linkedList2.toString());
let linkedList3 = linkedList1.zipLists(linkedList1, linkedList2);
console.log("result:"+ linkedList3.toString());
console.log("  ------------ --------------  --------------");


console.log("Test case4: If list 1 was empty and list 2 is not empty:");
let lList1 = new LinkedList();
let lList2 = new LinkedList();
lList2.append(40);
lList2.append(50);
lList2.append(69);
lList2.append(89);
console.log("list1: "+ lList1.toString());
console.log("list2: "+lList2.toString());
let lList3 = lList1.zipLists(lList1, lList2);
console.log("result:"+ lList3.toString());
console.log("  ------------ --------------  --------------");

describe("new test for linked list Zip " , () =>{
  it("Test case1: If list 1 taller than list 2  : " , () =>{
    expect(ll3.toString()).toBe('55 -> 40 -> 44 -> 50 -> 33 -> 69 -> 22 -> 89 -> 11 -> NULL');
  });
  it("Test case2: If list 1 smaller than list 2  : " , () =>{
    expect(list3.toString()).toBe('33 -> 40 -> 22 -> 50 -> 11 -> 69 -> 89 -> NULL');
  });
  it("Test case3: If list 2 and list1 have the same size  :" , () =>{
    expect(linkedList3.toString()).toBe('22 -> 40 -> 11 -> 50 -> NULL');
  });
  it("Test case4: If list 1 was empty and list 2 is not empty:  " , () =>{
    expect(lList3.toString()).toBe('40 -> 50 -> 69 -> 89 -> NULL');
  });
});

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