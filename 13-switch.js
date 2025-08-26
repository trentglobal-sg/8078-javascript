const prompt = require('prompt-sync')();
console.log("Welcome to ACME ToDo List");
console.log("1. See all the todo list");
console.log("2. Add a new todo");
console.log("3. Modify a todo");
console.log("4. Quit");
let choice = Number(prompt("Enter a choice from 1 to 4:"));

// usually switch is used with an integer
switch (choice) {
    case 1:
        console.log("See all todo");
        break; // done for case 1
    case 2:
        console.log("Add a todo");
        break;
    case 3:
        console.log("Modify todo");
        break;
    case 4:
        console.log("Quit");
        break;
    default:
        console.log("Error, can only handle 1 to 4");
}