/*
  Defines a relationship that you should have between low
  level modules and high level modules.
  High level modules should not directly depend on low level modules,
  they should instead depend on abstractions.
*/

const RELATIONSHIP = Object.freeze({
  parent: 0,
  child: 1,
  sibling: 2
});

class Person {
  constructor(name) {
    this.name = name;
  }
}

// LOW-LEVEL MODULE
class RelationshipBrowser {
  constructor() {
    if (this.constructor.name === 'RelationshipBrowser')
      throw new Error('RelationshipBrowser is abstract!');
  }

  findAllChildrenOf(name) { }
}

class Relationships extends RelationshipBrowser {
  constructor() {
    super();
    this.data = [];
  }

  addParentAndChild(parent, child) {
    this.data.push({
      from: parent,
      type: RELATIONSHIP.parent,
      to: child
    });
  }

  findAllChildrenOf(name) {
    return this.data.filter(relation =>
      relation.from.name === name &&
      relation.type === RELATIONSHIP.parent
    ).map(relation => relation.to);
  }
}

// HIGH-LEVEL MODULE
class Research {
  // constructor(relationships) {
  //   // problem: direct dependence ↓↓↓↓ on storage mechanic
  //   const relations = relationships.data;
  //   for (let relation of relations.filter(relation => relation.from.name === 'John' && relation.type === Relationship.parent)) {
  //     console.log(`John has a child named ${relation.to.name}`);
  //   }
  // }

  constructor(browser) {
    for (let relation of browser.findAllChildrenOf('John')) {
      console.log(`John has a child named ${relation.name}`);
    }
  }
}

const parent = new Person('John');
const child1 = new Person('Chris');
const child2 = new Person('Matt');

// low-level module
let relationship = new Relationships();
relationship.addParentAndChild(parent, child1);
relationship.addParentAndChild(parent, child2);

new Research(relationship);