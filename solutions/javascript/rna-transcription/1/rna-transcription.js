//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (input) => {
  return input.replace(/./g, c => ({G:'C', C:'G', T:'A', A:'U'}[c] ?? c));
};
