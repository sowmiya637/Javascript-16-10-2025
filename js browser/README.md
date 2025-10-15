Here’s your Browser JS Example README fully formatted in **Markdown** (`README.md`) language:

# Browser JavaScript Example

This project demonstrates basic **DOM manipulation**, **Events**, **Local Storage**, **History API**, and **Media API** in a browser using vanilla JavaScript.

---

## Features

- Change HTML content dynamically using the **DOM**  
- Handle button clicks using **JavaScript events**  
- Save and retrieve data in the browser using **Local Storage**  
- Manipulate browser history using the **History API**  
- Access user media (camera) using the **Media API**

````
## Code Explanation

### DOM Manipulation

```javascript
const title = document.getElementById("title");
title.textContent = "Title Changed!";
````

* Accesses an HTML element by its ID using `document.getElementById`.
* Modifies the element's text content dynamically.

### Event Handling

```javascript
const btn = document.getElementById("changeBtn");
btn.addEventListener("click", () => {
  title.textContent = "Title Changed!";
});
```

* Adds a click event listener to a button.
* Executes a function when the event occurs (changes heading text).

### Local Storage

```javascript
const saveBtn = document.getElementById("saveBtn");
const nameInput = document.getElementById("nameInput");
saveBtn.addEventListener("click", () => {
  localStorage.setItem("username", nameInput.value);
  alert("Saved: " + nameInput.value);
});
```

* `localStorage` allows storing data in the browser permanently (until cleared).
* `setItem(key, value)` stores the data.
* Data can be retrieved later using `localStorage.getItem(key)`.

### History API

```javascript
history.pushState({ page: 2 }, "Page 2", "?page=2");
```

* Adds a new entry to the browser history without reloading the page.
* First argument: state object associated with the new history entry.
* Second argument: page title (mostly ignored by browsers).
* Third argument: URL shown in the address bar.

### Media API

```javascript
navigator.mediaDevices.getUserMedia({ video: true })
  .then(stream => {
    const video = document.createElement("video");
    video.srcObject = stream;
    video.autoplay = true;
    video.width = 320;
    document.getElementById("camera").appendChild(video);
  })
  .catch(err => console.error(err));
```

* Requests access to the user's camera.
* Returns a **media stream** if permission is granted.
* Dynamically creates a `<video>` element and displays the live camera feed.
* Handles errors if the user denies permission or the device has no camera.

---

## Browser Permissions

* **Camera Access**: The browser will prompt the user for permission to access the camera.
* **Local Storage**: Stored data persists across page reloads and browser restarts.
* **History API**: Can change URL without reloading, enabling SPA-like behavior.

---


