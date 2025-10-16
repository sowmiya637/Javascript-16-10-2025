
# Node.js Weather Example using Axios

This project demonstrates how to **fetch weather data** from a public API using Node.js and the **Axios** library.  

It shows how to make HTTP GET requests and handle the response asynchronously.

---

## Features

- Fetch current weather data using a public API  
- Use **Axios** for HTTP requests in Node.js  
- Display weather information in the console  
- Handle errors gracefully

---

```bash
npm install
````

* This will install **Axios** as specified in `package.json`

---

node index.js
```

3. You will see the current weather data for the specified city in the console

---

## Code Explanation

### Installing Axios

Axios is an HTTP client for Node.js that simplifies sending HTTP requests:

```bash
npm install axios
```

Then import it in your script:

```js
const axios = require("axios");
```

### Fetching Weather Data

```js
function getWeather(city) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=28.61&longitude=77.23&current_weather=true`;

  axios.get(url)
    .then(res => {
      console.log(`Weather data for ${city}:`);
      console.log(res.data.current_weather);
    })
    .catch(err => console.error("Error fetching weather:", err));
}

getWeather("Tamil Nadu");
```

* `axios.get(url)` sends an HTTP GET request to the API
* `.then(res => {...})` handles the successful response
* `.catch(err => {...})` handles errors
* The API used here provides the **current weather** for the given latitude and longitude

---

## Expected Output

Example console output:

```
Weather data for Tamil Nadu:
{
  temperature: 32.4,
  windspeed: 5.6,
  winddirection: 180,
  weathercode: 1,
  time: '2025-10-16T10:00'
}
```

* Actual values may vary depending on real-time weather data

---

