//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (count) => {
  let triangle = [];
  for (let i = 0; i < count; i++) {
    let row = [1];
    for (let j = 1; j < i; j++) {
      const sum = triangle[i - 1][j - 1] + triangle[i - 1][j];
      row.push(sum);
    }
    if(i > 0) row.push(1);
    triangle.push(row);
  }

  return triangle;
};
