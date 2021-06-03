'use strict';

// const numbers = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// ];

// for (const num of numbers) console.log(num); // aka for each loop
// const hours = {
//   thu: {
//     open: 12,
//     close: 22,
//   },
//   fri: {
//     open: 11,
//     close: 23,
//   },
//   sat: {
//     open: 0,
//     close: 24,
//   },
// };

// const restaurant = {
//   name: 'Italiano Belissimo',
//   location: '1122 Plaza Verde, Roma, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   startMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   // ES6 enhanced object literals
//   hours,
// };
// console.log(restaurant);
// for (const menu of restaurant.startMenu) console.log(menu);

// // optional chaining

// console.log(restaurant.hours.mon?.open); // the ? sign will check if property restaurant.hours.mon exists

// // Arrays

// const users = [{name:'Max',email:'test@gmail.com'}];

// console.log(users[0]?.name ?? 'User array is empty'); // it will print name value only if name property exists otherwise it will return a string

// looping over the object keys

// const properties = Object.keys(hours);
// console.log(properties);

// for (const day of properties) {
//   console.log(day);
// }

// //property values

// const values = Object.values(hours);
// console.log(values);

// //Entire Object looping thru
// const entries = Object.entries(hours);
// console.log(entries);

// for(const [key,{open,close}] of entries){ // destructuring the object and looping thru it
//     console.log(`On ${key} we open at ${open} and close at${close}`);
// }

// CHALLENGE

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const values = Object.values(game.scored);
console.log(values);

// 1.
// for(const [i,values] of game.scored.entries()){
//     console.log(`Player name is ${values} and hit numbers og goals ${i+1}`);
// }
// //2. Calculate average odd
// let av =0;
// for(const average of Object.values(game.odds))
//      av += average;
//      av /= Object.values(game.odds).length;
//      console.log(av.toFixed(2));

// 3.print team and the odd

for (const [a, b] of Object.entries(game.odds)) {
  console.log(a, b);
}
