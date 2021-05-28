"use strict";

// Arrow function

const calcAge = (birthYear) => 2022 - 150;
console.log(calcAge);

// Arrow Function with parameters

const ages = (born, current) => current - born;

console.log(ages(1988, 2021));

// Coding challenge

const averageScore = (a, b, c) => (a + b + c) / 3;

const checWinner = function (averageDolphins, averageKoalas) {
  averageDolphins = averageScore(144, 23, 71).toFixed(3);
  averageKoalas = averageScore(65, 54, 49).toFixed(3);

  averageDolphins > averageKoalas
    ? console.log(`Dolphins wins ${averageDolphins} vs ${averageKoalas}`)
    : console.log(`Koalas wins ${averageKoalas} vs ${averageDolphins}`);
};

checWinner();
