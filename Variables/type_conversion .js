//! ===================================== Type Conversion  =====================================

// Type casting, also known as type conversion, refers to the process of converting a value from one
// data type to another in a programming language. JavaScript is a loosely typed language, meaning
// that variables can change their data type dynamically during runtime.

//* Implicit type casting (Coercion)
// occurs automatically when values of different types are used together in an operation or expression.
{
  const num = 5;
  const str = "10";

  const result = num + str; // JavaScript converts `num` to a string before concatenation
  console.log(result); // Output: '510'
}

//* Explicit type casting
// involves manually converting a value from one type to another using built-in functions or methods.

//? Converting to Integer (parseInt()):
// The parseInt() function is used to parse a string and convert it into an integer. It takes two parameters:
// the string to be converted and an optional radix (base of the numeral system, usually 10 for decimal).
{
  let stringValue = "42";
  let intValue = parseInt(stringValue);

  console.log(intValue); // Output: 42
}

{
  let binaryString = "1010";
  let decimalValue = parseInt(binaryString, 2);

  console.log(decimalValue); // Output: 10
}

//? Converting to Float (parseFloat()):
// The parseFloat() function is used to parse a string and convert it into a floating-point number.
{
  let floatValue = parseFloat("3.14");

  console.log(floatValue); // Output: 3.14
}

//? Type Conversion to Integer (Number() or + operator):
// Using the Number() constructor or the unary plus (+) operator can also be used for converting
// values to integers.
{
  let numericString = "123";
  let numericValue = Number(numericString);

  console.log(numericValue); // Output: 123
}

{
  let anotherNumericString = "456";
  let anotherNumericValue = +anotherNumericString;

  console.log(anotherNumericValue); // Output: 456
}
