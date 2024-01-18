//! ======================================== Promise ========================================

// A Promise in JavaScript is an object representing the eventual completion or failure of an
// asynchronous operation and its resulting value. It is a way to handle asynchronous code
// more elegantly and avoid callback hell (nested callbacks).

// A Promise has three states:
// Pending: The initial state; the promise is neither fulfilled nor rejected.
// Fulfilled: The operation completed successfully, and the promise has a resulting value.
// Rejected: The operation failed, and the promise has a reason for the failure.

// Simulating a function that fetches data from a server
function fetchData() {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous operation (e.g., fetching data from a server)
    setTimeout(() => {
      const success = true; // Simulating success or failure
      if (success) {
        const data = "Hello, this is some fetched data!";
        resolve(data); // Resolve with the fetched data
      } else {
        reject("Error: Unable to fetch data."); // Reject with an error message
      }
    }, 2000); // Simulating a 2-second delay
  });
}

// Using the fetchData function with Promise syntax
fetchData()
  .then((data) => {
    console.log("Success:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

//? Promise methods:

// then(): This method is used to handle the fulfilled state of a promise.

// catch(): This method is used to handle the rejected state of a promise.

// finally(): This method is used to specify a function that should be executed when
// the promise is either fulfilled or rejected.

// Promise.resolve(): This method returns a resolved promise with a given value.

// Promise.reject(): This method returns a rejected promise with a given reason.

// Promise.all(): This method takes an array of promises and returns a single promise
// that resolves when all the promises in the array have resolved.
{
  const promises = [promise1, promise2, promise3];
  Promise.all(promises)
    .then((results) => {
      // Handle the results when all promises are fulfilled
    })
    .catch((error) => {
      // Handle an error if any of the promises is rejected
    });
}

// Promise.race(): This method takes an array of promises and returns a single promise
// that resolves or rejects as soon as one of the promises in the array resolves or rejects.
{
  const promises = [promise1, promise2, promise3];
  Promise.race(promises)
    .then((firstResult) => {
      // Handle the result of the first promise that resolves
    })
    .catch((firstError) => {
      // Handle the error of the first promise that rejects
    });
}
