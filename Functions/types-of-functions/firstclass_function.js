//! ===================================== First Class Function =====================================

// In JavaScript, functions are first class citizens, meaning they can be assigned to variables,
// passed as arguments to other functions, and returned as values from functions.

// Function assigned to a variable
const greet = function (name) {
  return `Hello, ${name}!`;
};

// Function passed as an argument
function sayHello(greetingFunction, name) {
  console.log(greetingFunction(name));
}

// Function returned as a value
function createGreetingFunction(greeting) {
  return function (name) {
    return `${greeting}, ${name}!`;
  };
}

// Using first-class functions
console.log(greet("Alice")); // Output: Hello, Alice!
sayHello(greet, "Bob"); // Output: Hello, Bob!

const friendlyGreeting = createGreetingFunction("Hi");
console.log(friendlyGreeting("Charlie")); // Output: Hi, Charlie!
