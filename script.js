document.addEventListener('DOMContentLoaded', function() {
    // Get all necessary elements
    const carouselImages = document.querySelectorAll('.carousel-image');
    const thumbnails = document.querySelectorAll('.thumbnail');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const carouselLinks = document.querySelectorAll('.carousel-container a');
    let currentIndex = 0;

    // Function to update active image
    function updateActiveImage(index) {
        // Remove active class from all images
        carouselImages.forEach(img => img.classList.remove('active'));
        thumbnails.forEach(thumb => thumb.classList.remove('active'));
        
        // Add active class to current image
        carouselImages[index].classList.add('active');
        thumbnails[index].classList.add('active');
        currentIndex = index;
    }

    // Next button click
    nextButton.addEventListener('click', (e) => {
        e.preventDefault();
        let nextIndex = currentIndex + 1;
        if (nextIndex >= carouselImages.length) nextIndex = 0;
        updateActiveImage(nextIndex);
    });

    // Previous button click
    prevButton.addEventListener('click', (e) => {
        e.preventDefault();
        let prevIndex = currentIndex - 1;
        if (prevIndex < 0) prevIndex = carouselImages.length - 1;
        updateActiveImage(prevIndex);
    });

    // Thumbnail clicks
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            updateActiveImage(index);
            window.location.href = carouselLinks[index].href;
        });
    });

    // Add click handler for carousel images
    carouselImages.forEach((image, index) => {
        image.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = carouselLinks[index].href;
        });
    });
});