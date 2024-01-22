//! ======================================== Proxy object ========================================

// A Proxy object in JavaScript serves as a customizable intermediary for another object, allowing you
// to intercept and control access to its properties and methods. Proxies enable you to define custom
// behavior for various operations on the target object.

// A Proxy is a JavaScript object that wraps around another object (the target) and provides a way to
// intercept and customize operations on that target.

// Target object
const targetObject = {
  name: "John",
  age: 30,
};

// Handler with custom behavior using trap functions
const handler = {
  get(target, property) {
    console.log(`Accessing property: ${property}`);
    return target[property];
  },
  set(target, property, value) {
    console.log(`Setting property: ${property} to ${value}`);
    target[property] = value;
  },
};

// Creating a Proxy using the target object and handler
const proxyObject = new Proxy(targetObject, handler);

// Interactions with the proxy trigger the corresponding trap functions
console.log(proxyObject.name); // Outputs: "Accessing property: name", then "John"
proxyObject.age = 31; // Outputs: "Setting property: age to 31"

// "trap" is a function that allows you to intercept and customize the behavior
// of fundamental operations on an object.
