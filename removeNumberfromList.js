function ListNode(x) {
 this.value = x;
 this.next = null;
}

const removeKFromList = (l, k) => {
 let dummy = new ListNode();
 dummy.next = l;
 let current = dummy;
//  console.log(current.next)
while (current.next) {
 if (current.next.value === k) {
  current.next = current.next.next;
 } else {
  current = current.next;
 }
}
  return dummy.next;
};

let l = [3, 1, 2, 3, 4, 5];
let k = 3
console.log(removeKFromList(l,k))