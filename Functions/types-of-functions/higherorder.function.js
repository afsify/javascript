//! ==================================== Higher Order Function ====================================

// Functions that takes one or more functions as arguments or returns a function as its result.
// Fundamental to functional programming.

// Higher-order function: takes a function as an argument
function greet(name, greetingFunction) {
  return greetingFunction(name);
}

// Function to generate a standard greeting
function standardGreeting(name) {
  return `Hello, ${name}!`;
}

// Function to generate a casual greeting
function casualGreeting(name) {
  return `Hey, ${name}!`;
}

// Using the higher-order function with different greeting functions
const resultStandard = greet("Alice", standardGreeting);
console.log(resultStandard); // Output: Hello, Alice!

const resultCasual = greet("Bob", casualGreeting);
console.log(resultCasual); // Output: Hey, Bob!
