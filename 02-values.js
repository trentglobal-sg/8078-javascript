// Programming is essentially an assembly line of data
// we know how to store, represent data in a program
// in programming, data are stored as values

// 1. Numbers
// - Integrs (whole numbers)
// - Floating Point number (aka floats, used to represent decimal numbers)
// in most programming langauges, we can store values in variables
let secretOfLife = 42;  // assign the integer 42 to a variable named `secretOfLife`
let pi = 3.1417; // assign the floating point number (aka float) 3.17 to a variable named `pi`

// 2. Strings 
// A sequence (aka "combination") of symbols (alphabets, chinese characters, Japanese kanji, punc.)
// Instead of symbols we use the word 'character'
// Strings in JavaScript begins with a double quote or single quote, and ends with a double quote or single quote
let rhyme = "The quick brown fox jumps over the lazy dog";  
let song = 'Jack and Jill went up the hill';
let sentence = "I don't know anything";
let paragraph = 'She said, "I do not know anything"';
// cannot mix double quotes in a string that starting with double quotes: `let mixed = "She said, "i don't know"";`
console.log(song);  // ==> display the content of that string to the user

// 3. Booleans (true or false)
// Important because computers are essentially storing all data as true or false (1 or 0)
let isRaining = true;   // no quotes around it
let isSnowing = false; 