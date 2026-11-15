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
// Right-click easter egg
document.addEventListener('contextmenu', function(e) {
    e.preventDefault(); // Stops the normal menu from popping up
    
    // We create a temporary message on the screen
    const msg = document.createElement('div');
    msg.textContent = "Looking under the hood? 🕵🏾‍♂️ Want a website like this? DM me on WhatsApp!";
    msg.style.position = "fixed";
    msg.style.bottom = "20px";
    msg.style.left = "50%";
    msg.style.transform = "translateX(-50%)";
    msg.style.background = "#0e1633";
    msg.style.color = "#fff";
    msg.style.padding = "12px 24px";
    msg.style.borderRadius = "8px";
    msg.style.fontFamily = "sans-serif";
    msg.style.fontSize = "14px";
    msg.style.zIndex = "9999";
    msg.style.boxShadow = "0 4px 12px rgba(0,0,0,0.2)";
    msg.style.textAlign = "center";
    msg.style.width = "90%";
    msg.style.maxWidth = "400px";
    
    document.body.appendChild(msg);
    
    // Remove the message after 3 seconds
    setTimeout(() => {
        msg.style.transition = "opacity 0.5s ease";
        msg.style.opacity = "0";
        setTimeout(() => msg.remove(), 500);
    }, 3000);
});