// in a zoo, it costs $5 per child and $12 per adult to enter on a week day
// however on a weekend, it costs $8 per child and $24 per adult to enter
// ask the user whether it is a weekend or a weekday and
// how many adults and child, and then show the total cost

const prompt = require('prompt-sync')()

let isWeekend = prompt("Is today a weekened (y/n): ");
let children = parseInt(prompt("How many children "));
let adult = parseInt(prompt("How many adults"));

if (isWeekend.toLowerCase == 'y') {
    let totalCost = 8 * children + 24 * adult;
} else {
    let totalCost = 5 * children + 12 * adult;
}
console.log("The total cost is", totalCost);