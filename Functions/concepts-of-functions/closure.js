//! ======================================== Closure ========================================

// A closure is the combination of a function enclosed together with references to its
// surrounding state (the lexical environment). In other words, a closure gives you access
// to an outer function's scope from an inner function.

function outerFunction() {
  let outerVariable = "I am from the outer function";

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

let closure = outerFunction();
closure(); // Output: I am from the outer function
