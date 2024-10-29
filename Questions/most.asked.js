//! ===================================== Most Asked Easy Questions =====================================

//* 1. Fibonacci sequence

function fibonacci(n) {
  let sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    sequence[i] = sequence[i - 1] + sequence[i - 2];
  }
  return sequence;
}
console.log(fibonacci(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

//* 2. Factorial of a Number

function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5)); // Output: 120

//* 3. Check Prime Number

function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
console.log(isPrime(7)); // Output: true

//* 4. Check if Array is Sorted

function isSorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) return false;
  }
  return true;
}
console.log(isSorted([1, 2, 3, 4])); // Output: true
console.log(isSorted([1, 3, 2])); // Output: false

//* 5. Find the Largest Number in an Array

function findLargest(arr) {
  return Math.max(...arr);
}
console.log(findLargest([1, 5, 3, 9, 2])); // Output: 9

//* 6. Reverse a String

function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("hello")); // Output: "olleh"

//* 7. Calculate the Sum of an Array

function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}
console.log(sumArray([1, 2, 3, 4])); // Output: 10

//* 8. Check Palindrome

function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}
console.log(isPalindrome("racecar")); // Output: true

//* 9. Find the nth Term of an Arithmetic Sequence

function nthTerm(a, d, n) {
  return a + (n - 1) * d;
}
console.log(nthTerm(3, 2, 5)); // Output: 11

//* 10. Sort an Array (Bubble Sort)

function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
console.log(bubbleSort([5, 3, 8, 4])); // Output: [3, 4, 5, 8]

//* 11. Count Vowels in a String

function countVowels(str) {
  const vowels = "aeiouAEIOU";
  return [...str].filter((char) => vowels.includes(char)).length;
}
console.log(countVowels("hello")); // Output: 2

//* 12. Find Unique Elements in an Array

function findUnique(arr) {
  return [...new Set(arr)];
}
console.log(findUnique([1, 2, 2, 3, 4, 4])); // Output: [1, 2, 3, 4]

//* 13. Find Second Largest Number in an Array

function secondLargest(arr) {
  let max = Math.max(...arr);
  arr = arr.filter((num) => num !== max); // Remove largest element
  return Math.max(...arr);
}
console.log(secondLargest([1, 5, 3, 9, 2])); // Output: 5

//* 14. Remove Duplicates from an Array

function removeDuplicates(arr) {
  return [...new Set(arr)];
}
console.log(removeDuplicates([1, 2, 2, 3, 3, 4])); // Output: [1, 2, 3, 4]

//* 15. Count Occurrences of Each Element in an Array

function countOccurrences(arr) {
  return arr.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});
}
console.log(countOccurrences([1, 2, 2, 3, 4, 4, 4])); // Output: {1: 1, 2: 2, 3: 1, 4: 3}

//* 16. Merge Two Sorted Arrays

function mergeSortedArrays(arr1, arr2) {
  return [...arr1, ...arr2].sort((a, b) => a - b);
}
console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // Output: [1, 2, 3, 4, 5, 6]

//* 17. Find the Intersection of Two Arrays

function arrayIntersection(arr1, arr2) {
  return arr1.filter((element) => arr2.includes(element));
}
console.log(arrayIntersection([1, 2, 3], [2, 3, 4])); // Output: [2, 3]

//* 18. Check if String Contains Only Digits

function isNumeric(str) {
  return /^\d+$/.test(str);
}
console.log(isNumeric("12345")); // Output: true
console.log(isNumeric("123a5")); // Output: false

//* 19. Capitalize the First Letter of Each Word in a String

function capitalizeWords(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
console.log(capitalizeWords("hello world")); // Output: "Hello World"

//* 20. Flatten a Nested Array

function flattenArray(arr) {
  return arr.reduce((flat, toFlatten) => flat.concat(toFlatten), []);
}
console.log(flattenArray([1, [2, 3], [4, 5]])); // Output: [1, 2, 3, 4, 5]
