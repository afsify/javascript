//! ======================================= Hoisting =======================================

// Hoisting in JavaScript is a behavior where variable and function declarations are moved to the top
// of their respective scopes during the compilation phase, allowing them to be used before they are
// formally declared in the code.

//? Variable Hoisting
// When variables are declared using the var keyword, they are hoisted to the top of their scope,
// but only the declarations are hoisted, not the initializations.

console.log(x); // undefined
var x = 5;
console.log(x); // 5

//? Function Hoisting
// Function declarations are also hoisted to the top of their scope.

sayHello(); // "Hello, world!"

function sayHello() {
  console.log("Hello, world!");
}
