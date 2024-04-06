// script.js
document.getElementById('weather-form').addEventListener('submit', getWeather);

function getWeather(event) {
    event.preventDefault();
    const city = document.getElementById('city').value;
    const key = 'acae388299964359afd195632242703'; 

    Promise.all([
        fetch(`https://api.weatherapi.com/v1/current.json?key=${key}&q=${city}`).then(response => response.json()),
        fetch(`https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}&days=5`).then(response => response.json())
    ]).then(data => {
        displayWeather(data[0], data[1]);
    }).catch(error => console.log('Error fetching data:', error));
}

function displayWeather(currentData, forecastData) {
    const weatherInfo = document.getElementById('info');
    weatherInfo.innerHTML = `
        <h2>${currentData.location.name}, ${currentData.location.country}</h2>
        <p>Current Time: ${currentData.location.localtime}</p>
        <p>Current Temperature: ${currentData.current.temp_c}°C</p>
        <p>Weather Condition: ${currentData.current.condition.text}</p>
        <img src="${currentData.current.condition.icon}"alt="Weather Icon">
        <p>Humidity: ${currentData.current.humidity}%</p>
        <h2>5-Day Forecast:</h2>
        <div class="forecast-container">
            ${forecastData.forecast.forecastday.map(day => `
                <div class="forecast-item">
                    <h3>${day.date}</h3>
                    <p>Average Temp: ${day.day.avgtemp_c}°C</p>
                    <p>Condition: ${day.day.condition.text}</p>
                    <img src="${day.day.condition.icon}"alt="Weather Icon">
                </div>
            `).join('')}
        </div>
    `;}