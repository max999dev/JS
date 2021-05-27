// // Switch statement

// const day = [`Monday`,`Tuesday`,`Wendsday`,`Thursday`,`Friday`,`Saturday`,`Sunday`];

// switch (day.toString) {
//   case day[0]:
//     console.log(`Day is ${day[0]}`);
//     break;
//   case day[1]:
//     console.log(`Day is ${day[1]}`);
//     break;
//   case day[2]:
//     console.log(`Day is ${day[2]}`);
//     break;
//   case day[3]:
//     console.log(`Day is ${day[3]}`);
//     break;
//   case day[4]:
//     console.log(`Day is ${day[4]}`);
//     break;
//   case day[5]:
//     console.log(`Day is ${day[5]}`);
//     break;
//   case day[6]:
//     console.log(`Day is ${day[6]}`);
//     break;
//   case day[7]:
//     console.log(`Day is ${day[7]}`);
//     break;
//     default:
//         console.log(`Nothing found`);
//         break;
// }

// ternary operator

const age = 2;
age > 18 ? console.log(`Drink a wine`) : console.log(`I like to drink water`);

// Challenge


const  bill = 301;

const tip = bill >=50 && bill <= 300 ? bill* 0.15 : bill * 0.20;

console.log(`The bill was ${bill}, The tip was ${tip}, And total value is ${bill + tip}`);
