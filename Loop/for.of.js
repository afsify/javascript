//! ======================================== For Of Loop ========================================

// The JavaScript for of statement loops through the values of an iterable object.
// It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:

const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for (let x of cars) {
  text += x;
}

// for...in can iterate over inherited properties as well,
// while for...of only iterates over the values of the specific iterable.
// for...of works with any object that has an iterable protocol implemented
// (an object with a Symbol.iterator method).

const array = ['a', 'b', 'c'];

// for...in
for (const index in array) {
  console.log(index); // '0', '1', '2' (indices as strings)
  console.log(array[index]); // 'a', 'b', 'c'
}

// for...of
for (const value of array) {
  console.log(value); // 'a', 'b', 'c' (values directly)
}

// use for...in for object properties and for...of for iterable values.