// const BirthYear = 1988;
// BirthYear = 1989; const can not be redeclared

// const job; const must be initialized otherwise it will throw an error

// Basic Operators

// console.log(3**3);
// console.log(Math.pow(3,3));

// let x = 5+10;
// x += 10; // x = 25
// console.log(x);

// x *= 4;
// console.log(x);

// x /=2;

// console.log(x);

// const firstName = 'Maxim';
// const job = 'Qa Engineer';
// const age = 32;

// const Max = `Hi, I am ${firstName} and my job title is ${job} and i am ${age} years old`;
// console.log(Max);


// Assignment

// const MarkHeight = 1.70;
// const MarkWeight = 90;
// const  MarkBMI = MarkWeight / MarkHeight ** 2;
// const JohnHeight = 1.80;
// const JohnWeight = 198;
// const JohnBMI = JohnWeight / JohnHeight ** 2;
// const markHeigherBMI = MarkBMI > JohnBMI;

// console.log(MarkBMI.toFixed(3),JohnBMI.toFixed(3),markHeigherBMI);



// Activity with if else statement

// if(MarkBMI > JohnBMI){
//     console.log(`This time Mike's Bmi is higher than John's Bmi 
//     and is equal to ${MarkBMI.toFixed(2)}`)
// }else{
//     console.log(`John's add some weight so his Bmi is higher than
//      Mark's and is equal to ${JohnBMI.toFixed(2)}`);
// }

/* Type conversion*/

// String to number conversion

// const year = '1988';
// Number(year); convert string to the Number
// console.log(Number(year) + 33); // if year is string result 198833
// const num = 2021;
//String(num); convert number to the String

//type coercion

// console.log(`Hi i am ` + 23 + ` years old`)
// console.log(`25`- 10 - `5`); // result is 10


/* Falsy value

0 '' undefined null NaN   - will become false once converted to boolean

*/
// let b;

// console.log(Boolean(0));
// console.log(Boolean(''));
// console.log(Boolean(b));
// console.log(Boolean(NaN));
// console.log(Boolean(null));


// Equality Operators

// == === use only ===

// const YourNumber = Number(prompt(`What is your favourite number`));
// console.log(typeof YourNumber);


// if(YourNumber === 1){
//     console.log(`You are number one`);
// }else if(YourNumber === 3){
//     console.log(`oh 3 is a cool number`);
// }else{
//     console.log(`You choose something different`);
// }

// boolean logic and or not
// const age = 25;

// if(age >= 20 && age < 30){
//     console.log(`You are millenial`)
// }else{
//     console.log(`You are not milleial`)
// }

// Coding Challenge

const AverageScoreDophins = (96+108+89)/3;
const AverageScoreKoalas = (97+112+101)/3;

console.log(AverageScoreDophins, AverageScoreKoalas);
if(AverageScoreDophins > AverageScoreKoalas && AverageScoreDophins >= 100){
    console.log(`Dolphins win the trophy`);
}else if(AverageScoreKoalas > AverageScoreDophins && AverageScoreDophins >=100){
    console.log(`Koalas win the trophy`);
}else if(AverageScoreDophins === AverageScoreKoalas){
    console.log(`Both win the trophy`);
}
