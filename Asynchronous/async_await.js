//! ===================================== Async/Await =====================================

// async Function:
// The async keyword is used before a function declaration.
// It makes the function asynchronous, allowing the use of await inside it.
// Async functions always return a Promise.

async function myAsyncFunction() {
  return "Hello, this is asynchronous!";
}

// await Operator:
// The await keyword is used inside an async function to wait for a Promise to resolve.
// It can only be used inside an async function.
// It makes asynchronous code look and behave more like synchronous code.

async function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data fetched successfully!");
    }, 2000);
  });
}

async function processData() {
  const data = await fetchData();
  console.log("Processed data:", data);
}

/*
| Feature        | Async/Await                                             | Promises                                             |
|----------------|---------------------------------------------------------|------------------------------------------------------|
| Scope          | The entire wrapper function is asynchronous.            | Only the promise chain itself is asynchronous.       |
| Logic          | Synchronous work needs to be moved out of the callback. | Synchronous work can be handled in the same callback.|
|                | Multiple promises can be handled with simple variables. | Multiple promises use Promise.all().                 |
| Error Handling | You can use try, catch, and finally.                    | You can use then, catch, and finally.                |
*/
