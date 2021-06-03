'use strict';

// Spread Operators

//const arr = [3, 4, 5];

//const newArr = [1, 2, ...arr]; // spread operator will add the values from arr array to the new array
//console.log(newArr); // 1 2 3 4 5

//console.log(...newArr); // displays all elements of newArr individually

// const restaurant = {
//   name: 'Italiano Belissimo',
//   location: '1122 Plaza Verde, Roma, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   startMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   orderPizza: function (ing1, ing2, ing3) {
//     console.log(ing1, ing2, ing3);
//   },
// };

// const newMenu = [...restaurant.startMenu, 'Gnocci']; // Adding gnocci to startMenu
// console.log(newMenu);

// copy array of
// const copyMainMenu = [...restaurant.mainMenu];
// console.log(copyMainMenu);

// JOIN 2 ARRAYS

// const menu = restaurant.startMenu.concat(restaurant.mainMenu); // using concat method
// console.log(menu);

// const menuSpOp = [...restaurant.startMenu, ...restaurant.mainMenu]; // join 2 array from an object using spread operator
// console.log(menuSpOp);

// const ingredients = [
//   prompt('Ingredient 1'),
//   prompt('Ingredient 2'),
//   prompt('Ingredient 3'),
// ];

//const ingridientsForPizza = [...ingredients];

// console.log(ingridientsForPizza);
//restaurant.orderPizza(...ingredients);

// creating a new object from restaurant with a new parameter

// const newRestaurant = {foundedIn: 1980,...restaurant,founder:'Giuseppe Verde'};

// console.log(newRestaurant);

// // copy of an new restaurant object

// const restaurantCopy = {... newRestaurant};
// console.log(restaurantCopy);

// Rest Operators

const [a, b, ...others] = [1, 2, 3, 4, 5]; // others collects the elements that was not defined into the vatiables
console.log(a, b, others); // print 1,2,[3,4,5]

const restaurant = {
  name: 'Italiano Belissimo',
  location: '1122 Plaza Verde, Roma, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  startMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
  orderPizza: function (mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};

const { sat, ...weekDays } = restaurant.openingHours; // rest operator must be the last argument otherwise JS will throw an error
console.log(sat, weekDays);

// function

const add = function (...numbers) {
  // rest argument taking unlimited numbers as an argument and stores into an array
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};
add(2, 3);
add(1, 2, 3, 4, 5, 6);
add(7, 8, 9, 0, 1, 2, 3, 4, 5);

const x = [2, 99, 12];
add(...x); // adding x values as a prameters for an add function

restaurant.orderPizza('bruschetta', 'olive oil', 'tomatoes', 'basil');
