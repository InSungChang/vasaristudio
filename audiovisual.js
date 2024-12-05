let currentIndex = 0;

function showVideo(index) {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    if (index >= items.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = items.length - 1;
    } else {
        currentIndex = index;
    }
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextVideo() {
    showVideo(currentIndex + 1);
}

function prevVideo() {
    showVideo(currentIndex - 1);
}

document.addEventListener('DOMContentLoaded', () => {
    showVideo(currentIndex);
});