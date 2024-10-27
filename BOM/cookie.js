//! ======================================= Cookie =======================================

// Cookies are data, stored in small text files, on your computer.
// When a web server has sent a web page to a browser, the connection is shut down, and
// the server forgets everything about the user.

// Cookies were invented to solve the problem "how to remember information about the user":

// When a user visits a web page, his/her name can be stored in a cookie.
// Next time the user visits the page, the cookie "remembers" his/her name.
// Cookies are saved in name-value pairs like:

document.cookie = "username=John Doe";