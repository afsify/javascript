//! ====================================== Function Composition ======================================

// Function Composition is a technique in programming where multiple functions are combined to create a
// new function. The result of one function becomes the input of another, creating a chain of operations.

// Functions
const addOne = (x) => x + 1;
const double = (x) => x * 2;

// Function composition: combining 'addOne' and 'double'
const addOneAndDouble = (x) => double(addOne(x));

// Using the composed function
const result = addOneAndDouble(3); // Output: 8 (first add 1, then double)
