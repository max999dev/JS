'use strict';

// Short circuiting
// Use Any Data Type, and return any dataType

// console.log('---------------OR---------------');

// console.log(2 || 'Max'); // value of 2
// console.log('' || 'Max'); // returns Max
// console.log(true || 0); // returns true
// console.log(undefined || null); // returns null

// console.log(null || '' || false || 'Max'); // it will print first truthy value MAX

// console.log('---------------And-----------------');

// console.log(0 && 'Max'); //print 0
// console.log(7 && 'Max'); // print Max

// console.log('Hello' && 23 && null && 'Max'); // print null

// // The Nullish Coalescing Operators

// // Nulish values is null and undefined
// const coalescingOperator = undefined ?? 10; // only when first value is null or undefined the second value will be returned
// console.log(coalescingOperator);

// Coding Challenge:

// Coding Challenge #2

/* 
Let's continue with our football betting app!
1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉
BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }
GOOD LUCK 😀
*/

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

// 1. Create one player array for each team

// const player1 = game.players[0];
// const player2 = game.players[1];

const [players1, players2] = game.players;

// console.log(player1);
// console.log(player2);

//2. create first argument a goalkeeper and the rest use rest operator

const [gk, ...fieldPlayers] = players1;
// console.log(gk,fieldPlayers);

// 3. Create an array allPlayers that containing all players for the both teams

// const allPlayers = [player1,player2];
// console.log(allplayers);
const allPlayers = [...players1, ...players2];
// 4. During the game Bayern Munich used 3 substitute players. Create a new array containing all original players plus 'Thiago','coutinho','Perisic'

const playersFinal = [...players1, 'Thiago', 'coutinho', 'Perisic'];
// console.log(playersFinal);

// 5. Based on the game odds object create one variable for each odd (team1,draw,team2);

const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// 6. Write a function printGoals that receives an argument of the players name not an array along with numbers of the goals

const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};

printGoals('Davis', 'Muller', 'Lewandowski', 'Kimich');

//7. 

team1 < team2 && console.log('Team1 is more likely to win');
team1 > team2 && console.log('Team2 is more likely to win');