const prompt = require('prompt-sync')();

// See the todo list
// Add a new todo
// Modify an existing todo
// Delete an existing todo
// A console user interface

let todos = [
    {
        "id": 1,  // unique identify each todo
        "name": "Wash the car",
        "done": false,
        "priority": 3
    },
    {
        "id": 2,  // unique identify each todo
        "name": "Clean the room",
        "done": true,
        "priority": 2
    },
    {
        "id": 3,
        "name": "Buy grocery",
        "done": false,
        "priority": 3
    }
];

function displayMenu() {
    console.log("1. See all the todos");
    console.log("2. Add a new todo");
    console.log("3. Modify a todo");
    console.log("4. Delete a todo");
    console.log("5. Quit");
}
// CRUD = Create, Read, Update, Delete
function addTodo(todos, name, priority) {
    // example code of adding a new todo
    let newTodo = {
        "id": Math.floor(Math.random() * 10000) + 1,
        "name": name,
        "done": false,
        "priority": priority
    }
    todos.push(newTodo);
}

function listTodo(todos) {
    console.log("List Todos");
    console.log('-----------');
    for (let i = 0; i < todos.length; i++) {
        let task = todos[i];
        console.log("ID:", task.id, ", Name:", task.name, ", Priority:", task.priority, ", Done:", task.done);
    }
}

function modifyTodo(todos, index, name, priority, done) {
    todos[index].name = name;
    todos[index].priority = priority;
    todos[index].done = done;
}

function deleteTodo(todos, indexToDelete) {
    todos.splice(indexToDelete, 1);
}

function test() {
    addTodo(todos, "Walk the dog", 3);
    addTodo(todos, "Bathe the cat", 5);
    modifyTodo(todos, 0, "Sweep the Floor", 5, true);
    deleteTodo(todos, 1);
    listTodo(todos);
    console.log(findIndexById(todos, 3));
}

function findIndexById(todos, id) {
    let wantedIndex = -1;  // if the wantedIndex still remains as -1 at the end of the search, it means that the id does not exist
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id == id) {
            wantedIndex = i;
            break; // we already found the todo, so no need to search anymore
        }
    }
    return wantedIndex;
}

function main() {
    while (true) {
        displayMenu();
        let choice = parseInt(prompt("Please enter your choice: "));
        if (choice == 1) {
            listTodo(todos);
            console.log();
        }
        if (choice == 2) {
            let name = prompt("Enter the name of the new todo: ");
            let priority = parseInt(prompt("Enter the priority of the new todo: "))
            addTodo(todos, name, priority);
            console.log("New todo added");
            console.log();
        }
        if (choice == 3) {
            listTodo(todos);
            let id = parseInt(prompt("Enter the ID of the todo to modify: "));
            let wantedIndex = findIndexById(id);
            if (wantedIndex == -1) {
                console.log("The ID does not exist");
            } else {
                let newName = prompt("Enter the new name for the task: ");
                let newPriority = parseInt(prompt("Enter the new priority for the task:"));
                let newDone = prompt("Enter y if the task is done, or n if the task is not done: ").toLowerCase() == 'y';
                modifyTodo(todos, wantedIndex, newName, newPriority, newDone);
                console.log("Todo modified")
            }
        }
        if (choice == 4) {
            listTodo(todos);
            let id = parseInt(prompt("Enter the ID of the todo to delete: "));
            let wantedIndex = findIndexById(todos, id);
            todos.splice(wantedIndex, 1);
            console.log("Todo has been deleted");
        }
        if (choice == 5) {
            break; // exit out of the most recent while loop
        }
    }

}


main();
// test();