//! ======================================== Spread Operator ========================================

// The spread operator is a concise way to create a shallow copy of an array.

let originalArray = [1, 2, 3, 4, 5];
let clonedArray = [...originalArray];

console.log(clonedArray); // Output: [1, 2, 3, 4, 5]

// Modifying the original array does not affect the cloned array
originalArray.push(6);
console.log(originalArray); // Output: [1, 2, 3, 4, 5, 6]
console.log(clonedArray); // Output: [1, 2, 3, 4, 5]
