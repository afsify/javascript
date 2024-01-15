// Currying function:

// Currying is a technique in functional programming where a function with multiple
// arguments is transformed into a sequence of functions, each taking a single argument.

function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return function (...moreArgs) {
        return curried(...args, ...moreArgs);
      };
    }
  };
}
