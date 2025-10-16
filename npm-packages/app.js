// Import axios
const axios = require("axios");

// Function to get weather for a city
function getWeather(city) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=28.61&longitude=77.23&current_weather=true`;

  axios.get(url)
    .then(res => {
      console.log(`Weather data for ${city}:`);
      console.log(res.data.current_weather);
    })
    .catch(err => console.error("Error fetching weather:", err));
}

// Call function
getWeather("Tamil Nadu");
