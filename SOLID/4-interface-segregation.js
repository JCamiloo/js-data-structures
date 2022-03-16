/*
  Segregate or split up interfaces to avoid other classes
  implements more than they need.
*/

class Document { }

class Machine {
  constructor() {
    if (this.constructor.name === 'Machine')
      throw new Error('Machine is abstract!');
  }

  print(doc) { }

  fax(doc) { }

  scan(doc) { }
}

class MultiFunctionPrinter extends Machine {
  print(doc) {
    // ok
  }

  fax(doc) {
    // ok
  }

  scan(doc) {
    // ok
  }
}

class OldFashionedPrinter extends Machine {
  print(doc) {
    // ok
  }

  fax(doc) {
    // do nothing
    // Principle of least surprise
  }

  scan(doc) {
    // do nothing
  }
}

// Better approach

class Printer {
  constructor() {
    if (this.constructor.name === 'Printer')
      throw new Error('Printer is abstract!');
  }

  print() { }
}

class Scanner {
  constructor() {
    if (this.constructor.name === 'Scanner')
      throw new Error('Scanner is abstract!');
  }

  scan() { }
}