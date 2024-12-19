const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const track = document.querySelector(".carousel-track");

const itemWidth = 600;  // Width of each carousel item 
let currentIndex = 0;   // The current index of the visible item
const totalItems = document.querySelectorAll(".carousel-item").length; // Total number of items

// Function to update the carousel position
function updateCarousel() {
    track.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
}

// Next Button Click
nextBtn.addEventListener("click", () => {
    if (currentIndex < totalItems - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Loop back to the first item
    }
    updateCarousel();
});

// Previous Button Click
prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalItems - 1; // Loop back to the last item
    }
    updateCarousel();
});