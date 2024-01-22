//! ===================================== Event Bubbling =====================================

// Event bubbling is a phase in the event propagation model where an event, such as a click or
// keypress, starts from the target element that triggered the event and then "bubbles up" through
// its ancestors in the DOM hierarchy.

//? Capturing Phase:
// The event starts from the outermost ancestor element and moves towards the target element.

//? Target Phase:
// The event reaches the target element (the element on which the event originally occurred).

//? Bubbling Phase:
// The event starts bubbling up from the target element towards the outermost ancestor element.

// Event bubbling in React JSX refers to the natural order in which events are handled by nested
// components. When an event occurs in a nested component, it bubbles up through the component hierarchy.

// ParentComponent.jsx
import React from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent() {
  const handleParentClick = () => {
    console.log("Parent clicked");
  };

  return (
    <div onClick={handleParentClick}>
      <ChildComponent />
    </div>
  );
}

// ChildComponent.jsx
import React from "react";

function ChildComponent() {
  const handleChildClick = () => {
    console.log("Child clicked");
  };

  return <div onClick={handleChildClick}>Click me (Child)</div>;
}

export default ParentComponent;

// Clicking on the "Click me (Child)" text will trigger both the child and parent
// click handlers in that order.
