//! ========================================== Shadowing ==========================================

// When a variable declared within a certain scope has the same name as a variable in an outer scope.
// The inner variable "shadows" or hides the outer variable of the same name, making the outer variable
// temporarily inaccessible within the inner scope.

let x = 10;

function example() {
  let x = 5; // This 'x' shadows the outer 'x' within this function scope
  console.log(x); // Outputs 5, referring to the inner 'x'
}

example();

console.log(x); // Outputs 10, referring to the outer 'x'
