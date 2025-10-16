
# Node.js HTTP Server Example

This project demonstrates a basic **HTTP server** using Node.js's built-in `http` module.  
It shows how to create a server, handle requests, and send responses.

---


## Features

- Create a simple HTTP server using Node.js  
- Respond to client requests with plain text  
- Run locally on a specified port  

---


## Installation

1. Install [Node.js](https://nodejs.org/) if not already installed  
2. Create a project folder and copy `index.js` into it  
3. No external packages are required — `http` is built-in  

---

2. Run the server:

```bash
node index.js
````

3. Open your browser and visit:

```
http://localhost:3000
```

4. You should see the message:

```
Hello from Node.js server!
```

5. Check the terminal for the log:

```
Server running at http://localhost:3000
```

---

## Code Explanation

### Importing HTTP Module

```js
const http = require("http");
```

* `require("http")` loads Node.js's built-in HTTP module.
* Provides functions to create a server and handle HTTP requests/responses.

### Creating the Server

```js
const server = http.createServer((req, res) => {
  // ...
});
```

* `http.createServer()` creates a new HTTP server.
* Accepts a callback function with two parameters:

  * `req` — the incoming request object
  * `res` — the response object used to send data back to the client

### Handling Requests and Responses

```js
res.writeHead(200, {"Content-Type": "text/plain"});
res.end("Hello from Node.js server!");
```

* `res.writeHead(statusCode, headers)`

  * Sets the HTTP status code (200 = success)
  * Sets response headers (e.g., `Content-Type`)
* `res.end()`

  * Sends the response body and ends the response

### Starting the Server

```js
server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
```

* `server.listen(port, callback)` starts the server on the specified port
* Callback executes once the server starts successfully

---

## Expected Output

* Browser displays:

```
Hello from Node.js server!
```

* Terminal logs:

```
Server running at http://localhost:3000
```

* Any HTTP request to `localhost:3000` will receive the same response.

---


