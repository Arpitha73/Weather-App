async function getWeather() {
    const city = "Bengaluru";  // City is hardcoded as Bengaluru
    const apiKey = "b06b2e47f5a3a2fa7712c42331f4dda5";  // Your API key
    const countryCode = "IN";  // Country code for India
  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${apiKey}&units=metric`;  // Updated URL with Bengaluru and country code
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);  // Check the API response in console
  
      if (data.cod === 200) {
        const weather = `
          <h2>${data.name}, ${data.sys.country}</h2>
          <p>🌡️ Temperature: ${data.main.temp}°C</p>
          <p>🌥️ Weather: ${data.weather[0].main}</p>
          <p>💧 Humidity: ${data.main.humidity}%</p>
        `;
        document.getElementById("weatherResult").innerHTML = weather;
      } else {
        document.getElementById("weatherResult").innerHTML = `<p>City not found! Please check the name or try again.</p>`;
      }
    } catch (error) {
      document.getElementById("weatherResult").innerHTML = `<p>Error: ${error.message}</p>`;
    }
  }
  
  