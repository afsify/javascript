### 1. **Selecting Elements**

JavaScript provides multiple methods to select DOM elements.

- **`getElementById`**: Selects an element by its ID.
  ```javascript
  const element = document.getElementById("myId");
  ```

- **`getElementsByClassName`**: Selects all elements with a specific class.
  ```javascript
  const elements = document.getElementsByClassName("myClass");
  ```

- **`getElementsByTagName`**: Selects all elements with a specific tag.
  ```javascript
  const elements = document.getElementsByTagName("p");
  ```

- **`querySelector`**: Selects the first element that matches a CSS selector.
  ```javascript
  const element = document.querySelector(".myClass");
  ```

- **`querySelectorAll`**: Selects all elements that match a CSS selector.
  ```javascript
  const elements = document.querySelectorAll(".myClass");
  ```

### 2. **Traversing the DOM**

- **`parentNode`**: Accesses the parent element.
  ```javascript
  const parent = element.parentNode;
  ```

- **`children`**: Accesses all child elements.
  ```javascript
  const children = element.children;
  ```

- **`nextElementSibling`**: Accesses the next sibling element.
  ```javascript
  const nextSibling = element.nextElementSibling;
  ```

- **`previousElementSibling`**: Accesses the previous sibling element.
  ```javascript
  const prevSibling = element.previousElementSibling;
  ```

### 3. **Creating Elements**

- **`createElement`**: Creates a new element.
  ```javascript
  const newDiv = document.createElement("div");
  ```

- **Adding Content**: Use `textContent` or `innerHTML`.
  ```javascript
  newDiv.textContent = "Hello World!";
  ```

- **Appending to the DOM**: Use `appendChild` or `append`.
  ```javascript
  document.body.appendChild(newDiv);
  ```

### 4. **Updating Elements**

- **`textContent`**: Sets or retrieves the text content.
  ```javascript
  element.textContent = "New Text";
  ```

- **`innerHTML`**: Sets or retrieves the HTML content.
  ```javascript
  element.innerHTML = "<p>New HTML content</p>";
  ```

- **Attributes**: Set, get, or remove attributes.
  ```javascript
  element.setAttribute("class", "newClass");
  const className = element.getAttribute("class");
  element.removeAttribute("class");
  ```

### 5. **Styling Elements**

- **`style`**: Directly style elements.
  ```javascript
  element.style.color = "blue";
  element.style.backgroundColor = "yellow";
  ```

- **`classList`**: Add, remove, toggle, and check classes.
  ```javascript
  element.classList.add("myClass");
  element.classList.remove("myClass");
  element.classList.toggle("myClass");
  ```

### 6. **Event Handling**

- **`addEventListener`**: Attaches an event listener.
  ```javascript
  element.addEventListener("click", () => {
    console.log("Element clicked!");
  });
  ```

- **Removing an Event Listener**:
  ```javascript
  function handleClick() {
    console.log("Clicked");
  }
  element.addEventListener("click", handleClick);
  element.removeEventListener("click", handleClick);
  ```

### 7. **Form Handling**

- **Getting Form Values**: Retrieve the values from input elements.
  ```javascript
  const inputValue = document.querySelector("#inputField").value;
  ```

- **Setting Form Values**: Set values in input elements.
  ```javascript
  document.querySelector("#inputField").value = "New Value";
  ```

### 8. **Removing Elements**

- **`removeChild`**: Removes a child element.
  ```javascript
  const parent = document.getElementById("parent");
  const child = document.getElementById("child");
  parent.removeChild(child);
  ```

- **`remove`**: Removes an element directly.
  ```javascript
  element.remove();
  ```

### 9. **Advanced DOM Manipulation**

- **`replaceChild`**: Replaces an existing child with a new element.
  ```javascript
  const newElement = document.createElement("div");
  parent.replaceChild(newElement, oldChild);
  ```

- **`cloneNode`**: Clones an element.
  ```javascript
  const clone = element.cloneNode(true); // true clones with children
  ```

### 10. **Example: Interactive DOM Manipulation**

Creating a simple To-Do List application using DOM manipulation.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>To-Do List</title>
</head>
<body>
  <input type="text" id="taskInput" placeholder="Add a new task" />
  <button id="addTaskBtn">Add Task</button>
  <ul id="taskList"></ul>

  <script>
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    addTaskBtn.addEventListener("click", () => {
      const taskText = taskInput.value.trim();
      if (taskText !== "") {
        const taskItem = document.createElement("li");
        taskItem.textContent = taskText;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", () => {
          taskItem.remove();
        });

        taskItem.appendChild(deleteBtn);
        taskList.appendChild(taskItem);

        taskInput.value = "";
      }
    });
  </script>
</body>
</html>
```

### 11. **Document Fragments**

Useful for performance when adding multiple elements.

```javascript
const fragment = document.createDocumentFragment();
for (let i = 0; i < 5; i++) {
  const item = document.createElement("p");
  item.textContent = `Item ${i + 1}`;
  fragment.appendChild(item);
}
document.body.appendChild(fragment);
```

### 12. **Using `innerHTML` vs. `textContent`**

- **`innerHTML`**: Parses HTML strings as markup.
- **`textContent`**: Inserts plain text (safe for dynamic content).
  
  ```javascript
  element.innerHTML = "<p>HTML Content</p>";
  element.textContent = "<p>Plain Text</p>";
  ```

---

Here's a series of practical examples with HTML for each major DOM manipulation concept in JavaScript. You can copy each block of HTML and JavaScript into your editor and try it out to see the results directly.

### 1. **Selecting Elements**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Selecting Elements</title>
</head>
<body>
  <h1 id="title">Hello, World!</h1>
  <p class="text">This is a paragraph.</p>
  <p class="text">This is another paragraph.</p>

  <script>
    // Select element by ID
    const title = document.getElementById("title");
    console.log("ID:", title.textContent);

    // Select elements by class
    const texts = document.getElementsByClassName("text");
    console.log("Class:", texts[0].textContent, texts[1].textContent);

    // Select element by querySelector
    const firstText = document.querySelector(".text");
    console.log("querySelector:", firstText.textContent);

    // Select all elements with querySelectorAll
    const allTexts = document.querySelectorAll(".text");
    allTexts.forEach(text => console.log("querySelectorAll:", text.textContent));
  </script>
</body>
</html>
```

### 2. **Traversing the DOM**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Traversing the DOM</title>
</head>
<body>
  <div id="parent">
    <p class="child">First Child</p>
    <p class="child">Second Child</p>
    <p class="child">Third Child</p>
  </div>

  <script>
    const parent = document.getElementById("parent");

    // Accessing children
    const children = parent.children;
    console.log("Children:", children);

    // Accessing siblings
    const firstChild = children[0];
    console.log("Next Sibling:", firstChild.nextElementSibling.textContent);
    console.log("Previous Sibling:", children[1].previousElementSibling.textContent);
  </script>
</body>
</html>
```

### 3. **Creating and Appending Elements**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Creating Elements</title>
</head>
<body>
  <div id="container"></div>

  <script>
    const container = document.getElementById("container");

    // Creating a new element
    const newElement = document.createElement("p");
    newElement.textContent = "This is a new paragraph!";

    // Appending to the DOM
    container.appendChild(newElement);
  </script>
</body>
</html>
```

### 4. **Updating Elements**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Updating Elements</title>
</head>
<body>
  <p id="paragraph">Old Text</p>
  <button onclick="updateText()">Update Text</button>

  <script>
    function updateText() {
      const paragraph = document.getElementById("paragraph");
      paragraph.textContent = "New Updated Text!";
    }
  </script>
</body>
</html>
```

### 5. **Styling Elements**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Styling Elements</title>
</head>
<body>
  <p id="styledText">Style me!</p>
  <button onclick="applyStyles()">Apply Styles</button>

  <script>
    function applyStyles() {
      const text = document.getElementById("styledText");
      text.style.color = "white";
      text.style.backgroundColor = "blue";
      text.style.padding = "10px";
    }
  </script>
</body>
</html>
```

### 6. **Event Handling**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Event Handling</title>
</head>
<body>
  <button id="clickMeBtn">Click Me!</button>

  <script>
    const button = document.getElementById("clickMeBtn");

    button.addEventListener("click", () => {
      alert("Button clicked!");
    });
  </script>
</body>
</html>
```

### 7. **Form Handling**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Form Handling</title>
</head>
<body>
  <input type="text" id="inputField" placeholder="Enter text" />
  <button onclick="showInputValue()">Show Value</button>

  <script>
    function showInputValue() {
      const inputField = document.getElementById("inputField");
      alert("You entered: " + inputField.value);
    }
  </script>
</body>
</html>
```

### 8. **Removing Elements**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Removing Elements</title>
</head>
<body>
  <div id="toRemove">This will be removed</div>
  <button onclick="removeElement()">Remove Element</button>

  <script>
    function removeElement() {
      const element = document.getElementById("toRemove");
      element.remove();
    }
  </script>
</body>
</html>
```

### 9. **Replacing Elements**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Replacing Elements</title>
</head>
<body>
  <div id="parentDiv">
    <p id="oldElement">Old Element</p>
  </div>
  <button onclick="replaceElement()">Replace Element</button>

  <script>
    function replaceElement() {
      const newElement = document.createElement("p");
      newElement.textContent = "New Element";

      const oldElement = document.getElementById("oldElement");
      const parentDiv = document.getElementById("parentDiv");

      parentDiv.replaceChild(newElement, oldElement);
    }
  </script>
</body>
</html>
```

### 10. **Creating a Simple To-Do List**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>To-Do List</title>
</head>
<body>
  <input type="text" id="taskInput" placeholder="Add a new task" />
  <button onclick="addTask()">Add Task</button>
  <ul id="taskList"></ul>

  <script>
    function addTask() {
      const taskInput = document.getElementById("taskInput");
      const taskText = taskInput.value;

      if (taskText.trim() !== "") {
        const taskItem = document.createElement("li");
        taskItem.textContent = taskText;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function () {
          taskItem.remove();
        };

        taskItem.appendChild(deleteButton);
        document.getElementById("taskList").appendChild(taskItem);

        taskInput.value = "";
      }
    }
  </script>
</body>
</html>
```
