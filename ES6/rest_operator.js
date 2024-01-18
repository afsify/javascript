//! ======================================== Rest Operator ========================================

// This is a feature in JavaScript that allows you to represent an indefinite number of arguments as an array.
// It is useful when you want to work with a variable number of arguments in a function or when destructuring
// elements from an array.

function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // Output: 15
