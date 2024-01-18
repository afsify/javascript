//! ======================================== Throttling ========================================

// Throttling is a technique to control the rate at which a function is executed.
// It ensures that the function is not called more often than a specified time interval.

// Let's consider a scenario where a function is used as an event handler for a user scrolling on a webpage.
// Without throttling, the function would be called every time the user scrolls, potentially at a very
// high frequency. Here's why throttling is useful in this context:

// Throttling utility function
function throttle(func, delay) {
  let lastExecTime = 0;

  return function () {
    const currentTime = Date.now();

    if (currentTime - lastExecTime > delay) {
      func.apply(this, arguments);
      lastExecTime = currentTime;
    }
  };
}

// Throttled function for scroll event
const throttledScrollHandler = throttle(function () {
  console.log("Scrolled! (throttled)");
}, 300);

// Applying the throttled function to the scroll event
window.addEventListener("scroll", throttledScrollHandler);
