// Toggle the visibility of the form
function toggleForm() {
    const form = document.getElementById('contactForm');
    if (form.style.display === 'none' || form.style.display === '') {
        form.style.display = 'block';
    } else {
        form.style.display = 'none';
    }
}

// Optional: Add a submission handler
document.getElementById('skincareForm').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Thank you for submitting your skincare details!');
    // Reset the form or take additional actions
    this.reset();
});
