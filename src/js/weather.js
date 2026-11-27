async function getWeather() {   
    const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m');
    const data = await response.json();
     let weather = document.querySelector('.weather');
    weather.textContent =   `🌡 ${data.current.temperature_2m}°C   Wind-speed ${data.current.wind_speed_10m}м/с`;
}
getWeather();
setInterval(getWeather, 30000);