//! ======================================== Memoization ========================================

// Memoization is an optimization technique used in computing to speed up the execution of functions
// by caching the results of expensive function calls and returning the cached result when the same
// inputs occur again. It's particularly useful for functions where the same inputs often lead to
// the same outputs, reducing redundant calculations.

// The basic idea of memoization is to store the results of expensive function calls and return the
// cached result when the same inputs occur again, instead of recalculating the result. This can
// significantly improve the performance of certain functions, especially recursive or repetitive ones.

function memoizedAdd() {
  // Memoization cache
  const cache = {};

  return function (x, y) {
    const key = `${x}-${y}`;

    // Check if the result is already in the cache
    if (cache[key]) {
      console.log("Fetching from cache");
      return cache[key];
    } else {
      // Perform the calculation and store the result in the cache
      console.log("Calculating result");
      const result = x + y;
      cache[key] = result;
      return result;
    }
  };
}

const add = memoizedAdd();

console.log(add(1, 2)); // Output: Calculating result, 3
console.log(add(1, 2)); // Output: Fetching from cache, 3 (result is cached)
console.log(add(3, 4)); // Output: Calculating result, 7 (different inputs, so calculated)
console.log(add(3, 4)); // Output: Fetching from cache, 7 (result is cached)
