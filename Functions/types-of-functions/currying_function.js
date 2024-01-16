//! ====================================== Currying Function ======================================

// Currying is a technique in functional programming where a function with multiple
// arguments is transformed into a sequence of functions, each taking a single argument.

// Non-curried function
function add(a, b, c) {
  return a + b + c;
}

// Curried version of the add function
function curryAdd(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

// Using the non-curried function
const resultNonCurried = add(1, 2, 3);
console.log("Non-curried result:", resultNonCurried); // Output: 6

// Using the curried function
const resultCurried = curryAdd(1)(2)(3);
console.log("Curried result:", resultCurried); // Output: 6
