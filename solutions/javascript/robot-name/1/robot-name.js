// This is only a SKELETON file for the 'Robot Name' exercise. It's been
// provided as a convenience to get your started writing code faster.

export class Robot {
  constructor() {
    this.reset();
  }

  get name() {
    return this._name;
  }

  reset() {
    let newName = generateRandomName();
    while (usedNames.has(newName)) {
      newName = generateRandomName();
    }

    usedNames.add(newName);
    this._name = newName;
  }
}

Robot.releaseNames = () => {
  usedNames.clear();
};

const usedNames = new Set();

function generateRandomName() {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const randomLetter = () => letters[Math.floor(Math.random() * letters.length)];
  const randomDigit = () => Math.floor(Math.random() * 10);

  return `${randomLetter()}${randomLetter()}${randomDigit()}${randomDigit()}${randomDigit()}`;
}