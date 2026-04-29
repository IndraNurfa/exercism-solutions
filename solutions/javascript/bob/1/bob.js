//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  const trimmed = message.trim();

  const isSilence = trimmed === '';
  const isQuestion = trimmed.endsWith('?');

  const hasLetters = /[a-zA-Z]/.test(message);
  const isUpperCase = message === message.toUpperCase();
  const isShouting = hasLetters && isUpperCase;

  if (isSilence) return 'Fine. Be that way!';
  if (isShouting && isQuestion) return "Calm down, I know what I'm doing!";
  if (isShouting) return 'Whoa, chill out!';
  if (isQuestion) return 'Sure.';
  return 'Whatever.';
};
