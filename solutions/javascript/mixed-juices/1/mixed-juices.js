// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch (name) {
      case 'Pure Strawberry Joy':
        return 0.5;
      case 'Energizer':
        return 1.5;
      case 'Green Garden':
        return 1.5;
      case 'Tropical Island':
        return 3;
      case 'All or Nothing':
        return 5;
      default:
        return 2.5;
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let supply = 0;
  let loop = 0;
  
  if (limes.length === 0 || wedgesNeeded === 0) return 0;
  
  while (supply < wedgesNeeded && loop < limes.length) {
    switch (limes[loop]) {
      case 'small':
        supply += 6;
        break;
      case 'medium':
        supply += 8;
        break;
      case 'large':
        supply += 10;
        break;
      default:
        supply += 0;
    }
    loop++;
  }
  
  return loop;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  do {
    const order = orders.shift();
    const time = timeToMixJuice(order);

    timeLeft -= time;
  } while (timeLeft > 0 && orders.length > 0);

  return orders;
}
