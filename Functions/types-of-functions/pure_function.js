//! ======================================== Pure Function ========================================

// A pure function is a function that, given the same input, will always return the same output and has
// no side effects. It does not modify external state or variables, and it does not interact with the
// outside world.

// Pure function example
function square(number) {
  return number * number;
}

// The result is always the same for the same input
console.log(square(4)); // Output: 16
console.log(square(4)); // Output: 16

// The main use of pure functions in programming is to promote code that is more
// predictable, testable, and maintainable.
