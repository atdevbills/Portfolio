// dark and light mode
const themeToggle = document.getElementById('theme-toggle');

function applyTheme(isDark) {
    document.body.classList.toggle('dark-mode', isDark);
    themeToggle.setAttribute('aria-pressed', isDark);
    themeToggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
}

// use the saved choice, or follow the phone's setting
let savedTheme = null;
try {
    savedTheme = localStorage.getItem('theme');
} catch (error) {
    // storage can be blocked, just carry on
}
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
applyTheme(savedTheme ? savedTheme === 'dark' : prefersDark);

themeToggle.addEventListener('click', () => {
    const isDark = !document.body.classList.contains('dark-mode');
    applyTheme(isDark);
    try {
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    } catch (error) {
        // ignore if storage is blocked
    }
});

// stars for the night sky (css hides them in light mode)
const starBox = document.getElementById('stars');

for (let i = 0; i < 70; i++) {
    const star = document.createElement('span');
    const size = 1 + Math.random() * 2;

    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.width = size + 'px';
    star.style.height = size + 'px';
    star.style.opacity = 0.3 + Math.random() * 0.7;

    starBox.appendChild(star);
}
