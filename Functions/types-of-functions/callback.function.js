//! ====================================== Callback Function ======================================

// Functions passed as arguments to another function.
// Executed after the completion of the parent function.

// Simulate an asynchronous operation
function fetchData(callback) {
  setTimeout(() => {
    const data = "Hello, this is some data!";
    callback(data);
  }, 2000); // Simulating a 2-second delay
}

// Callback function to handle the fetched data
function handleData(data) {
  console.log("Fetched data:", data);
}

// Call the fetchData function with the callback
fetchData(handleData);
