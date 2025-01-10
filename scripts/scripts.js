var currentAudio;

function playSound(audioId) {
    if (currentAudio && currentAudio !== audioId) {
        var prevAudio = document.getElementById(currentAudio);
        prevAudio.pause();
        prevAudio.currentTime = 0;
    }

    var audio = document.getElementById(audioId);
    audio.play();
    currentAudio = audioId;
}

function stopSound() {
    if (currentAudio) {
        var audio = document.getElementById(currentAudio);
        audio.pause();
        audio.currentTime = 0;
        currentAudio = null;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("button-muray").addEventListener("click", function () {
        playSound('audio-muray');
    });
    document.getElementById("button-cicakijo").addEventListener("click", function () {
        playSound('audio-cicakijo');
    });
    document.getElementById("button-kacer").addEventListener("click", function () {
        playSound('audio-kacer');
    });

    document.getElementById("stop-button-muray").addEventListener("click", stopSound);
    document.getElementById("stop-button-cicakijo").addEventListener("click", stopSound);
    document.getElementById("stop-button-kacer").addEventListener("click", stopSound);
});
