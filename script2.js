// JavaScript to detect scroll position and apply animation
document.addEventListener("DOMContentLoaded", function () {
    const contentItems = document.querySelectorAll(".content-item[data-scroll]");

    const scrollTrigger = () => {
        contentItems.forEach((item) => {
            const rect = item.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                item.classList.add("float-in");
            }
        });
    };

    // Trigger scroll effect on load and scroll events
    window.addEventListener("scroll", scrollTrigger);
    scrollTrigger(); // Run initially in case some elements are already in view
});
