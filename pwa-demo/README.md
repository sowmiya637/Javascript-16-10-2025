
# PWA Demo App

This project demonstrates a **Progressive Web App (PWA)** that works offline, saves notes locally, and updates online/offline status in real-time.  
It uses **Service Workers**, **Cache API**, **localStorage**, and a **Web App Manifest** to create a standalone app-like experience.

---

## Features

- Installable as a PWA on desktop or mobile  
- Works **offline** using cached resources  
- Online/offline status detection  
- Save notes locally with **localStorage**  
- Simple and responsive UI

---

## Code Explanation

### HTML & UI (`index.html`)

```html
<h1>PWA Demo App</h1>
<p id="status">Status: Online</p>
<input type="text" id="noteInput" placeholder="Write a note" />
<button id="saveBtn">Save Note</button>
<ul id="notesList"></ul>
````

* Displays **app title**, **status**, **note input**, **save button**, and **list of notes**
* Links to `manifest.json`, `style.css`, and `app.js` for full PWA functionality

---

### Manifest (`manifest.json`)

```json
{
  "name": "PWA Demo App",
  "short_name": "PWA Demo",
  "start_url": "./index.html",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#007bff",
  "icons": [
    { "src": "icon-192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "icon-512.png", "sizes": "512x512", "type": "image/png" }
  ]
}
```

* Provides metadata to make the app **installable**
* Defines **app icons, colors, start URL, and display mode**

---

### Service Worker (`service-worker.js`)

```js
const CACHE_NAME = "pwa-demo-v1";
const urlsToCache = ["./", "./index.html", "./app.js", "./style.css", "./manifest.json", "./icon-192.png", "./icon-512.png"];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache)));
});

self.addEventListener("fetch", (event) => {
  event.respondWith(caches.match(event.request).then(response => response || fetch(event.request)));
});
```

* Caches essential files during **installation**
* Intercepts **fetch requests** to serve cached content first
* Enables **offline usage**

---

### CSS (`style.css`)

```css
body { font-family: Arial, sans-serif; padding: 20px; max-width: 500px; margin: auto; }
input { padding: 8px; width: 70%; }
button { padding: 8px; }
ul { margin-top: 20px; }
```

* Simple responsive styles for input, button, and notes list

---

### JavaScript (`app.js`)

```js
// Register Service Worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js")
    .then(reg => console.log("SW Registered", reg))
    .catch(err => console.error("SW Registration failed", err));
}

// Online/Offline detection
const status = document.getElementById("status");
window.addEventListener("online", () => status.textContent = "Status: Online");
window.addEventListener("offline", () => status.textContent = "Status: Offline");

// Notes feature using localStorage
const input = document.getElementById("noteInput");
const saveBtn = document.getElementById("saveBtn");
const notesList = document.getElementById("notesList");

function renderNotes() {
  const notes = JSON.parse(localStorage.getItem("notes") || "[]");
  notesList.innerHTML = "";
  notes.forEach(note => {
    const li = document.createElement("li");
    li.textContent = note;
    notesList.appendChild(li);
  });
}

saveBtn.addEventListener("click", () => {
  const notes = JSON.parse(localStorage.getItem("notes") || "[]");
  if (input.value.trim() !== "") {
    notes.push(input.value);
    localStorage.setItem("notes", JSON.stringify(notes));
    input.value = "";
    renderNotes();
  }
});

// Load notes on page load
renderNotes();
```

* Registers the **service worker**
* Updates **online/offline status**
* Saves and displays **notes locally** using **localStorage**

---

## Usage

1. Open the app in a modern browser
2. Write a note and click **Save Note**
3. Notes are stored locally and persist after page reload
4. Go offline to verify PWA functionality and cached content
5. Install the app using the browser's **Install** option

---


