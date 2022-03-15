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

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }

    const newNode = new Node(value);
    const firstPointer = this.getIndex(index - 1);
    const holdingPointer = firstPointer.next;
    newNode.next = holdingPointer;
    firstPointer.next = newNode;

    this.length++;

    return this;
  }

  remove(index) {
    if (index > this.length) {
      return undefined;
    }

    const pointerToMove = this.getIndex(index);

    if (index === 0) {
      this.head = pointerToMove.next;
    } else {
      const parentPointer = this.getIndex(index - 1);
      parentPointer.next = pointerToMove.next;
    }
      
    this.length--;
    this.append(pointerToMove.value);

    return this;
  }

  getIndex(index) {
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }
}

const myLinkedList = new MySingleLinkedList(1);