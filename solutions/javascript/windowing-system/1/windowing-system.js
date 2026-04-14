// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */
export function Size(width = 80, height = 60) {
  this.width = Math.max(1, width);
  this.height = Math.max(1, height);
}

Size.prototype.resize = function (width, height) {
  this.width = Math.max(1, width);
  this.height = Math.max(1, height);
};

export function Position(x = 0, y = 0) {
  this.x = Math.max(0, x);
  this.y = Math.max(0, y);
}

Position.prototype.move = function (x, y) {
  this.x = Math.max(0, x);
  this.y = Math.max(0, y);
};

export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  }

  resize(newSize) {
    const maxWidth = this.screenSize.width - this.position.x;
    const maxHeight = this.screenSize.height - this.position.y;

    const width = Math.max(1, Math.min(newSize.width, maxWidth));
    const height = Math.max(1, Math.min(newSize.height, maxHeight));

    this.size.resize(width, height);
  }

  move(newPosition) {
    const maxX = this.screenSize.width - this.size.width;
    const maxY = this.screenSize.height - this.size.height;

    const x = Math.max(0, Math.min(newPosition.x, maxX));
    const y = Math.max(0, Math.min(newPosition.y, maxY));

    this.position.move(x, y);
  }
}

export function changeWindow(programWindow) {
  programWindow.resize(new Size(400, 300));
  programWindow.move(new Position(100, 150));
  return programWindow;
}