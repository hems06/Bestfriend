document.addEventListener("DOMContentLoaded", function () {
    // Surprise message reveal (Works on mobile & desktop)
    const surpriseBtn = document.getElementById("surprise-btn");
    const hiddenMessage = document.getElementById("hidden-message");

    if (surpriseBtn && hiddenMessage) {
        surpriseBtn.addEventListener("click", function () {
            hiddenMessage.style.display = hiddenMessage.style.display === "block" ? "none" : "block";
        });
    }

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

    // Music play/pause
    const music = document.getElementById("bg-music");
    const musicBtn = document.getElementById("music-btn");

    if (musicBtn && music) {
        musicBtn.addEventListener("click", function () {
            if (music.paused) {
                music.play();
                musicBtn.textContent = "⏸ Pause Music";
            } else {
                music.pause();
                musicBtn.textContent = "🎵 Play Music";
            }
        });
    }
});
