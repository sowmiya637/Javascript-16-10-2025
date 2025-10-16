
# WebSocket Realtime Chat Example

This project demonstrates a **realtime chat application** using **Node.js**, **Express**, and **Socket.io**.  
Users can send and receive messages instantly in a web browser without reloading the page.

---

## Features

- Realtime messaging between multiple users  
- Browser-based chat interface  
- Broadcast messages to all connected clients  
- Display online/offline user connections in the server console

---


```bash
npm install
````

* This will install **Express** and **Socket.io** as specified in `package.json`

---

## How to Run

1. Open terminal and navigate to the project folder
2. Start the server:

```bash
node index.js
```

3. Open a web browser and visit:

```
http://localhost:3000
```

4. Open multiple browser tabs to simulate multiple users.
5. Type messages and see them appear in real-time across all clients.

---

## Code Explanation

### Server Setup (`index.js`)

```js
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

server.listen(3000, () => console.log("Server running at http://localhost:3000"));
```

* **Express** serves the `index.html` file to clients
* **HTTP server** is created from Express to integrate with Socket.io
* **Socket.io** manages realtime connections

### Client Setup (`index.html`)

```html
<form id="chatForm">
  <input id="msgInput" autocomplete="off" placeholder="Type message..." />
  <button>Send</button>
</form>
<ul id="messages"></ul>
```

* Simple form for sending messages
* `<ul>` displays incoming messages

### Socket.io Communication

```js
const socket = io();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value) {
    socket.emit("chat message", input.value);
    input.value = "";
  }
});

socket.on("chat message", (msg) => {
  const li = document.createElement("li");
  li.textContent = msg;
  messages.appendChild(li);
});
```

* `socket.emit("chat message", ...)` sends messages to the server
* `socket.on("chat message", ...)` listens for messages broadcasted from the server and updates the UI

### Server-Side Socket.io Handling

```js
io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("chat message", (msg) => {
    console.log("Message received:", msg);
    io.emit("chat message", msg);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});
```

* `io.on("connection")` triggers when a client connects
* `socket.on("chat message")` receives messages from a client
* `io.emit("chat message")` broadcasts the message to all connected clients
* `socket.on("disconnect")` triggers when a user leaves

---

## Usage

1. Open multiple browser tabs to simulate multiple users
2. Type messages and click **Send**
3. Messages appear instantly on all connected clients

---

