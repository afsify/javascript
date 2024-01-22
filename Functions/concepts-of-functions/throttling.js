//! ======================================== Throttling ========================================

// Throttling is a technique to control the rate at which a function is executed.
// It ensures that the function is not called more often than a specified time interval.

// Let's consider a scenario where a function is used as an event handler for a user scrolling on a webpage.
// Without throttling, the function would be called every time the user scrolls, potentially at a very
// high frequency. Here's why throttling is useful in this context:

// Throttling function
function throttle(func, delay) {
  let lastCallTime = 0;

  return function (...args) {
    const currentTime = new Date().getTime();

    // Check if enough time has passed since the last call
    if (currentTime - lastCallTime >= delay) {
      // Call the original function
      func.apply(this, args);

      // Update the last call time
      lastCallTime = currentTime;
    }
  };
}

// Example usage:
const throttledFunction = throttle(function () {
  console.log("Function is being called!");
}, 1000); // Allow the function to be called at most once every 1000 milliseconds (1 second)

// Call the throttled function multiple times
throttledFunction(); // This call will execute the function
setTimeout(() => throttledFunction(), 500); // This call will be ignored (within the throttling interval)
setTimeout(() => throttledFunction(), 1200); // This call will execute the function after the throttling interval
