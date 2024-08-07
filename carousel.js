document.addEventListener('DOMContentLoaded', function() {
    let currentImageIndex = 0;
    const images = document.querySelectorAll('.carousel-image');
    const totalImages = images.length;

    function showImage(index) {
        images.forEach((img, i) => {
            img.style.display = i === index ? 'block' : 'none';
        });
    }

    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % totalImages;
        showImage(currentImageIndex);
    }

    function prevImage() {
        currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
        showImage(currentImageIndex);
    }

    // Automatic slideshow
    setInterval(nextImage, 3000); // Change image every 3 seconds

    // Optional: Add event listeners for manual controls if desired
    // document.getElementById('next-button').addEventListener('click', nextImage);
    // document.getElementById('prev-button').addEventListener('click', prevImage);

    // Initially show the first image
    showImage(currentImageIndex);
});