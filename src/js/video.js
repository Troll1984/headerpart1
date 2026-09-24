/* Видео проигрыватель*/

let video = document.querySelector('#video');
let play = document.querySelector('#play');
let counts = document.querySelector('#counts');
let fullscreen = document.querySelector('#fullscreen');
let progress = document.querySelector('#progress');


play.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        play.textContent = '⏸'; 
    } else {
        video.pause();
        play.textContent = '▶';
    }
});

fullscreen.addEventListener('click', () => {
    video.requestFullscreen();
});

video.addEventListener('timeupdate', () => {
    let percent = (video.currentTime / video.duration) * 100;
    progress.value = percent;
     counts.textContent = Math.floor(video.currentTime);
   
});
progress.addEventListener('input', () => {
    video.currentTime = (progress.value / 100) * video.duration;
});

async function getWeather() {   
    const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m');
    const data = await response.json();
     let weather = document.querySelector('.weather');
    weather.textContent =   `🌡 ${data.current.temperature_2m}°C   Wind-speed ${data.current.wind_speed_10m}м/с`;
}
getWeather();
setInterval(getWeather, 30000);
