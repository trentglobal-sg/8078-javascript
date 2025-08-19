// functions are programming code given a name 
// they will take some data and give you back a result

// eg. console.log
console.log("Hello world"); // does not give back a result, but it has a side effect of displaying it in the terminal
// console.log is the NAME of the function
// to use it, we put ( ) next to it aka function call

// Math.max(x, y) will give back the larger of the two values as the result
// the values between the parenthesis are known as the parameters (or arguments)
// they are the 'inputs' to the function. (they provide the context of the function call)
// functions can simplify (aka resolve) into a result value 
// the result value is known as the return value
// and instead of saying simplfiy or resolve, we use the verb 'returns'
let z = Math.max(10, 20);
console.log(z);

// 1. before a function can be executed (aka before a function can be called)
// all its parameters must be a VALUE (not an expression)
let x = Math.max(10 + 3, 33 * 3);
// => let x = Math.max(13, 99);
// => let x = 99;

// 2. Function calls goes before operators
// ORDER OF PRECEDENCE
// 1. ( ) (all expressions within parenthesis)
// 2. function calls
// 3. arthimetric operators ( **, / * %, + -)
// 4. assignment operator

// Nested function calls
console.log(Math.max(11, 22+3));
// => console.log(Math.max(11, 25))
// => console.log(25);
