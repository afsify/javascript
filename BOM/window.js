//! ======================================== Window Object ========================================

// The Browser Object Model (BOM) allows JavaScript to "talk to" the browser.

// All global JavaScript objects, functions, and variables automatically become members of the window object.
// Global variables are properties of the window object.
// Global functions are methods of the window object.
// Even the document object (of the HTML DOM) is a property of the window object:

window.document.getElementById("header");

window.innerHeight 
// - the inner height of the browser window (in pixels)
window.innerWidth 
// - the inner width of the browser window (in pixels)
window.open() 
// - open a new window
window.close() 
// - close the current window
window.moveTo() 
// - move the current window
window.resizeTo() 
// - resize the current window