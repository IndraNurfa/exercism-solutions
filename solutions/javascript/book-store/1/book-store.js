//
// This is only a SKELETON file for the 'BookStore' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const cost = (books) => {
  if (books.length === 0) return 0;

  const PRICE = 800;
  const DISCOUNT = {
    1: 1.0,
    2: 0.95,
    3: 0.90,
    4: 0.80,
    5: 0.75,
  };

  // Count books
  const counts = [0, 0, 0, 0, 0];
  for (const b of books) {
    counts[b - 1]++;
  }

  // Sort descending so we always pick most available
  counts.sort((a, b) => b - a);

  const groups = [];

  // Greedy: keep forming largest sets possible
  while (counts[0] > 0) {
    let size = 0;

    for (let i = 0; i < 5; i++) {
      if (counts[i] > 0) {
        counts[i]--;
        size++;
      }
    }

    groups.push(size);

    // keep sorted
    counts.sort((a, b) => b - a);
  }

  // Count group sizes
  const freq = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  for (const g of groups) {
    freq[g]++;
  }

  // FIX: replace (5 + 3) with (4 + 4)
  const fix = Math.min(freq[5], freq[3]);
  freq[5] -= fix;
  freq[3] -= fix;
  freq[4] += fix * 2;

  // Calculate total
  let total = 0;
  for (let size = 1; size <= 5; size++) {
    total += freq[size] * size * PRICE * DISCOUNT[size];
  }

  return total;
};