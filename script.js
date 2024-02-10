document.querySelectorAll('.square').forEach(square => {
    square.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        this.classList.add('heart'); // Add heart animation class
        setTimeout(() => {
            window.location.href = this.getAttribute('href'); // Redirect after animation
        }, 300); // Redirect after 300ms (same as transition duration)
    });
});