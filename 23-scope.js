// in JavaScript, we can re-use variable names if they are of a different scope
// one most common case when we define our own functions
// Any time you have a code block { }, it creates its own scope
// variables of different scopes can have the same names

function calculateCircleArea(radius) {
    return 22/7 * (radius ** 2);
}

function foobar(x) {
    return x * 2;
}

function foo() {
    let x = 40;
    return x * 10;
}

console.log(calculateCircleArea(10));
// if a variable is not in any curly brackets, it is in the GLOBAL scope
let x = 10;
let b = foobar(x);
x = 2;
console.log(b);
