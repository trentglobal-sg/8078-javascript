// Operators are functionalities or instructions represented by a symbol
// `+` is an example of an operator. It takes the LHS and RHS values and simplifies into
// the sum of the two values
console.log(2 + 2);  
console.log(10 - 3); 

// multiply is *
console.log(2 * 3);

// division is /
console.log(10 /5 );

// The order of operation is important in some cases
console.log( 10 / 2 + 3);  // division and mulitiplication they go before addition and subtraction
console.log( 10 + 2 * 3);

// the `=` operator is known as the assignment operator
// it always go LAST in an expression
// arthimetric operators, then assignment
let x = 4 * 5;
// => let x = 20;
// hence x contains 20


// ORDER OF PRECEDENCE
// 1. arthimetric operators (**)
// 2. arthimetric operators ( / * %)
// 3. arthimetric operators (+ -)
// 4. assignment operators (=)
let y = 10 * 2 + 3 / 4;
// => let y = 20 + 3 / 4
// => let y = 20 + 0.75
// => let y = 20.75

let z = 10 % 2;
console.log(z);

let a = 10 % 3;
console.log(a)