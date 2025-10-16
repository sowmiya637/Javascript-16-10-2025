const http = require("http"); //import http module

const server = http.createServer((req, res) => {
  res.writeHead(200, {"Content-Type": "text/plain"});//res.writeHead(200) → 200 means success status code.
  res.end("Hello from Node.js server!");
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
