document.addEventListener("DOMContentLoaded", function() {
    const darkModeButton = document.getElementById('darkModeButton');

    function toggleDarkMode() {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            darkModeButton.style.backgroundImage = "url('images/Sun.png')";
            localStorage.setItem('darkModeEnabled', 'true');
        } else {
            darkModeButton.style.backgroundImage = "url('images/Moon.png')";
            localStorage.setItem('darkModeEnabled', 'false');
        }
    }

    const isDarkModeEnabled = localStorage.getItem('darkModeEnabled');
    if (isDarkModeEnabled === 'true') {
        document.body.classList.add('dark-mode');
    }

    darkModeButton.addEventListener('click', toggleDarkMode);
});