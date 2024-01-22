//! ======================================== Object.seal() ========================================

// In JavaScript, Object.seal() is a method that is used to seal an object. When an object is sealed,
// it becomes non-extensible, and its existing properties cannot be deleted. However, the values of
// its existing properties can still be modified.

const person = {
  name: "John",
  age: 30,
};

// Seal the 'person' object
Object.seal(person);

// Attempting to add a new property will not work
person.gender = "Male"; // This assignment has no effect

// Attempting to delete an existing property will not work
delete person.name; // This deletion has no effect

// Modifying existing property values is allowed
person.age = 31;

console.log(person); // Output: { name: 'John', age: 31 }
