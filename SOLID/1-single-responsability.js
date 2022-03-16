/*
  A class should have a single primary responsability and as a consequence it
  should only have one reason to change. That reason being somehow related to
  its responsability.
*/

const fs = require('fs');

class Journal {
  constructor() {
    this.entries = {};
  }

  addEntry(text) {
    const count = Object.keys(this.entries).length + 1;
    const entry = `${count}: ${text}`;
    this.entries[count] = entry;
    return entry;
  }

  removeEntry(index) {
    delete this.entries[index];
  }

  toString() {
    return Object.values(this.entries).join('\n');
  }

  // save(filename)
  // {
  //   fs.writeFileSync(filename, this.toString());
  // }
  //
  // load(filename)
  // {
  //   //
  // }
  //
  // loadFromUrl(url)
  // {
  //   //
  // }
}

class PersistenceManager {
  preprocess(j) {
    //
  }

  saveToFile(journal, filename) {
    fs.writeFileSync(filename, journal.toString());
  }
}

const journal = new Journal();
journal.addEntry('I studied today.');
journal.addEntry('I ran 10 miles.');
console.log(journal.toString());

// separation of concerns

const persistenceManager = new PersistenceManager();
const filename = 'c:/temp/journal.txt';
persistenceManager.saveToFile(journal, filename);
