//! ======================================== flatMap() ========================================

// flatMap is a method available for arrays that allows you to map each element using
// a function and then flatten the result.

let array = [1, 2, 3];
let mappedArray = array.flatMap((value) => [value, value * 2]);

console.log(mappedArray); // [ 1, 2, 2, 4, 3, 6 ]
