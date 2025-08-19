// require is a function that allows us to add new functionality to JavaScript
// (import a new function into JavaScript)
// NOTE: before running this, in the terminal type `npm install prompt-sync` and press ENTER
const prompt = require('prompt-sync')();

// the `prompt` function takes in one parameter
// - the parameter will be a display message for the user to read
// - it will return one value as a STRING: whatever the user has type in and press [ENTER]
let name = prompt("Enter your name: ");
console.log("Hi", name);  //functions in JavaScript can take varying number of parameters
                          // for console.log's case, all the parameters will be combined
                          // into one string seperated by space

// Data conversion
// - parseInt() -- given a value, return the integer representation of that value
// - parseFloat() -- given a value, return the float representation of that value
// - Number() - given a value, return the numeridcal representation of that
let age = prompt("Please enter your age: ");
let nextAge = parseInt(age) + 1 ;
console.log("Next year you will be", nextAge, "years old");