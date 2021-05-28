// strict mode is used for security
"use strict";

// Function Declaration

regFunc(); // will work
function regFunc() {
  console.log(`Regular Function`);
}

// Function expression

expr; // will not work
const anonymousFunc = function () {
  console.log(`Anonymous Function`);
};
const expr = anonymousFunc();
// the main difference between F declaration and F expression is that We can call declaration ahead of implementation but
//we can not call expression ahead
