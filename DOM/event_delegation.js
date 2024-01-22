//! ===================================== Event Delegation =====================================

// Event delegation is a technique in JavaScript where a single event listener is attached to a
// common ancestor rather than each individual child element. This allows you to handle events
// for multiple elements with a single handler.

// Event delegation in React JSX involves attaching a single event listener to a common ancestor,
// which can handle events for multiple child components.

// ButtonList.jsx
import React from "react";

function ButtonList() {
  const handleButtonClick = (event) => {
    console.log(`Button clicked: ${event.target.textContent}`);
  };

  return (
    <ul onClick={handleButtonClick}>
      <li>Button 1</li>
      <li>Button 2</li>
      <li>Button 3</li>
    </ul>
  );
}

export default ButtonList;

// In this example, clicking on any list item (<li>) triggers the same event handler,
// and the event object helps identify which button was clicked.
