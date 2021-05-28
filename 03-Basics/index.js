// Double quoting string inside the string

var myStr = 'Hi this is Javascript "Self study course" that what it is';

// Second way to have double quotes in a string
var mystr1 = 'Hi this is Javascript "Self study course" that what it is';
console.log(myStr);
console.log(mystr1);

/*
Code Output

\' - single quote
\" - double quote
\\ - backslash
\n - new line
\r - carriage return
\t - tab
\b - backspace
\f - form speed

*/

var mystr2 = "FirstLine \n\t\\SecondLine\nThirdLine"
console.log(mystr2);

// String concatenation

var str = "First string ";
str += "Second string"

var str1 = "Very first string ";
str1 += str;
console.log(str);
console.log(str1);

// Lenght of the string

console.log(str1.length);

// Extract any caracter using index position from the string

var anyLetter = str1[1];
console.log(anyLetter);

// string immutability stands for you can change the string content but you can modify string at your wish

var str2 = 'John';
str2[0] = 'S'; // the new value for a letter can not be assigned to the string str2
console.log(str2);