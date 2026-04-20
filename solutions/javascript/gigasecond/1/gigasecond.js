//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (input) => {
  const date = new Date(input);
  date.setUTCSeconds(date.getUTCSeconds() + 1e+9);
  return date;
};
