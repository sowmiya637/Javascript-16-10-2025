const express = require("express"); //Import Express library
const http = require("http");  //Import Node’s built-in HTTP module
const { Server } = require("socket.io");  //Import Server class from Socket.io

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");//send a file as response to browser,current directory and index.html path.
});

// Listen for new socket connections
io.on("connection", (socket) => {
  console.log("A user connected");

  // Listen for messages from client
  socket.on("chat message", (msg) => {
    console.log("Message received:", msg);

    // Broadcast message to all clients
    io.emit("chat message", msg);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

server.listen(3000, () => console.log("Server running at http://localhost:3000"));
