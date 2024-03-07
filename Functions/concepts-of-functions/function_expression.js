//! ====================================== Function Expression ======================================

// Function expression is an alternative way to define a function by assigning it to a variable

var greet = function (name) {
  console.log("Hello, " + name + "!");
};

// Calling the function
greet("John"); // Output: Hello, John!

// Unlike function statements (or function declarations), function expressions do not get hoisted
// to the top of their containing scope. Instead, they are evaluated at runtime when the script
// interpreter reaches that line of code.