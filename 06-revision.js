const prompt = require('prompt-sync')(); // must run `npm install prompt-sync` in the terminal first
                                         // require has the same meaning as import
                                         // therefore 'import prompt-sync and assign it to
                                         // a constant variable named `prompt`
// JavaScript has the following types of primitive values: numbers, strings, booleans
// `let` creates a variable
// `const` creates a variable too. A `const` variable cannot be reassigned to
let pi = 3.14;

// in 'normal' JavaScript (aka JavaScript that runs on the browser), there's a prompt function
// but in NodeJS, there isn't unless we import one
let radius = Number(prompt("Enter the radius of the circle: "));

console.log("Radius =", radius);
let area = pi * radius ** 2; // JavaScript will auto-convert (type cocercion) when you have string * number
                             // converting the string to number
console.log("Area =", area);

// always use conversion function to make sure that the data type is what
// you are expecting
let length = parseInt(prompt("Enter the length of the rectangle: "));
let height = parseInt(prompt("Enter the height of the rectangle: "));
let perimeter = (length + height) * 2;  // when JavaScript encounters string + string
                                        // or number + string or string + number,
                                        // JavaScript will cocerce the number into a string

console.log("Perimeter =", perimeter);

// only use let to create a new variable
let x = 10;
x = 12;