// Function with return type

function printEverything(dog, cat, bird) {
  
  var result = "";
  result += "This is dog = " + dog + " Cat name = " + cat + " Bird Name = " + bird;
  return result;
}

console.log(printEverything("Bucky", "Meow", "Kesha"));

// Multi Dimensional array or nested array

var ourArray = [["hello javascript", 25], ["welcome to javascript", true]];
console.log(ourArray[0][0]);

var addArray = [10, 20, 30];
ourArray.push(addArray); // Adding addArray to ourArray - addArray would be stored at index 2
// var ourArray = [["hello javascript",25],["welcome to javascript", true],[10,20,30]];

console.log(ourArray[2][0]);
// console.log(ourArray);

ourArray.pop(); // remove the last index from ourArray

// shift function is removing the first element from an array

var arr = [1,2,3,4,5,6,7];

arr.shift();
for(var i = 0; i < arr.length; i++){
    console.log(arr);
}

// unshift adding the element at first index in array
var arr1 = [2, 3, 4, 5, 6, 7];
arr1.unshift(1);
for (var i = 0; i < arr1.length; i++) {
  console.log(arr1);
}


// Functions with parameters

function Substitution(a,b){
  console.log(a-b);
}

Substitution(10,5);

// Global and local variables

var global = 10; // this variable is outside of any function so it's global and can be accessed anywhere in the code

function fun1(){
  againGlobal = 5; // This variable is also a global, it's inside the function and no word 'var'; When 'var' is added variables becomes local
}
function GlobalAndLocalVariables(){
 
  var output = "";

if(global != "undefined"){
  console.log(output += " This is global " + global);
}
if(againGlobal != "undefined"){
  console.log(output +=" AgainGlobal "+ againGlobal);
}
console.log(output);
}

GlobalAndLocalVariables();


