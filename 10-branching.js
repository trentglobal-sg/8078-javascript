// the computer is an imperative machine
// javascript is also an imperative language
// the computer will only know the current instruction it is executing
// all other instructions are "not known"
// and it only "remembers" values that are stored as variables
// let x = 3;
// let y = 4;
// console.log(x + y);

// branching: we can get the computer to skip certain lines
// using the `if` keyword
const prompt = require('prompt-sync')();

let psi = Number(prompt("Enter the PSI index: "));

// if the parenthesis after the `if` keyword contains a `true` value
// then the program execution (aka the red arrow) will enter the block code after the `if`
if (psi <= 50) {
    console.log("The air quality is good");
} else {
    // the else part of an if is optional
    // but is usually used when you have to mutually exclusive clauses
    // the else block will only execute if the `if` preceeding it has a `false` value
    console.log("The air quality is not good");
}

