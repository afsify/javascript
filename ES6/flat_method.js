//! ========================================== flat() ==========================================

// The flat() method is a built-in array method in JavaScript introduced in ECMAScript 2019 (ES10).
// It is used to flatten a nested array by collapsing sub arrays to a specified depth or completely
// flattening the entire array.

// The flat() method creates a new array by flattening sub arrays within the original array.

// Flattening a nested array
const nestedArray = [1, [2, 3], [4, [5]]];
const flatArray = nestedArray.flat();

console.log(flatArray);
// Output: [1, 2, 3, 4, [5]]

// You can also specify the depth to which the sub arrays should be flattened.
const specifyFlat = nestedArray.flat(3);

console.log(specifyFlat);
// Output: [1, 2, 3, 4, 5]
