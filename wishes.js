document.addEventListener("DOMContentLoaded", function () {
    const music = document.getElementById("bg-music");
    const musicBtn = document.getElementById("music-btn");

    musicBtn.addEventListener("click", function () {
        if (music.paused) {
            music.play();
            musicBtn.innerHTML = "⏸ Pause Music";
        } else {
            music.pause();
            musicBtn.innerHTML = "🎵 Play Music";
        }
    });
});
