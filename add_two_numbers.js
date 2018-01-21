function ListNode(val) {
  this.val = val;
  this.next = null;

}

let test = new ListNode(1);
let test1 = new ListNode(2);
let test2 = new ListNode(3);
test.next = test1;
test1.next = test2;

let test3 = new ListNode(3);
let test4 = new ListNode(2);
let test5 = new ListNode(1);
test3.next = test4;
test4.next = test5;

let testSingle = new ListNode(5);

var addTwoNumbers = function(l1, l2)  {
  let res = new ListNode(0);
  let currNode = res;
  let nextNode;
  let currVal;
  let carryOver = 0;
  while (l1 !== null || l2 !== null)  {
    currVal = (l1 ? l1.val : 0) + (l2 ? l2.val : 0);
    nextNode = new ListNode(currVal);
    if (nextNode.val >= 10) {
      carryOver += 1;
      nextNode.val -= 10;
    }
    else  {
      console.log('adding to next node carryOver, nextNode is currently, ', nextNode.val)
      nextNode.val += carryOver;
      carryOver = 0;
      if (nextNode.val >= 10) {
        nextNode.val -= 10;
        carryOver += 1;
      }
    }
    currNode.next = nextNode;
    currNode = currNode.next;
    console.log(res.next);
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }
  console.log('remaining carryOver is', carryOver);
  if (carryOver === 1)  {
    nextNode = new ListNode(carryOver);
    currNode.next = nextNode;
  }
  return res.next;
};

addTwoNumbers(test, test3);
addTwoNumbers(testSingle, testSingle);
