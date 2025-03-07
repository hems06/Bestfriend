document.addEventListener("DOMContentLoaded", function () {
    // Fade-in effect
    const fadeInElements = document.querySelectorAll(".fade-in");
    function revealElements() {
        fadeInElements.forEach(element => {
            if (element.getBoundingClientRect().top < window.innerHeight - 50) {
                element.classList.add("visible");
            }
        });
    }
    revealElements();
    window.addEventListener("scroll", revealElements);

    // Slideshow
    let slideIndex = 0;
    function showSlides() {
        let slides = document.querySelectorAll(".slide");
        slides.forEach(slide => slide.style.display = "none");
        slideIndex = (slideIndex + 1) % slides.length;
        slides[slideIndex].style.display = "block";
        setTimeout(showSlides, 20000); // 20 seconds
    }
    showSlides();

    // Surprise message
    document.getElementById("surprise-btn").addEventListener("click", function () {
        document.getElementById("hidden-message").style.display = "block";
    });

    // Music play/pause
    const music = document.getElementById("bg-music");
    const musicBtn = document.getElementById("music-btn");

    musicBtn.addEventListener("click", function () {
        if (music.paused) {
            music.play();
            musicBtn.textContent = "⏸ Pause Music";
        } else {
            music.pause();
            musicBtn.textContent = "🎵 Play Music";
        }
    });
});
