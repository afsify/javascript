//! ====================================== Recursive Function ======================================

// Functions that call themselves.
// Used for tasks that can be broken down into smaller, similar sub tasks.
// Divide and Conquer Approach

function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

// Example: Find the 6th Fibonacci number
const result = fibonacci(6);
console.log("The 6th Fibonacci number is:", result); // Output: 8
