//! ===================================== Encapsulation =====================================

// Encapsulation in programming is the bundling of data and the methods that operate on that data
// into a single unit, known as a class. It involves restricting access to certain components,
// controlling interactions with the data through methods, and hiding the internal details of
// the implementation. This helps improve code organization, maintainability, and security by
// preventing direct access to the internal workings of an object.

// Encapsulation in JavaScript is achieved through the use of closures and
// function scopes to control access to data.

// Using closure for encapsulation
function createCounter() {
  let count = 0;

  return {
    increment: function () {
      count++;
    },
    getCount: function () {
      return count;
    },
  };
}

let counter = createCounter();
counter.increment();
console.log(counter.getCount()); // Output: 1
