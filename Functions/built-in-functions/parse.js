//! ======================================== JSON.parse() ========================================

// parses a JSON string and returns a JavaScript object.

let jsonString = '{"name": "John", "age": 30}';
let parsedObject = JSON.parse(jsonString);
console.log(parsedObject.name); // Output: 'John'
