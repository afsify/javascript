# JavaScript

JavaScript is single threaded and synchronous by default. This means that it has a single main thread of execution, and each operation is performed one at a time in a sequential manner. The term "single threaded" indicates that JavaScript code is executed in a single sequence or order, and each operation is completed before the next one begins.

The global execution context is the top level or outermost context in which JavaScript code is executed. When a JavaScript program starts running, the global execution context is created, providing a global scope for variables, functions, and other constructs.

**Call Stack:**

- The call stack is a data structure that keeps track of function calls in the program.
- When a function is called, it is added to the top of the call stack. When a function completes, it is       removed from the stack.

**Callback Queue:**

- JavaScript uses a callback queue to manage asynchronous operations and events.
- Asynchronous tasks, such as timers, network requests, or user interactions, are handled by the browser or runtime environment.
- When an asynchronous task is complete, its callback function is pushed into the callback queue.

**Event Loop:**

- The event loop constantly checks two main structures: the call stack and the callback queue.
- If the call stack is empty, the event loop takes the first function from the callback queue and pushes it onto the call stack for execution.
- This process ensures that asynchronous tasks do not block the main thread and that their associated callback functions are executed when the call stack is clear.

## Best Practices for JavaScript Coding

Below are some of the best practices that can be followed while JavaScript coding in order to make your code cleaner, shorter, and easier to read.

## Semicolons in Statements

JavaScript statements do not strictly require semicolons at the end, but it is always a good practice to end them with a semicolon.

```JavaScript
let x = 5;
console.log(x);
```

## Meaningful Variable Names

Use meaningful names for variables. For boolean variables, consider adding 'is' at the beginning, such as `isComplete`, `isLoaded`, etc.

```JavaScript
let isComplete = true;
let isLoaded = false;
```

## Avoid Redundancy in Naming

Avoid redundancy in naming objects and their properties. For example, consider an object like 'employee'.

Avoid declaring

```JavaScript
let employee = {
  employeeId:1,
  employeeName:”John”,
  employeeSalary:50000
}
```

Instead declare as

```JavaScript
let employee={
  id:1,
  name:”John”,
  salary:50000
}
```

## Variable Declarations

- Use `var` for variable declarations when you want them to get hoisted to the top of the program.
- Use `let` for variable declarations that will change their value over time and to have block scope.
- Use `const` for variables that don't need to be reassigned.

```JavaScript
console.log(hoistedVar); // Output: undefined
var hoistedVar = "I can be hoisted!";
console.log(hoistedVar); // Output: I can be hoisted!
```

## Global Variable Declaration

Avoid global declaration of variables for security concerns and optimal memory utilization.

## Strict Comparisons

Use '===' instead of '==' for strict comparisons.

```JavaScript
let num = 5;
if (num === "5") {
  console.log("Strict comparison");
} else {
  console.log("Not strictly equal");
}
```

## Comments

Add comments wherever necessary for documentation purposes, but avoid commenting out code.

```JavaScript
// This is a single-line comment

/*
  This is a
  multi-line comment
*/
```

## Arrow Functions

Use arrow functions in place of function expressions whenever you want to preserve the lexical value of 'this'. Arrow functions have a shorter syntax, helping to keep the code clean, shorter, and more readable.

```JavaScript
let add = (a, b) => a + b;
```

## Template Literals

Use template literals to construct strings with special characters, to concatenate strings and values, and to preserve newlines.

```JavaScript
let name = "John";
let greeting = `Hello, ${name}!`;
```

## Destructuring

Use destructuring syntax to extract values from objects and arrays, reducing the number of lines of code and not modifying the original object/array values.

```JavaScript
let person = { firstName: "John", lastName: "Doe" };
let { firstName, lastName } = person;
```

## Rest Operator

Use the rest operator when passing an indefinite amount of arguments to a function.

```JavaScript
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}
```

## Spread Operator

Use the spread operator when passing a set of variables to a function from an array and when concatenating arrays.

```JavaScript
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];
```

## Async-Await

Use async-await instead of promises or callbacks to keep the code short, clean, and more readable.

```JavaScript
async function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data fetched successfully!");
    }, 1000);
  });
}

async function processData() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}
```

## JavaScript Classes

Use JavaScript classes to write cleaner and simpler code.

```JavaScript
class Dog {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  bark() {
    console.log("Woof!");
  }
}
```

## For..of Loop

Use the for..of loop instead of traditional for loops to iterate over the values of an array, making the code cleaner and shorter.

```JavaScript
let numbers = [1, 2, 3, 4, 5];
for (let number of numbers) {
  console.log(number);
}
```

## JavaScript Security Best Practices

Below are some of the security best practices to be considered during JavaScript coding in order to safeguard the application from different security attacks.

1. **Keep Code Up to Date:**
   - Regularly update your codebase to include the latest security patches and fixes.

2. **Use Latest Frameworks or Libraries:**
   - Utilize up-to-date or the latest version frameworks or libraries for building applications.

3. **Use Latest Version Browser:**
   - Ensure the use of the latest version of web browsers to benefit from the latest security features.

4. **Safe Handling of Cookies:**
   - Cookies should be saved and used securely.
   - Avoid persisting sensitive or critical information in cookies.
   - Set proper expiry dates for cookies.
   - Consider encrypting information stored in cookies.

5. **Avoid using eval() Function:**
   - Refrain from using the `eval()` function as it can be misused by attackers to execute malicious code.

6. **Use Linters:**
   - Linters help avoid coding mistakes during development, improving code quality.
   - Examples of commonly used linters: JSLint, JSHint, ESLint.

7. **JavaScript Security Analyzers:**
   - Utilize tools that perform code analysis on client-side applications to identify vulnerabilities.
   - Helps in writing secure code to prevent common security attacks.

8. **JavaScript Obfuscation:**
   - Employ obfuscation techniques to convert JavaScript code into a more secure form, preventing various types of attacks.

## Clone the Repository

In the terminal, use the following command:

```bash
git clone https://github.com/afsify/javascript.git
```
