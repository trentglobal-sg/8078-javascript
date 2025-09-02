const prompt = require('prompt-sync')();
let names = ["Ken", "Paul", "John", "Keith", "Calvin"];

// ask the user for a name
let wantedName = prompt("Enter the name to look for: ");

let found = false;

// display if the name exists  in the array and at which index it is at
// we start i from 0 because the first index is 0 
// we end i at names.length - 1
for (let i = 0; i < names.length; i++) {
    let currentName = names[i];
    // string comparison is case sensitive
    if (currentName.toLowerCase() == wantedName.toLowerCase()) {
        console.log("Found at index", i);
        found = true;
    } 
}
if (found==false) {
    console.log("Not found");
}
