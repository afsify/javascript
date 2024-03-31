//! ======================================== Object Literals ========================================

// Shorthand syntax for defining object methods and computed property names.

const name = "John";
const age = 25;

const person = {
  name, // Shorthand for name: name
  age, // Shorthand for age: age
  sayHello() {
    // Shorthand for sayHello: function() { ... }
    console.log(`Hello, my name is ${this.name}.`);
  },
};
