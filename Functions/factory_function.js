// Factory function:

// A factory function is a function that returns an object, often used for creating
// multiple instances of similar objects.

function createPerson(name, age) {
  return {
    name,
    age,
    greet() {
      console.log("Hello, " + this.name);
    },
  };
}
