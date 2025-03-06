let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("slides");

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Move to the next slide
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Show the current slide
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 4000); // Change slide every 4 seconds
}

function plusSlides(n) {
    let slides = document.getElementsByClassName("slides");

    // Update the slide index based on navigation
    slideIndex += n;

    // Handle boundaries
    if (slideIndex >= slides.length) {
        slideIndex = 0; // Go to the first slide
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1; // Go to the last slide
    }

    // Show the new slide immediately
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex].style.display = "block";
}

// Initialize the slideshow after the page loads
document.addEventListener("DOMContentLoaded", () => {
    showSlides();
});
