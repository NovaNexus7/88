document.addEventListener('DOMContentLoaded', () => {
    const themeButton = document.querySelector('.theme-button');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navUl = document.querySelector('nav ul');
    const currentTheme = localStorage.getItem('theme') || 'dark';

    // Set the current theme on page load
    document.documentElement.setAttribute('data-theme', currentTheme);

    // Toggle theme on button click
    themeButton.addEventListener('click', () => {
        const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

    // Toggle menu on hamburger click
    hamburgerMenu.addEventListener('click', () => {
        navUl.classList.toggle('show-menu');
        hamburgerMenu.classList.toggle('nav-open');
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const footerColumns = document.querySelectorAll('.footer-column h3');
    footerColumns.forEach(column => {
        column.addEventListener('click', function() {
            this.parentElement.classList.toggle('active');
        });
    });
});


