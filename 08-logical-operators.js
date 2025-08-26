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
// Logical Operators
// not, and, or
// Assignment Operator
// =

// If you pass your English exam and your Science exam, you can go to Disney Land
let passedEnglish = true;
let passedScience = true;
let goDisneyLand = passedEnglish && passedScience;  // the && here means 'and'
console.log("Can go disney land?", goDisneyLand);

console.log("true && true =>", true && true);
console.log("false && true =>", false && true);
console.log("true && false =>", true && false);
console.log("false && false =>", false && false);

let englishScore = 73;
let scienceScore = 46;
let buyPS5 = englishScore >= 50 && scienceScore >= 50;
// => let buyPS5 = 73 >= 50 && 46 >= 50
// => let buyPS5 = true && false
// =< let buyPS5 = false;

let x = 15;
// is x between 10 to 30?
let xBetween10To30 = x >= 10 && x <= 30;   // not 10 < x < 30;
//                 => 15 >= 10 && 15 <= 30
//                 => true && 15 <= 30
//                 => true && true
//                 => true
console.log(xBetween10To30);

// There is the `or` logical operator (represented with ||)
let isWeekend = true;
let isHoliday = false;
let goJB = isWeekend || isHoliday;
//       => true || false
//       => true
console.log("goJohor =", goJB);

console.log("true || true =>", true || true);
console.log("true || false =>", true || false);
console.log("false || true =>", false || true);
console.log("false || false =>", false || false); // operands are the values on the left and right of the operator

// the && operator has higher precedence than ||

// NOT operator only have one operand (it only have value)
// There are two kind of operators - binary and uniary
// binary - two values (aka two operands)
// for example: 3 + 4, 3 > 4,  etc. etc.
// uniary operators have one value (aka one operand)
// !true => false
// !false => true

let isLightsOn = true;
console.log(isLightsOn == false);
console.log(!isLightsOn);

// if the temperature is not higher than 40 degrees ===> temperautre is lower than 40
let temperature = 33;
console.log (temperature < 40); // first version: inverse the comparsion operator
console.log(!(temperautre >= 40)); // second version: use the ! operator to invert the result