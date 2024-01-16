//! ====================================== Generator Function ======================================

// A generator function is a special type of function that can be paused and resumed,
// allowing you to iterate over a sequence of values lazily.

function* countToInfinity() {
  let count = 0;

  while (true) {
    yield count++;
  }
}

// Create an instance of the generator
const counter = countToInfinity();

// Use the generator to get an infinite sequence of numbers
for (let i = 0; i < 10; i++) {
  console.log(counter.next().value);
}
