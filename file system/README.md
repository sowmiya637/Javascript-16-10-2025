# Node.js User Logging Example

This project demonstrates how to **log user activity** using Node.js and the **`fs` (File System) module**.  
It allows adding logs when users "log in" and reading all saved logs from a file.

---

## Features

- Record user login events with timestamp  
- Save logs persistently in a text file (`log.txt`)  
- Read and display all saved logs  
- Simple, synchronous file operations for demonstration

---


## Installation

1. Ensure Node.js is installed on your system: [https://nodejs.org/](https://nodejs.org/)  
2. Create a project folder and copy `index.js` into it  
3. No additional npm packages are required since `fs` is built-in

---


```js
addUserLog("Sowmiya");
addUserLog("slk");
Run the script using Node.js:

bash
Copy code
node index.js
The script will:

Append new user log entries to log.txt

Display all logs in the console

Code Explanation
Adding User Logs
js
Copy code
function addUserLog(username) {
  const logMessage = `User: ${username} logged in at ${new Date().toLocaleString()}\n`;
  fs.appendFileSync("log.txt", logMessage);
  console.log("Log updated successfully!");
}
new Date().toLocaleString() — gets the current date and time in readable format

fs.appendFileSync() — appends the log message to log.txt, creating the file if it does not exist

Each log entry is stored on a new line

Reading Logs
js
Copy code
function readLogs() {
  if (fs.existsSync("log.txt")) {
    const data = fs.readFileSync("log.txt", "utf-8");
    console.log("All Logs:\n" + data);
  } else {
    console.log("No log file found.");
  }
}
fs.existsSync() — checks if the log file exists

fs.readFileSync() — reads the content of the file synchronously

Displays all log entries in the console

Example Output
pgsql
Copy code
User: Sowmiya logged in at 16/10/2025, 10:35:53 am
User: Priya logged in at 16/10/2025, 10:35:54 am
User: Sowmiya logged in at 16/10/2025, 10:36:23 am
User: slk logged in at 16/10/2025, 10:36:23 am
User: Sowmiya logged in at 16/10/2025, 10:44:53 am
User: slk logged in at 16/10/2025, 10:44:53 am
Each login event is stored in log.txt

Timestamps reflect the local system time
