const prompt = require('prompt-sync')();

let psi = Number(prompt("Please enter the PSI: "));

if (psi <= 50) {
    console.log("The air quality is good")
};

if (psi > 50 && psi <= 100) {
    console.log("The air quality is moderate");
}

if (psi > 100 && psi <= 200) {
    console.log("The air quality is unhealthy");
}

if (psi > 200 && psi <= 300) {
    console.log("The air quality is very unhealthy");
} 

if (psi > 300) {
    console.log("The air quality is hazardous");
}