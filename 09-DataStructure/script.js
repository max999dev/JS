'use strict';

// Destructuring an array

// const arr = [2, 3, 4];
// const a = [0];
// const b = [1];
// const c = [2];

// const [x, y, z] = arr;

// console.log(x, y, z); // returns 2,3,4

// const restaurant = {
//   name: 'Italiano Belissimo',
//   location: '1122 Plaza Verde, Roma, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   startMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   order: function (starterIndex, mainIndex) {
//     return [this.startMenu[starterIndex], this.mainMenu[mainIndex]]; // order function will return values from start Menu index position and main menu index position
//   },
// };

// let [main, , secondary] = restaurant.categories; // this is the way to skip the second element in destructuring and jump to the third one

// console.log(main, secondary); // it will print first and third element in array

// [secondary, main] = [main, secondary]; // in this case destructuring is used  to switch the elements without using temporary variable

// console.log(main, secondary); // switched positions

// console.log(restaurant.order(1, 2)); // returns Bruschetta and Risotto

// const [starter, mainCourse] = restaurant.order(1, 2); // destructuring result from the above

// console.log(starter, mainCourse); //Bruschetta and Risotto

// const nested = [2, 4, [5, 6]];

// const [i, , j] = nested; // returns values at position 0 and 2 - 2,[5,6]

// console.log(i, j);

// const [q, , [w, e]] = nested; // returns values at position

// console.log(q, w, e); // 2 5 6 7 8

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

  order: function (starterIndex, mainIndex) {
    return [this.startMenu[starterIndex], this.mainMenu[mainIndex]]; // order function will return values from start Menu index position and main menu index position
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, adress }) {
    // function to destructuring an object
    console.log(
      this.startMenu[starterIndex],
      this.mainMenu[mainIndex],
      time,
      adress
    );
  },
};

restaurant.orderDelivery({
  time: '22.30',
  adress: 'Via la rocca, 1056',
  mainIndex: 2,
  starterIndex: 2,
});
const { name, openingHours, categories } = restaurant; // destructuring an object

console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant; // reassign the variables names

console.log(restaurantName, hours, tags);

// Default values
// menu doesn't exists in restaurant object so we are assigning default value to it otherwise the name will be undefined
const { menu = [], startMenu: starters = [] } = restaurant;

console.log(menu, starters);

// Mutaring variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b); // 23 and 7

// Nested Object

const {
  fri: { open, close },} = openingHours;
console.log(open, close); // returns 11 and 23
