"use strict";
// Loops

// for(let aa = 0; aa < 10; aa++){
//     //console.log(`${aa}`);
// }

// const testObjects = [
//   `Maxim`,
//   `Branasco`,
//   1988,
//   32,
//   `Engineer`,
//   [`Mike`, `Toma`, `Masea`],
// ];

// for (let i = 0; i < 7; i++) {
//   console.log(testObjects[i]);
// }
// for(let i = 0;i < testObjects.friends.length;i++){
//     console.log(testObjects.friends[i]);
// }

const years = [2000,2001,2002,2003];
const ages = [];

// for(let i =0; i< years.length;i++){
//     ages.push(2037 - years[i]);
// }
// console.log(ages);

// for(let i = years.length-1 ; i>0 ; i--){
//     console.log(years[i]);
// }


// while loop
// let a = 1;

// while( a <=10){
//     console.log(`hi everyone`);
// a++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;

// while(dice !== 6){
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() *6)+1;
// }


// coding challenge

const bills = [100,200,300,400,500,600,700,800,900];
const tips = [];
const totals =[];

// const tipCalculator = function (bill) {
//   if (bill >= 50 && bill <= 300) {
//     return bill * 0.2;
//   } else {
//     return bill * 0.15;
//   }
// };

for(let i = 0; i < bills.length;i++ ){
    if (bills[i] >= 50 && bills[i] <= 500) {
      tips.push(bills[i] * 0.2);
      totals.push(bills[i] + tips[i])
    } else {
     tips.push(bills[i] * 0.15);
     totals.push(bills[i] + tips[i]);
    }
}

console.log(tips);
console.log(totals);

const calcAverage = function(arr){
    let sum = 0;
    for(let i =0; i< arr.length;i++){
        sum = sum + arr[i];
    }
    return sum / arr.length;
}
console.log(calcAverage);