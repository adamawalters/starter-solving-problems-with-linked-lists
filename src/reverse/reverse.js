const LinkedList = require("../lib/linkedList");

/**
 * Iteratively reverse a linked list
 *
 * @param list
 * A (potentially empty) linked list
 *
 * @returns {LinkedList}
 * A linked list in reverse order
 */
function reverseIterative(list) {

    let node = list.head;
    let reversed = new LinkedList();

    while(node) {
        reversed.insertAtHead(node.value);
        node = node.next;
    }

    return reversed;
    
}

/**
 * Recursively reverse a linked list
 *
 * @param list
 * A (potentially empty) linked list
 *
 * @returns {LinkedList}
 * A linked list in reverse order
 */
function reverseRecursive(list) {
    
   if(list.length <=1) return list;

   const head = list.head.value;
   list.remove((node, index) => index === 0);
   const reversedList = reverseRecursive(list);
   reversedList.insert(head);
   return reversedList;

}

module.exports = { reverseIterative, reverseRecursive };
