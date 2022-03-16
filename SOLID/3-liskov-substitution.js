/*
  A function / class which takes some base type it should also
  equally be able to take a derived type.
*/

// Wrong approach:

class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  get width() {
    return this._width;
  }

  set width(value) {
    this._width = value;
  }

  get height() {
    return this._height;
  }

  set height(value) {
    this._height = value;
  }

  get area() {
    return this._width * this._height;
  }

  toString() {
    return `${this._width}x${this._height}`;
  }
}

const rectangle = new Rectangle(2, 3);
console.log(rectangle.toString());

class Square extends Rectangle {
  constructor(size) {
    super(size, size);
  }

  set width(value) {
    this._width = value;
    this._height = value;
  }

  set height(value) {
    this._height = value;
    this._width = value;
  }
}

const square = new Square(5);
console.log(square.toString());
square.height = 8;
console.log(square.toString());
