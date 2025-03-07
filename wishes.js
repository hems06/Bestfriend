document.addEventListener("DOMContentLoaded", function () {
    const music = document.getElementById("bg-music");
    const musicBtn = document.getElementById("music-btn");

    // Load play state from localStorage
    if (localStorage.getItem("musicPlaying") === "true") {
        music.play().catch(() => {});  // Handle autoplay restrictions
        musicBtn.innerHTML = "⏸ Pause Music";
    }

    musicBtn.addEventListener("click", function () {
        if (music.paused) {
            music.play().then(() => {
                musicBtn.innerHTML = "⏸ Pause Music";
                localStorage.setItem("musicPlaying", "true"); // Save state
            }).catch(error => console.error("Playback failed:", error));
        } else {
            // Smoothly reduce volume before pausing
            let fadeOut = setInterval(() => {
                if (music.volume > 0.1) {
                    music.volume -= 0.1;
                } else {
                    clearInterval(fadeOut);
                    music.pause();
                    music.volume = 1; // Reset volume
                    musicBtn.innerHTML = "🎵 Play Music";
                    localStorage.setItem("musicPlaying", "false"); // Save state
                }
            }, 100);
        }
    });
});
