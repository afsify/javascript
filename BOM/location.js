//! ======================================== Location ========================================

// The window.location object can be used to get the current page address (URL) and to
// redirect the browser to a new page.

window.location.href
// returns the href (URL) of the current page
window.location.hostname
// returns the domain name of the web host
window.location.pathname
// returns the path and filename of the current page
window.location.protocol
// returns the web protocol used (http: or https:)
window.location.assign()
// loads a new document

document.getElementById("demo").innerHTML =
"Page location is " + window.location.href;