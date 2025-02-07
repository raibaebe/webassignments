const axios = require('axios');

exports.getWeather = async (req, res) => {
  try {
    const { city } = req.query;
    const apiKey = process.env.WEATHER_API_KEY;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    console.log(`Fetching weather data from: ${apiUrl}`); // Log the API URL

    const response = await axios.get(apiUrl);

    console.log('Weather API response:', response.data); // Log the response data

    const weatherData = {
      city: response.data.name,
      temperature: `${response.data.main.temp}°C`,
      condition: response.data.weather[0].description,
    };

    res.json(weatherData);
  } catch (error) {
    console.error("Weather API Error:", error.response?.data || error.message || "Unknown error");
    res.status(500).json({ message: "Error fetching weather data", error: error.response?.data || error.message || "Unknown error" });
  }
};