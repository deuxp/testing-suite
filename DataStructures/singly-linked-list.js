//////////////////////////
// Singly Linked Lists //
////////////////////////
/**
 * each container for a value is a node
 * each node has 3 pieces of information:
 *  * 1. Create node
 *  * 2. Insert node
 *  * 3. Remove node
 *  * 4. Search nodes
 *  * 5. Static method for the length
 *  * head pointer that says you are at the beginning
 *  * each node is connected with a next pointer.
 *  No direct access
 *  Random access is not allowed
 *  Insertion is better
 */

/////////////
// Pseudo //
///////////
/**
 * create a class to create each node
 */

// eslint-disable-next-line no-unused-vars
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // the head demarks which value is the beginning of the list
  // the tail is the end of the list

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      // the trick is to have this pointing to the same node;
      // that way every tail.next is really being declared on the same node
      // .. it is not two references to the
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
    return this;
  }
}

const list = new SinglyLinkedList();
list.push("first");
list.push("second");
list.push("third");
console.log(list);
const two = list.tail;
// const three = list.next.next;
console.log(two);
