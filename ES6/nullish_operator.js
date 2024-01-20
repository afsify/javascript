//! ======================================== Nullish Operator ========================================

// The nullish coalescing operator (??) is a JavaScript feature introduced in ECMAScript 2020 (ES11/ES2020).
// It provides a concise way to provide a default value for a variable when the variable is null or undefined,
// while explicitly excluding cases where the variable is 0, '' (empty string), false, NaN, or other falsy values.

// User object with messages property
const user = {
  name: "Alice",
  // messages: 3,
  // Uncomment the above line to see a non-nullish value
};

// Using nullish coalescing operator to provide a default value
const messageCount = user.messages ?? 0;

console.log(messageCount); // Output: 0 if 'messages' is null or undefined, otherwise the actual value
