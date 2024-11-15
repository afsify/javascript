//! ======================================== Methods ========================================

//? call():
// The call method is used to invoke a function immediately with a specified this value and
// individual arguments provided as separate parameters.
{
  function greet(name) {
    console.log(`Hello, I am ${name}! ${this.job}.`);
  }

  const person = { job: "developer" };

  greet.call(person, "Alice");
  // Output: Hello, Alice! I am developer.
}

//? apply():
// The apply method is similar to call, but it takes arguments as an array or an array-like object.
{
  function greet(name, age) {
    console.log(`Hello, I am ${name}! ${this.job} and ${age} years old.`);
  }

  const person = { job: "developer" };

  greet.apply(person, ["Bob", 30]);
  // Output: Hello, Bob! I am developer and 30 years old.
}

//? bind():
// The bind method creates a new function with a specified this value and initial arguments.
// Unlike call and apply, bind does not immediately invoke the function; instead, it returns
// a new function that can be called later.
{
  function greet(name, age) {
    console.log(`Hello, I am ${name}! ${this.job} and ${age} years old.`);
  }

  const person = { job: "developer" };

  const boundFunction = greet.bind(person, "Charlie");
  boundFunction(28);
  // Output: Hello, Charlie! I am developer and 28 years old.
}
