"use strict";

const years = [2000, 2001, 2002];

// push adding element to the end of the arrray

years.push(2003);
//console.log(years);

// unshift is adding element to the beginning of the array

years.unshift(1999);

// pop removing the last element from an array

years.pop();
console.log(years);

// shift removing the first element from an array

years.shift();

// indexOf(value) - returns element position in an array

// includes - returns boolean it check if element is in an array

console.log(years.includes(2001));

// coding challenge

const tipCalculator = function (bill) {
  if (bill >= 50 && bill <= 300) {
    return bill * 0.2;
  } else {
    return bill * 0.15;
  }
};

const bills = [100, 200, 300];

const tip = [
  tipCalculator(bills[0]),
  tipCalculator(bills[1]),
  tipCalculator(bills[2]),
];

// array total that calculates sum of bills and tips

const total = [bills[0] + tip[0], bills[1] + tip[1], bills[2] + tip[2]];
console.log(bills, tip, total);
