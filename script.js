// Check stored theme preference
let darkmode = localStorage.getItem('darkmode');
const themeSwitch = document.getElementById('theme-switch');

// Enable dark mode
const enableDarkmode = () => {
    document.body.classList.add('darkmode');
    document.body.classList.remove('lightmode');
    localStorage.setItem('darkmode', 'active');
};

// Disable dark mode (light mode)
const disableDarkmode = () => {
    document.body.classList.remove('darkmode');
    document.body.classList.add('lightmode');
    localStorage.setItem('darkmode', 'inactive');
};

// Apply theme on page load
if (darkmode === "active") {
    enableDarkmode();
} else {
    disableDarkmode();
}

// Toggle on button click
themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode');
    darkmode !== "active" ? enableDarkmode() : disableDarkmode();
});

// MOBILE HAMBURGER MENU
const hamMenu = document.querySelector('.mobile-menu');

const offScreenMenu = document.querySelector('.off-screen-menu');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
})
