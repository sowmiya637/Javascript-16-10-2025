// Import fs module
const fs = require("fs");

// Function to add a new user log
function addUserLog(username) {
  const logMessage = `User: ${username} logged in at ${new Date().toLocaleString()}\n`;//current date and time convert into string format

  // Append data to log.txt file
  fs.appendFileSync("log.txt", logMessage);

  console.log(" Log updated successfully!");
}

// Function to read all logs
function readLogs() {
  if (fs.existsSync("log.txt")) {
    const data = fs.readFileSync("log.txt", "utf-8");
    console.log(" All Logs:\n" + data);
  } else {
    console.log(" No log file found.");
  }
}

// --- Example Usage ---
addUserLog("Sowmiya");
addUserLog("slk");

readLogs();
