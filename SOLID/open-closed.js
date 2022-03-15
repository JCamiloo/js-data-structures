/*
  Open for extension, Closed for modification.
  modification -> Adding more and more code for filtering.
  extension -> using inheritance, abstract classes
*/

const COLORS = Object.freeze({
  red: 'red',
  green: 'green',
  blue: 'blue'
});

const SIZES = Object.freeze({
  small: 'small',
  medium: 'medium',
  large: 'large',
  yuge: 'yuge'
});

class Product {
  constructor(name, color, size) {
    this.name = name;
    this.color = color;
    this.size = size;
  }
}

const apple = new Product('Apple', COLORS.green, SIZES.small);
const tree = new Product('Tree', COLORS.green, SIZES.large);
const house = new Product('House', COLORS.blue, SIZES.large);

const products = [apple, tree, house];

class ProductFilter {
  filterByColor(products, color) {
    return products.filter(product => product.color === color);
  }

  filterBySize(products, size) {
    return products.filter(product => product.size === size);
  }

  filterBySizeAndColor(products, size, color) {
    return products.filter(product => product.size === size && product.color === color);
  }

  // State Space Explosion -> this approach doesn't work to infinity.
  // It's a better approach to use Specification Design Pattern.
}

// ↑↑↑ BEFORE

// ↓↓↓ AFTER

// General interface for a specification
class ColorSpecification {
  constructor(color) {
    this.color = color;
  }

  isSatisfied(item) {
    return item.color === this.color;
  }
}

class SizeSpecification {
  constructor(size) {
    this.size = size;
  }

  isSatisfied(item) {
    return item.size === this.size;
  }
}

class BetterFilter {
  filter(items, spec) {
    return items.filter(item => spec.isSatisfied(item));
  }
}

// Specification combinator
class AndSpecification {
  constructor(...specs) {
    this.specs = specs;
  }

  isSatisfied(item) {
    return this.specs.every(x => x.isSatisfied(item));
  }
}

const betterFilter = new BetterFilter();

console.log(`Green products (new):`);
for (let product of betterFilter.filter(products, new ColorSpecification(COLORS.green))) {
  console.log(` * ${product.name} is green`);
}

console.log(`Large products:`);
for (let product of betterFilter.filter(products, new SizeSpecification(SIZES.large))) {
  console.log(` * ${product.name} is large`);
}

console.log(`Large and green products:`);
const spec = new AndSpecification(
  new ColorSpecification(COLORS.green),
  new SizeSpecification(SIZES.large)
);

for (let product of betterFilter.filter(products, spec)) {
  console.log(` * ${product.name} is large and green`);
}
