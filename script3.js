let currentIndex = 0;
const carouselItems = document.querySelectorAll('.carousel-item');

function showText(index) {
    // Remove active class from all items
    carouselItems.forEach(item => item.classList.remove('active', 'hidden-left', 'hidden-right'));
    // Add active class to the current item
    carouselItems[index].classList.add('active');
}

// Navigate to the next text
function nextText() {
    carouselItems[currentIndex].classList.add('hidden-left'); // Slide current item to the left
    currentIndex = (currentIndex + 1) % carouselItems.length;
    showText(currentIndex);
}

// Navigate to the previous text
function prevText() {
    carouselItems[currentIndex].classList.add('hidden-right'); // Slide current item to the right
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    showText(currentIndex);
}

// Initialize carousel
showText(currentIndex);