//! ===================================== Polymorphism =====================================

// It refers to the ability of a single function, method, or operator to work with different types
// of data or objects. It allows you to use a common interface to represent different types of
// objects, providing flexibility and extensibility in your code.

// Polymorphism allows objects to be treated as instances of their parent class,
// providing a consistent interface.

// Polymorphism through method overriding
class Shape {
  draw() {
    console.log("Drawing a shape");
  }
}

class Circle extends Shape {
  draw() {
    console.log("Drawing a circle");
  }
}

class Square extends Shape {
  draw() {
    console.log("Drawing a square");
  }
}

// Using polymorphism
let shapes = [new Circle(), new Square()];
shapes.forEach((shape) => shape.draw());
// Output:
// Drawing a circle
// Drawing a square
