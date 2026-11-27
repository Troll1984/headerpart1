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


