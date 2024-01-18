//! ======================================= Pure Function =======================================

// A pure function is a function that, given the same input, will always return the same output
// and has no observable side effects.

// Pure Function
function add(a, b) {
  return a + b;
}

// Example of using the pure function
const result1 = add(3, 5); // Output: 8
const result2 = add(3, 5); // Output: 8

console.log(result1 === result2); // Output: true
