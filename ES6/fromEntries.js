//! ======================================== fromEntries() ========================================

// The Object.fromEntries() method is a static method that transforms an array of key-value pairs
// into an object. It was introduced in ECMAScript 2019 (ES10) as a counterpart to the
// Object.entries() method, which converts an object into an array of its key-value pairs.

const entries = [
  ["name", "John"],
  ["age", 30],
  ["city", "New York"],
];

const person = Object.fromEntries(entries);

console.log(person);
// Output: { name: 'John', age: 30, city: 'New York' }

const myMap = new Map([
  ["apple", 1],
  ["banana", 2],
  ["orange", 3],
]);

const myObject = Object.fromEntries(myMap);

console.log(myObject);
// Output: { apple: 1, banana: 2, orange: 3 }
