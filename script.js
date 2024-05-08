function getWeather() {
    const locationInput = document.getElementById('locationInput').value;
    const apiKey = 'YOUR_API_KEY'; // Replace 'YOUR_API_KEY' with your Weatherstack API key
    const apiUrl = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${locationInput}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `
                <h2>${data.location.name}, ${data.location.region}, ${data.location.country}</h2>
                <p>Temperature: ${data.current.temperature}°C</p>
                <p>Weather: ${data.current.weather_descriptions[0]}</p>
                <p>Wind Speed: ${data.current.wind_speed} km/h</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = '<p>Error fetching weather data. Please try again.</p>';
        });
}
