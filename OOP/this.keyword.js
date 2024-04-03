//! ===================================== This Keyword =====================================

// In JavaScript, the this keyword is a special keyword that refers to the current execution context,
// and its value is determined by how a function is called. The value of this is not static; it can
// vary depending on how a function is invoked.

//? Global Context:
// In the global context or outside of any function, this refers to the global object,
// which is window in a browser environment.

console.log(this === window); // Output: true (in a browser)

//? Function Context:
// Inside a function, the value of this depends on how the function is called.
// In a regular function (not an arrow function), this refers to the object that called the function.
// If there's no specific object, this defaults to the global object.

function showThis() {
  console.log(this);
}

showThis(); // Output: window (in a browser)

//? Object Method:
// When a function is called as a method of an object, this refers to the object itself.

const person = {
  name: "John",
  sayHello: function () {
    console.log(`Hello, my name is ${this.name}.`);
  },
};

person.sayHello(); // Output: Hello, my name is John.

//? Constructor Function:
// When a function is used as a constructor with the new keyword,
// this refers to the newly created instance of the object.

function Car(make, model) {
  this.make = make;
  this.model = model;
}

const myCar = new Car("Toyota", "Camry");
console.log(myCar.make); // Output: Toyota

//? Event Handlers:
// In event handlers, such as those attached to DOM elements,
// this often refers to the element that triggered the event.

const button = document.getElementById("myButton");
button.addEventListener("click", function () {
  console.log(this); // Output: [the button element]
});

//? Arrow Functions:
// Arrow functions do not have their own this context; they inherit it from the enclosing scope.
// In arrow functions, this retains the value it had in the surrounding non-arrow function.

const arrowFunction = () => {
  console.log(this);
};

arrowFunction(); // Output depends on the context where the arrow function is defined
