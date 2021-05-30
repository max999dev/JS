'use strict';
// document.querySelector('.message').textContent; // retrieving the text of the element
// document.querySelector('.message').textContent = 'Correct Number'; // set the text content for the element
// document.querySelector('.number');
// document.querySelector('.score');
// document.querySelector('.guess').value = 23; // assign the value to the input field
// console.log(document.querySelector('.guess').value); // retrieve the value from the element

// Click EVENTS

// let secretNumber = Math.trunc(Math.random() * 20 + 1); // Math.random() *20 will generate a number in the range of 1-19 and we add +1 to have the range between 1 - 20
// //document.querySelector('.number').textContent = secretNumber;
// let scoreDisplayed = 20;
// let highScore = 0;

// // the game
// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(typeof guess);

//   document.querySelector('.again').addEventListener('click', function () {
//     // document.querySelector('.score').textContent = 20;
//     // document.querySelector('body').style.backgroundColor = '#222';
//     // document.querySelector('.message').textContent = 'Start Guessing ...';
//     // document.querySelector('.number').textContent = '?';
//     // document.querySelector('.number').style.width = '15rem';
//     // document.querySelector('.guess').value = '';
//     scoreDisplayed = 20;
//     secretNumber = Math.trunc(Math.random() * 20 + 1);
//     document.querySelector('.score').textContent = scoreDisplayed;
//     document.querySelector('.number').textContent = '?';
//     document.querySelector('.guess').value = '';
//     document.querySelector('.message').textContent = 'Start Guessing ...';
//     document.querySelector('.number').style.width = '15rem';
//     document.querySelector('body').style.backgroundColor = '#222';
//   });

//   if (!guess) {
//     document.querySelector('.message').textContent = 'No number';
//   } else if (guess === secretNumber) {
//     document.querySelector('.message').textContent = 'We have a winner!!!';
//     document.querySelector('.number').textContent = secretNumber;
//     document.querySelector('body').style.backgroundColor = '#60b347';
//     if (scoreDisplayed > highScore) {
//       highScore = scoreDisplayed;
//       document.querySelector('.highscore').textContent = highScore;
//     }

//     document.querySelector('.number').style.width = '30rem';
//   } else if (guess > secretNumber) {
//     if (scoreDisplayed > 1) {
//       document.querySelector('.message').textContent = 'Too hight!';
//       scoreDisplayed--;
//       document.querySelector('.score').textContent = scoreDisplayed;
//     } else {
//       document.querySelector('.message').textContent = 'You lost the game :-(';
//       document.querySelector('.score').textContent = 0;
//     }
//   } else if (guess < secretNumber) {
//     if (scoreDisplayed > 1) {
//       document.querySelector('.message').textContent = 'Too low!';
//       scoreDisplayed--;
//       document.querySelector('.score').textContent = scoreDisplayed;
//     } else {
//       document.querySelector('.message').textContent = 'You lost the game :-(';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
// });

// Refactoring the game

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let scoreDisplayed = 20;
let highScore = 0;
let score = document.querySelector('.score');
let number = document.querySelector('.number');
let highscoreDoc = document.querySelector('.highscore');
let body = document.querySelector('body');
let again = document.querySelector('.again');
let check = document.querySelector('.check');

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

check.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);

  again.addEventListener('click', function () {
    scoreDisplayed = 20;
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    score.textContent = scoreDisplayed;
    number.textContent = '?';
    document.querySelector('.guess').value = '';
    displayMessage('Start Guessing ...');
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('body').style.backgroundColor = '#222';
  });

  if (!guess) {
    displayMessage('No number');
  } else if (guess === secretNumber) {
    displayMessage('We have a winner!!!');
    number.textContent = secretNumber;
    body.style.backgroundColor = '#60b347';
    if (scoreDisplayed > highScore) {
      highScore = scoreDisplayed;
      highscoreDoc.textContent = highScore;
    }
    number.style.width = '30rem';
  } else if (guess !== secretNumber) {
    if (scoreDisplayed > 1) {
      displayMessage(guess > secretNumber ? 'Too hight!' : 'Too Low');
      scoreDisplayed--;
      score.textContent = scoreDisplayed;
    } else {
      displayMessage('You lost the game :-(');
      score.textContent = 0;
    }
  }
});
