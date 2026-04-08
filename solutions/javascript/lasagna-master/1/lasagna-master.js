/// <reference path="./global.d.ts" />
// @ts-check

export function cookingStatus(timer = null) {
  if (timer === null) return 'You forgot to set the timer.';
  if (timer === 0) return 'Lasagna is done.'; 
  return 'Not done, please wait.';
}

export function preparationTime(layers, minutes = 2) {
  return layers.length * minutes;
}

export function quantities(layers) {
  let noodles = 0;
  let sauce = 0;
  for (let index = 0; index < layers.length; index++) {
    switch(layers[index]) {
      case 'noodles':
        noodles += 50;
        break;
      case 'sauce':
        sauce += 0.2;
        break;
      default:
        break;
    }
  }
  return {noodles, sauce};
}

export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList[friendsList.length - 1]);
  console.log(myList);
}

export function scaleRecipe(recipes, portions = 2) {
  const scaledIngredients = {};
  const quantity = portions / 2;
  for (const ingredient in recipes) {
    scaledIngredients[ingredient] = recipes[ingredient] * quantity;
  }
  return scaledIngredients;
}