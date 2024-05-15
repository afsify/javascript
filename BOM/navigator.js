//! ======================================== Navigator ========================================

// The window.navigator object contains information about the visitor's browser.

// navigator.cookieEnabled
// navigator.appCodeName
// navigator.platform

// The cookieEnabled property returns true if cookies are enabled, otherwise false:

{/* <p id="demo"></p>
<script> */}
document.getElementById("demo").innerHTML =
"cookiesEnabled is " + navigator.cookieEnabled;
{/* </script> */}