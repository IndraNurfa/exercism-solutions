//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
    constructor(input) {
    this.data = input
      .trim()
      .split('\n')
      .map((row) => row.trim().split(/\s+/).map(Number));

    this.row = this.data.length;
    this.column = this.data[0]?.length || 0;
  }

  get rows() {
    return this.data;
  }

  get columns() {
    const cols = this.data[0].length;
    return Array.from({ length: cols }, (_, colIndex) =>
      this.data.map((row) => row[colIndex]),
    );
  }
}
