//! ======================================== Object.freeze() ========================================

// In JavaScript, Object.freeze() is a method that is used to freeze an object, making it immutable.
// When an object is frozen, its properties cannot be added, modified, or removed. Additionally,
// the values of its existing properties cannot be changed. This helps in creating truly immutable objects,
// ensuring that their state remains constant.

const person = {
  name: "John",
  age: 30,
};

// Freeze the 'person' object
Object.freeze(person);

// Attempting to modify the object will not work
person.age = 31; // This assignment has no effect

// Attempting to add a new property will not work
person.gender = "Male"; // This assignment has no effect

// Attempting to delete a property will not work
delete person.name; // This deletion has no effect

console.log(person); // Output: { name: 'John', age: 30 }
