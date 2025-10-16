
# Node.js Module Example

This project demonstrates how to **create and use a custom module** in Node.js.  
It shows how to define functions in one file and import them into another file using `require` and `module.exports`.

---

## Features

- Define custom functions in a separate file (`math.js`)  
- Export functions using `module.exports`  
- Import and use the module in another file (`index.js`)  
- Demonstrates basic arithmetic operations (addition, subtraction)

---

```bash
node index.js
````

3. You will see the results of the arithmetic operations printed in the console

---

## Code Explanation

### math.js — Creating a Module

```js
// Define functions
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

// Export functions
module.exports = { add, subtract };
```

* Functions `add` and `subtract` are defined in `math.js`
* `module.exports` makes these functions available to other files

### index.js — Using the Module

```js
// Import the module
const math = require("./math");

// Use the exported functions
console.log("Addition:", math.add(5, 3));       // 8
console.log("Subtraction:", math.subtract(10, 4)); // 6
```

* `require("./math")` imports the exported functions from `math.js`
* Functions can be called as `math.add()` or `math.subtract()`

---

## Expected Output

```
Addition: 8
Subtraction: 6
```

---

