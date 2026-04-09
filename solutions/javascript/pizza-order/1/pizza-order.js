/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
  let basePrice = 0;
  switch(pizza) {
    case 'Margherita':
      basePrice = 7;
      break;
    case 'Caprese':
      basePrice = 9;
      break;
    case 'Formaggio':
      basePrice = 10;
      break;
  }

  return basePrice + pizzaTopping(extras);
}

export function pizzaTopping(extras) {
  if (extras.length === 0) {
    return 0;
  }

  const [first, ...rest] = extras;

  let price = 0;
  switch (first) {
    case 'ExtraSauce':
      price = 1;
      break;
    case 'ExtraToppings':
      price = 2;
      break;
  }
  return price + pizzaTopping(rest);
}

/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  let result = 0;
  for (let item of pizzaOrders) {
    const price = pizzaPrice(item.pizza, ...item.extras);
    result += price;
  }
  return result;
}
