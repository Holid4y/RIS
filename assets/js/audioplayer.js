const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('play-pause');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const progressBar = document.getElementById('progress-bar');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const volumeSlider = document.getElementById('volume-slider');
const playPauseIcon = playPauseBtn.querySelector('img');
const volumeIcon = document.querySelector('.volume-icon img');

let isPlaying = false;

// Play or Pause the audio
playPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause();
    } else {
        audio.play();
    }
});

// Update play/pause icon and status
audio.addEventListener('play', () => {
    isPlaying = true;
    playPauseIcon.src = '../media/svg/pause.svg';
});
audio.addEventListener('pause', () => {
    isPlaying = false;
    playPauseIcon.src = '../media/svg/play.svg';
});

// Update progress bar and time
audio.addEventListener('timeupdate', () => {
    const currentTime = audio.currentTime;
    const duration = audio.duration;

    const progressPercent = (currentTime / duration) * 100;
    progressBar.value = progressPercent;
    progressBar.style.background = `linear-gradient(to right, #49E2C1 ${progressPercent}%, #2E2E2E ${progressPercent}%)`;

    currentTimeEl.textContent = formatTime(currentTime);
    durationEl.textContent = formatTime(duration);
});

// Seek audio
progressBar.addEventListener('input', () => {
    audio.currentTime = (progressBar.value / 100) * audio.duration;
});

// Load saved volume on page load
window.addEventListener('DOMContentLoaded', () => {
    const savedVolume = localStorage.getItem('volume') || 100;
    volumeSlider.value = savedVolume;
    audio.volume = savedVolume / 100;
    volumeSlider.style.background = `linear-gradient(to right, #49E2C1 ${savedVolume}%, #2E2E2E ${savedVolume}%)`;
});

// Save volume to localStorage whenever it changes
volumeSlider.addEventListener('input', () => {
    const volumePercent = volumeSlider.value;
    audio.volume = volumePercent / 100;
    volumeSlider.style.background = `linear-gradient(to right, #49E2C1 ${volumePercent}%, #2E2E2E ${volumePercent}%)`;
    localStorage.setItem('volume', volumePercent); // Save volume to localStorage
});
// Format time in mm:ss
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

// Additional logic for next/prev buttons if you have multiple tracks
prevBtn.addEventListener('click', () => {
    // Implement track change logic
});

nextBtn.addEventListener('click', () => {
    // Implement track change logic
});
