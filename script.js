document.addEventListener("DOMContentLoaded", function() {
    // Dark Mode Toggle
    const toggleButton = document.querySelector('.dark-mode-toggle');
    toggleButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });})