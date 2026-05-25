//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class LinkedList {
  constructor() {
    this.data = [];
  }
  
  push(number) {
    return this.data.push(number);
  }

  pop() {
    return this.data.pop();
  }

  shift() {
    return this.data.shift();
  }

  unshift(number) {
    return this.data.unshift(number);
  }

  delete(number) {
    const index = this.data.indexOf(number);
    if (index >= 0) this.data.splice(index, 1);
  }

  count() {
    return this.data.length;
  }
}
