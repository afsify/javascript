function updateText() {
  const text = document.getElementById("paragraph");
  text.textContent = "This is new";
}

function styleHeading() {
  const heading = document.getElementById("heading");
  heading.style.color = "red";
  heading.style.backgroundColor = "black";
}

const btn = document.getElementById("clickMeBtn");
btn.addEventListener("click", () => {
  alert("Button Clicked");
});

function remove() {
  const element = document.getElementById("toRemove");
  element.remove();
}

function replaceText() {
  const newElement = document.createElement("h1");
  newElement.textContent = "Bigger Text";

  const oldElement = document.getElementById("oldElement");
  const parentDiv = document.getElementById("parentDiv");

  parentDiv.replaceChild(newElement, oldElement);
}

const child = document.getElementById("child");
const parent = child.parentElement;

function changeBg() {
  parent.style.backgroundColor = "green";
}
