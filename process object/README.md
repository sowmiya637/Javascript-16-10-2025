
# Node.js Command-Line Number Adder

This project demonstrates how to **handle command-line arguments** in Node.js, perform basic **data validation**, and compute the **sum of numbers** provided as input.

---


## Features

- Accept numbers as **command-line arguments**  
- Validate that inputs are numbers  
- Compute and display the sum of the numbers  
- Provide helpful error messages for invalid or missing input  

---

```bash
node addNumbers.js 5 10 15
````

3. The script will output the sum of the numbers provided

---

## Code Explanation

### Accessing Command-Line Arguments

```js
const args = process.argv.slice(2);
```

* `process.argv` is an array containing command-line arguments:

  * `process.argv[0]` → Node.js executable path
  * `process.argv[1]` → path of the script
  * `process.argv[2...]` → user-provided arguments
* `slice(2)` skips the first two and stores the rest in `args`

### Validating Input

```js
if (args.length === 0) {
  console.log("Please provide numbers as arguments!");
  process.exit(1);
}

const numbers = args.map(Number);

if (numbers.some(isNaN)) {
  console.log("All arguments must be numbers!");
  process.exit(1);
}
```

* Checks if arguments are provided
* Converts each argument to a number using `Number()`
* Uses `isNaN` to ensure all inputs are valid numbers
* Exits with an error code if validation fails

### Calculating the Sum

```js
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(`The sum of [${numbers.join(", ")}] is: ${sum}`);
```

* `reduce()` iterates over the numbers array and calculates the total sum
* `join(", ")` creates a readable string of the numbers for output

---

## Example Usage

```bash
node addNumbers.js 5 10 15
```

Output:

```
The sum of [5, 10, 15] is: 30
```

Invalid input example:

```bash
node addNumbers.js 5 abc 10
```

Output:

```
All arguments must be numbers!
```

No input example:

```bash
node addNumbers.js
```

Output:

```
Please provide numbers as arguments!
Usage: node addNumbers.js 5 10 15
```

