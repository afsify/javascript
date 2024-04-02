//! ====================================== Factory Function ======================================

// A factory function is a function that returns an object, often used for creating
// multiple instances of similar objects.

// Factory function to create person objects
function createPerson(name, age) {
  // Object to be returned by the factory function
  return {
    name: name,
    age: age,
    sayHello: function () {
      console.log(
        `Hello, my name is ${this.name} and I am ${this.age} years old.`
      );
    },
  };
}

// Create person objects using the factory function
const person1 = createPerson("Alice", 30);
const person2 = createPerson("Bob", 25);

// Call the sayHello method on each person object
person1.sayHello(); // Output: Hello, my name is Alice and I am 30 years old.
person2.sayHello(); // Output: Hello, my name is Bob and I am 25 years old.
