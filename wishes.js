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

    // Slideshow functionality
    let slideIndex = 0;
    function showSlides() {
        let slides = document.querySelectorAll(".slide");
        slides.forEach(slide => slide.style.display = "none");
        slideIndex = (slideIndex + 1) % slides.length;
        slides[slideIndex].style.display = "block";
        setTimeout(showSlides, 5000); // Change slide every 5 seconds
    }
    showSlides();

    // Surprise message reveal
    document.getElementById("surprise-btn").addEventListener("click", function () {
        document.getElementById("hidden-message").classList.toggle("visible");
    });

    // Background music play/pause
    const music = document.getElementById("bg-music");
    const musicBtn = document.getElementById("music-btn");

    musicBtn.addEventListener("click", function () {
        if (music.paused) {
            music.play();
            musicBtn.textContent = "⏸ Pause";
        } else {
            music.pause();
            musicBtn.textContent = "🎵 Play";
        }
    });
});
