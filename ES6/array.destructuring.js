//! ======================================== Array Destructuring ========================================

// Array destructuring is a feature in ECMAScript 2015 (ES6) that allows you to extract values from arrays
// and assign them to variables in a more concise way. It provides a syntax for easily unpacking values from
// arrays into separate variables.

// Destructuring with the rest operator
const colors = ["red", "green", "blue", "yellow"];

const [primary, secondary, ...others] = colors;

console.log(primary); // Output: red
console.log(secondary); // Output: green
console.log(others); // Output: ['blue', 'yellow']

// Swapping values using array destructuring
let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a); // Output: 2
console.log(b); // Output: 1

// Ignoring values
const coordinates = [10, 5, 3];

const [x, , z] = coordinates;

console.log(x); // Output: 10
console.log(z); // Output: 3
