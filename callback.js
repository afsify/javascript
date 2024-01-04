// ======================================== CALLBACK ========================================

// In JavaScript, a callback is a function passed as an argument to another function. The callback
// function is then invoked or executed inside the outer function, often after some asynchronous
// operation or upon completion of a task. Callbacks are commonly used in scenarios where you want
// a function to wait for the completion of another operation before executing further code.

// Function that performs an asynchronous operation (simulated with setTimeout)
function fetchData(callback) {
  setTimeout(function () {
    // Simulate fetching data
    const data = "Hello, this is some data!";
    // Invoke the callback with the fetched data
    callback(data);
  }, 2000); // Simulating a 2-second delay
}

// Callback function to be executed after fetching data
function processData(data) {
  console.log("Processing data:", data.toUpperCase());
}

// Using the fetchData function with the processData callback
fetchData(processData);
