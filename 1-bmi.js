// import a dependency
// install with: `npm install prompt-sync` in the terminal
// TLDR: It makes the `prompt` function available
const prompt = require('prompt-sync')();

console.log("BMI Calculator");
let weight = prompt("Please enter your weight (in kg)");

let height = prompt("Please enter your height (in meters)");

let bmi = weight / height ** 2;

console.log("Your bmi is", bmi);