// An object in JavaScript is a collection of key/value pairs
// It often used for "structured data"
// Each key/value pair has a key and an associated value
// <key> : <value>
let book = {
    "title":"The Lord of the Rings",
    "pageCount": 3000,
    "isbn": "9788845292613",
    "author": "JRR Tolkien",
    "year published": 1948
}

// how do access a key in an object
console.log(book["title"]);

// we can also a key in an object using the dot notation
console.log(book.author)

// the dot notation cannot be used with keys that are not proper variable names
// 1. cannot have spaces -- pageCount, page_count vs page count (wrong)
// 2. cannot begin with a number -- fruits2 (correct) vs. 2fruits (wrong)
// 3. cannot be reserved keywords -- 

// if the key is not a proper variable name, we must use the [] to access it
console.log(book["year published"]);

book.title = "Harry Potter";
console.log(book);

// objects store 'properties' of an 'entity
let person = {
    'first_name':'Ah Kow',
    'last_name':'Tan',
    'age': 40
}