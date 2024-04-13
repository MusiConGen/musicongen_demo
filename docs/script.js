let currentAudio = null;

function startProgress(audio) {
    if (currentAudio && currentAudio !== audio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
    currentAudio = audio; // Updates the current audio being played
    updateProgress(audio); // Initial call to sync progress bar
}


function updateProgress(audio) {
    const progressBar = document.querySelector('.progress-bar');
    if (!audio.paused && !audio.ended) {
        const percentage = (audio.currentTime / audio.duration) * 91;
        progressBar.style.width = percentage + '%';
    } else {
        progressBar.style.width = '0%';  // Reset when paused or ended
    }
}

function updateProgress2(audio) {
    const progressBar = document.querySelector('.progress-bar2');
    if (!audio.paused && !audio.ended) {
        const percentage = (audio.currentTime / audio.duration) * 91;
        progressBar.style.width = percentage + '%';
    } else {
        progressBar.style.width = '0%';  // Reset when paused or ended
    }
}

function changeImage(audioElement, imagePath) {
    if (currentAudio && currentAudio !== audioElement) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
    currentAudio = audioElement;  // Update the current audio

    // Update the image source
    var img = document.querySelector('.chord-img');
    img.src = imagePath;
}

function changeImage2(audioElement, imagePath) {
    if (currentAudio && currentAudio !== audioElement) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
    currentAudio = audioElement;  // Update the current audio

    // Update the image source
    var img = document.querySelector('.chord-img2');
    img.src = imagePath;
}