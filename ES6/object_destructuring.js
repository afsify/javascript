//! ======================================== Object Destructuring ========================================

// Object destructuring is a feature in JavaScript that allows you to extract values from objects and assign
// them to variables in a concise and convenient way. It simplifies the process of extracting specific
// properties from an object and using them in your code.

// Object with properties
const person = {
  name: "John",
  age: 30,
  city: "New York",
};

// Destructuring assignment
const { name: fullName, age, city, country = "USA" } = person;

// Using the extracted values
// You can also use aliasing during destructuring to assign the extracted values to variables with different names:
console.log(fullName); // Output: John
console.log(age); // Output: 30
console.log(city); // Output: New York

// You can also provide default values during destructuring in case the property is not present in the object:
console.log(country); // Output: USA (default value used because 'country' property is not in the 'person' object)
