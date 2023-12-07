const LinkedList = require("../lib/linkedList");

/**
 * Return the third element from the end of the linked list.
 *
 * @param {LinkedList} list
 *
 * @returns {Node} the third element from the end of the list,
 * null if list length < 3
 *
 */
function thirdFromEndOld(list) {
    if(list.length < 3) return null;

    let index = 0;
    let node = list.head;

    while(node) {
        if(index === list.length - 3) return node;
        node = node.next;
        index++;
    }

}

function thirdFromEnd(list){

    if(!list.head) return null;

    let pointer1 = list.head;
    let i = 0;

    while(i<2 && pointer1.next) {
        pointer1 = pointer1.next;
        i++;
    }

    if(i<2) return null;

    let pointer2 = list.head;
    
    while(pointer1.next) {
        pointer1 = pointer1.next;
        pointer2 = pointer2.next;
    }

    return pointer2;

}

module.exports = thirdFromEnd;
