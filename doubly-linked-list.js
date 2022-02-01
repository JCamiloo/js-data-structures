class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class MyDoublyLinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
      previous: null
    };

    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    newNode.previous = this.tail;

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this;
  }
}

let myDoublyLinkedList = new MyDoublyLinkedList(1);
