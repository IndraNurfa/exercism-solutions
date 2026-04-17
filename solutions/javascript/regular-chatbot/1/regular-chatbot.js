// @ts-check

/**
 * Given a certain command, help the chatbot recognize whether the command is valid or not.
 *
 * @param {string} command
 * @returns {boolean} whether or not is the command valid
 */

export function isValidCommand(command) {
  const word = command.split(/[,.\s]/);
  return /chatbot/i.test(word[0]);
}

/**
 * Given a certain message, help the chatbot get rid of all the emoji's encryption through the message.
 *
 * @param {string} message
 * @returns {string} The message without the emojis encryption
 */
export function removeEmoji(message) {
  return message.replace(/emoji\d+/g, '');
}

/**
 * Given a certain phone number, help the chatbot recognize whether it is in the correct format.
 *
 * @param {string} number
 * @returns {string} the Chatbot response to the phone Validation
 */
export function checkPhoneNumber(number) {
  const word = number.split(/[,.\s]/);
  if (/\(\+\d+\)/.test(word[0])) {
    return 'Thanks! You can now download me to your phone.';
  }
  return `Oops, it seems like I can't reach out to ${word[0]}`;
}

/**
 * Given a certain response from the user, help the chatbot get only the URL.
 *
 * @param {string} userInput
 * @returns {string[] | null} all the possible URL's that the user may have answered
 */
export function getURL(userInput) {
  return userInput.match(/\b[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)+\b/g);
}

/**
 * Greet the user using the full name data from the profile.
 *
 * @param {string} fullName
 * @returns {string} Greeting from the chatbot
 */
export function niceToMeetYou(fullName) {
  const name = fullName.split(/[,.\s]/);
  return `Nice to meet you, ${name[2]} ${name[0]}`;
}
