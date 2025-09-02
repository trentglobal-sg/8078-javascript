// Primitive Data Types:
// 1. Numbers (floats and integers)
// 2. Strings (symbols)
// 3. Booleans

// "Reference Data Types"
// Arrays
// Objects

// An array allows to store multiple values in a single value
// you can consider it like a list
let guests = ["Tony Stare", "Peter Barker", "Steve Rower"]; // array of strings

// An array can store any number of values (infinite, but usually limited by memory constraints)
let primes = [1, 3, 5, 7, 11, 13, 17, 21, 23] // array of integers

// Unlike C, C++ or Java - the array does not have a fixed length, and can contain
// mixed data types and its length can be adjusted anytime

let rojak = [7, "she sells seashell at the seashore", 3.14, [1,2,3]];

// every item in an array has an index number
// the first item is index 0
let fruits = ["apple", "banana", "strawberry", "pineapples"]

// we use the [ ] operator to retrieve an item at the index
console.log(fruits[0]); // --> "apple"
console.log(fruits[2]); // --> third fruit (not second) from the array --> "strawberry"

// push function allows us to add a new item to the back of an array
fruits.push("durians"); // --> add durians to the back of the array

// remove items from an array using the splice function
// fruits.splice(start, how_many)
// start -- at which index do you want to start to delete from
// how_many -- how many items to delete
// eg: to delete strawberries
fruits.splice(2, 1);  // starting from index 2, delete 1 item (aka element)
