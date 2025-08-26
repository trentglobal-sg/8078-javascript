const prompt = require('prompt-sync')();

let w = Number(prompt("Enter your weight: "));

// keep validate the weight to make sure that it is in the valid range
// UNTIL the user keys in a valid weight
while (w <= 0 || w >= 700) {
    console.log("Error! Please enter between 1 to 699")
    w = Number(prompt("Please enter your weight"));
}


let h = Number(prompt("Enter your height: "));

// the weight is between 0 to 700kg
// the height is between 0 to 3m



