//! ======================================== Variable Typing ========================================

// In JavaScript, variable typing refers to the ability of a variable to hold values of different types.
// JavaScript is a dynamically-typed language, which means you don't have to explicitly specify the data
// type of a variable when declaring it. Instead, the type of a variable is determined at runtime based
// on the value assigned to it.

//? Dynamic Typing:
let x = 5; // x is a number
x = "Hello"; // x is now a string
x = true; // x is now a boolean

//? Primitive Data Types:
let num = 42; // number
let text = "Hello"; // string
let flag = true; // boolean
let undef; // undefined
let noValue = null; // null
{
  const symbol = Symbol("mySymbol");
  // Using symbols as object properties
  const user = {
    name: "John",
    age: 30,
    [symbol]: "Symbol Value",
  };

  // Accessing properties using symbols
  console.log(user.name); // Output: John
  console.log(user[symbol]); // Output: Symbol Value
}

//? Object and Function Types:
// In addition to primitive types, variables can also hold objects and functions.
let person = { name: "John", age: 30 }; // object
let add = function (a, b) {
  return a + b;
}; // function

//? Typeof Operator:
// You can use the typeof operator to determine the type of a variable.
console.log(typeof num); // Output: 'number'
console.log(typeof text); // Output: 'string'
console.log(typeof flag); // Output: 'boolean'
console.log(typeof person); // Output: 'object'

//? Type Coercion:
// JavaScript performs type coercion, where values of different types are automatically
// converted to a common type when an operation involves them.
let result = "5" + 3; // '53' (string concatenation)
