const prompt = require('prompt-sync')();

let psi = Number(prompt("Please enter the psi: "));

// for range checking
// or for a series of checklist, typically use if/else-if
if (psi <= 50) {
    console.log("The air quality is good");
} else if (psi <= 100) {
    console.log("The air quality is moderate")
} else if (psi <= 200) {
    console.log("THe air quality is unhealthy");
} else if (psi <= 300) {
    console.log("The air quality is very unhealthy");
} else {
    console.log("The air quality is hazardous")
}