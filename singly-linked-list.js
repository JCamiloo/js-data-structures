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

  append(value) {
    const newNode = new Node(value);

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this;
  }

  prepend(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;

    this.length++;

    return this;
  }
}

let mySinglyLinkedList = new MySingleLinkedList(1);