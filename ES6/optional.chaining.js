//! ================================== Optional Chaining Operator ==================================

// The optional chaining operator (?.) is a JavaScript feature that allows you to safely access properties
// and methods on objects, even if some of the nested properties or the object itself may be null or undefined.
// It prevents errors that would occur if you tried to access properties on a non-existent object.

const user = {
  id: 1,
  name: "John",
  address: {
    city: "New York",
    postalCode: "10001",
  },
  orders: null,
};

// Using optional chaining
const city = user?.address?.city ?? "Unknown";

console.log(city); // Output: 'New York' or 'Unknown' if 'address' is null or undefined
