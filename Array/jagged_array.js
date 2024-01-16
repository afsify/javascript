//! ======================================== Jagged Array ========================================

// A jagged array is an array of arrays where each sub array can have a different length.

// Creating a jagged array
const jaggedArray = [[1, 2, 3], [4, 5], [6, 7, 8, 9], [10]];

// Accessing elements in the jagged array
console.log(jaggedArray[0]); // Output: [1, 2, 3]
console.log(jaggedArray[1]); // Output: [4, 5]
console.log(jaggedArray[2]); // Output: [6, 7, 8, 9]
console.log(jaggedArray[3]); // Output: [10]

// Accessing individual elements
console.log(jaggedArray[0][1]); // Output: 2
console.log(jaggedArray[2][2]); // Output: 8
