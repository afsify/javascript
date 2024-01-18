//! ===================================== Prototype =====================================

// In JavaScript, the prototype is an essential part of the object-oriented programming model.
// Every object in JavaScript has a prototype, which is an object from which it inherits properties
// and methods. Objects can share functionality through their prototypes, creating a prototype chain.

//? Prototype Object:
// Every object in JavaScript has an associated prototype object.
// The prototype object can have its own properties and methods.
// Objects inherit properties and methods from their prototype.

//? prototype Property:
// Every function in JavaScript has a special property called prototype.
// This property is used to attach properties and methods that will be shared by all instances
// created using that constructor function.

function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Adding a method to the prototype
Person.prototype.sayHello = function () {
  console.log(`Hello, my name is ${this.name}`);
};

const person1 = new Person("John", 30);
person1.sayHello(); // Output: Hello, my name is John

//? __proto__ Property:
// Every object in JavaScript has a special property called __proto__.
// This property points to the prototype object of the constructor function that was used to
// create the object.

const obj = {};
console.log(obj.__proto__); // Prototype object of the Object constructor

//? Prototype Chain:
// Objects can inherit properties and methods from their prototype and the prototype of their
// prototype, forming a chain. This chain is known as the prototype chain.

function Animal(name) {
  this.name = name;
}

Animal.prototype.eat = function () {
  console.log(`${this.name} is eating.`);
};

function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

// Inheriting from Animal prototype
Dog.prototype = Object.create(Animal.prototype);

const myDog = new Dog("Buddy", "Labrador");
myDog.eat(); // Output: Buddy is eating.

//? Object.create() Method:
// The Object.create() method is used to create a new object with a specified prototype.

const protoObj = { prop: "Prototype Property" };
const newObj = Object.create(protoObj);

console.log(newObj.prop); // Output: Prototype Property
