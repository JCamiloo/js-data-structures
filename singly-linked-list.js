/*
const singlyLinkedList = {
  head: {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  }
}
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class MySingleLinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null
    };

    this.tail = this.head;
    this.length = 1;
  }
}

let mySinglyLinkedList = new MySingleLinkedList(1);