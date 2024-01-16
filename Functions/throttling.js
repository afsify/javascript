//! ======================================== Throttling ========================================

// Throttling is a technique to control the rate at which a function is executed.
// It ensures that the function is not called more often than a specified time interval.

function throttle(func, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = new Date().getTime();
    if (now - lastCall >= delay) {
      func(...args);
      lastCall = now;
    }
  };
}
