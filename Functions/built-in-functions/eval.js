//! ======================================== eval ========================================

// It is a global function that evaluates a string as if it were JavaScript code and executes it.
// While eval() can be powerful, it's generally not recommended for security reasons, as it can
// introduce security vulnerabilities if used with untrusted or user-generated input. It also hinders
// performance optimizations by the JavaScript engine.

let x = 10;
let y = 20;
let result;

// Using eval to perform a simple addition
eval("result = x + y");

console.log(result); // Output: 30
