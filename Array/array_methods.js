//! ======================================== Array Methods ========================================

//? push():
// Adds one or more elements to the end of an array.
{
  let fruits = ["apple", "orange"];
  fruits.push("banana");
  console.log(fruits); // Output: ['apple', 'orange', 'banana']
}

//? pop():
// Removes the last element from the end of an array.
{
  let fruits = ["apple", "orange", "banana"];
  let removedFruit = fruits.pop();
  console.log(removedFruit); // Output: 'banana'
  console.log(fruits); // Output: ['apple', 'orange']
}

//? shift():
// Removes the first element from the beginning of an array.
{
  let fruits = ["apple", "orange", "banana"];
  let removedFruit = fruits.shift();
  console.log(removedFruit); // Output: 'apple'
  console.log(fruits); // Output: ['orange', 'banana']
}

//? unshift():
// Adds one or more elements to the beginning of an array.
{
  let fruits = ["orange", "banana"];
  fruits.unshift("apple");
  console.log(fruits); // Output: ['apple', 'orange', 'banana']
}

//? concat():
// Combines two or more arrays.
{
  let fruits = ["apple", "orange"];
  let additionalFruits = ["banana", "grape"];
  let combinedFruits = fruits.concat(additionalFruits);
  console.log(combinedFruits); // Output: ['apple', 'orange', 'banana', 'grape']
}

//? slice():
// Returns a portion of an array.
{
  let fruits = ["apple", "orange", "banana", "grape"];
  let citrusFruits = fruits.slice(1, 3);
  console.log(citrusFruits); // Output: ['orange', 'banana']
}

//? indexOf():
// Returns the index of the first occurrence of a specified element in an array.
{
  let fruits = ["apple", "orange", "banana", "grape"];
  let bananaIndex = fruits.indexOf("banana");
  console.log(bananaIndex); // Output: 2
}

//? indexOf (with optional parameters):
// Searches the array for an element and returns the
// index of its first occurrence.
{
  let fruits = ["apple", "orange", "banana", "grape"];
  let orangeIndex = fruits.indexOf("orange", 2);
  console.log(orangeIndex); // Output: -1 (not found, starting search from index 2)
}

//? lastIndexOf():
// Returns the index of its last occurrence of a specified element within an array.
{
  let fruits = ["apple", "orange", "banana", "orange"];
  let lastOrangeIndex = fruits.lastIndexOf("orange");
  console.log(lastOrangeIndex); // Output: 3
}

//? lastIndexOf (with optional parameters):
//Searches the array for an element and returns the index of its last occurrence.
{
  let fruits = ["apple", "orange", "banana", "orange"];
  let orangeIndex = fruits.lastIndexOf("orange", 2);
  console.log(orangeIndex); // Output: 1 (found, searching backward from index 2)
}

//? forEach():
// Executes a provided function once for each array element.
{
  let numbers = [1, 2, 3];
  numbers.forEach(function (num) {
    console.log(num * 2);
  });
  // Output:
  // 2
  // 4
  // 6
}

//? join():
// Joins all elements of an array into a string.
{
  let fruits = ["apple", "orange", "banana"];
  let fruitString = fruits.join(", ");
  console.log(fruitString); // Output: 'apple, orange, banana'
}

//? reverse():
// Reverses the elements of an array.
{
  let numbers = [1, 2, 3];
  let reversedNumbers = numbers.reverse();
  console.log(reversedNumbers); // Output: [3, 2, 1]
}

//? sort():
// Sorts the elements of an array.
{
  let fruits = ["banana", "apple", "orange"];
  let sortedFruits = fruits.sort();
  console.log(sortedFruits); // Output: ['apple', 'banana', 'orange']
}

//? filter():
// Creates a new array with elements that pass a test specified by a function.
{
  let numbers = [1, 2, 3, 4, 5];
  let evenNumbers = numbers.filter(function (num) {
    return num % 2 === 0;
  });
  console.log(evenNumbers); // Output: [2, 4]
}

//? map():
// Creates a new array with the results of calling a provided function on every
// element in the array.
{
  let numbers = [1, 2, 3];
  let squaredNumbers = numbers.map(function (num) {
    return num * num;
  });
  console.log(squaredNumbers); // Output: [1, 4, 9]
}

//? reduce():
// Applies a function against an accumulator and each element in the array
// (from left to right) to reduce it to a single value.
{
  let numbers = [1, 2, 3, 4];
  let sum = numbers.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  }, 0);
  console.log(sum); // Output: 10
}

//? splice():
// Changes the contents of an array by removing or replacing existing elements
// and/or adding new elements in place.
{
  let numbers = [1, 2, 3, 4, 5];
  numbers.splice(2, 1, 6, 7);
  console.log(numbers); // Output: [1, 2, 6, 7, 4, 5]
}

//? every():
// Tests whether all elements in the array pass the provided function.
{
  let numbers = [2, 4, 6, 8];
  let allEven = numbers.every(function (num) {
    return num % 2 === 0;
  });
  console.log(allEven); // Output: true
}

//? some():
// Tests whether at least one element in the array passes the provided function.
{
  let numbers = [1, 3, 5, 6];
  let hasEven = numbers.some(function (num) {
    return num % 2 === 0;
  });
  console.log(hasEven); // Output: true
}

//? find():
// Returns the first element in the array that satisfies the provided testing function.
{
  let numbers = [5, 10, 15, 20];
  let foundNumber = numbers.find(function (num) {
    return num > 12;
  });
  console.log(foundNumber); // Output: 15
}

//? includes():
// Checks if an array includes a specific element and returns a boolean.
{
  let fruits = ["apple", "banana", "orange"];
  console.log(fruits.includes("banana")); // Output: true
  console.log(fruits.includes("grape")); // Output: false
}
