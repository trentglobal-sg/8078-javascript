let fruits = ["apples", "bananas", "pineapples"];
let fruits2 = fruits;  // when we assign a variable to another variable that stores a reference data type
                       // we are copying the reference over, not the actual array
fruits.push("durians");
console.log(fruits);
console.log(fruits2);