"use strict";
/*
const testObjects = {
firstName: `Maxim`,
lastName: `Branasco`,
age:2021-1988,
job:`Engineer`,
friends:[`Mike`,`Toma`,`Masea`]
}
console.log(testObjects);
console.log(testObjects.firstName); // extracting a property with dot notation
console.log(testObjects[`firstName`]); // extracting a property with bracket notation 
const nameKey = 'Name';
console.log(testObjects['first' + nameKey]);
const interstedIn = prompt('What do you want to know about Maxim');
jobconsole.log(interstedIn);
console.log(testObjects[interstedIn]); // when user type job in prompt window it will show job property
if(testObjects[interstedIn]){
    console.log(testObjects[interstedIn]);
}else{
    console.log(`The value does not exists`)
}

  testObjects.location = `Chicago`;
  console.log(testObjects[interstedIn]);
console.log(testObjects.friends[0]);
*/

// objects methods
/*
const testObjects = {
  firstName: `Maxim`,
  lastName: `Branasco`,
  birthYear: 1988,
  age: 32,
  job: `Engineer`,
  friends: [`Mike`, `Toma`, `Masea`],

    // calcAge: function(birthYear){
    //     return 2021 - birthYear;
    // }
//   calcAge: function(){
//       return 2021 - this.age; // this.age is reading age property this way we writing the DRY(don't repeat yourself) code
//   }
  calcAge: function(){
      this.age = 2021 - this.birthYear;
      return this.age;
  },

  printEverything: function () {
    return `Here I am returning all properties of the object ${this.firstName} ${this.age} ${this.job}`;
  },
};

console.log(testObjects.calcAge());
console.log(testObjects['calcAge'](1990));
console.log(testObjects.printEverything());
*/

// Coding challenge

const Mark = {
  fullName: `Mark Peters`,
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    return (this.mass / Math.pow(this.height, 2)).toFixed(2);
  },
};

const John = {
  fullName: `John Markus`,
  mass: 192,
  height: 1.95,
  calcBMI: function () {
    return (this.mass / Math.pow(this.height, 2)).toFixed(2);
  },
};

const result =
  Mark.calcBMI() > John.calcBMI()
    ? console.log(
        `Mark's BMI ${Mark.calcBMI()} is higher than John's ${John.calcBMI()}`
      )
    : console.log(
        `John's BMI ${John.calcBMI()} is higher than Marks's ${Mark.calcBMI()}`
      );

result;
