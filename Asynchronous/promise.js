// ======================================== PROMISE ========================================

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
