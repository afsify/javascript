//! ======================================== Default Parameter ========================================

// Default parameters in JavaScript allow you to specify default values for function parameters.
// If a value is not provided for a parameter during a function call, the default value is used.
// This feature was introduced in ECMAScript 2015 (ES6).

// Function with default parameters
function greet(name = "Guest", greeting = "Hello") {
  console.log(`${greeting}, ${name}!`);
}

// Calling the function with and without arguments
greet(); // Output: Hello, Guest!
greet("Alice"); // Output: Hello, Alice!
greet("Bob", "Hi"); // Output: Hi, Bob!
