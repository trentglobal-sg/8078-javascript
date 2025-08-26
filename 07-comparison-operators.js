// Operators are symbols that represent functionalities
// Order of Precendece
// ( )
// function calls
// Arthimetric Operators (return values is a number)
// **
// / * %
// + -
// Comparison operators ( return value is a boolean: true/false)
// >, <, >=, <=, ==, ===, !=, !==
// Assignment Operator
// =

console.log("3 > 4 =>", 3 > 4);
console.log("3 < 4 =>", 3 < 4);
console.log("10 >= 10", 10 >= 10);
console.log("9 <= 10", 9 <= 10);

// double equal means "is equalvalent or not"
console.log("3 == 3", 3 == 3);
console.log("4 == 5", 4 == 5);
console.log('10 == "10"=>', 10 == "10");  // when == is used with two different data types,
                                          // JavaScript will type cocercion.

// when using ===, JavaScript will not attempt type cocercion
console.log('10 === "10"', 10 === "10");

console.log("9 != '9'", 9 != '9');
console.log("9 !== '9'", 9 !== '9');

// ORDER OF PRECEDENCE: after arthimetic operators
console.log( 3 + 4 > 6);
// => console.log( 7 > 6);
// => console.log(true);

console.log(4 + 6 * 3 > 3 + 4);
// => console.log(4 + 18 > 3 + 4)
// => console.log(22 > 3 + 4)
// => console.log(22 > 7)
// => console.log(true);

