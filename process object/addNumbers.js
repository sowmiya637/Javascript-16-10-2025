// Get command-line arguments
const args = process.argv.slice(2); // skip first two items (node path & script path)

if (args.length === 0) {
  console.log(" Please provide numbers as arguments!");
  console.log("Usage: node addNumbers.js 5 10 15");
  process.exit(1); // exit with error code
}

// Convert all arguments to numbers
const numbers = args.map(Number);

// Check if all are valid numbers
if (numbers.some(isNaN)) {
  console.log(" All arguments must be numbers!");
  process.exit(1);
}

// Sum the numbers
const sum = numbers.reduce((total, num) => total + num, 0);

console.log(` The sum of [${numbers.join(", ")}] is: ${sum}`);
