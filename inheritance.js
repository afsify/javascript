// ===================================== INHERITANCE =====================================

// Inheritance is a programming concept that allows a new class (subclass or derived class)
// to inherit properties and behaviors (attributes and methods) from an existing class
// (base class or parent class), promoting code reuse and establishing a hierarchical
// relationship between classes.
// Inheritance enables the reusability and extensibility of a given class.
// Keyword super can be used to refer to base class methods/constructors from a subclass

class Vehicle {
	constructor(make, model) {
		/* Base class Vehicle with constructor initializing two-member attributes */
		this.make = make;
		this.model = model;
	}
}

class Car extends Vehicle {
	constructor(make, model, regNo, fuelType) {
		super(make, model); // Sub class calling Base class Constructor 
		this.regNo = regNo;
		this.fuelType = fuelType;
	}
	getDetails() {
		/* Template literals used for displaying details of Car. */
		console.log(`${this.make},${this.model},${this.regNo},${this.fuelType}`);
	}
}

let c = new Car("Hundai", "i10", "KA-016447", "Petrol"); // Creating a Car object 
c.getDetails(); 
