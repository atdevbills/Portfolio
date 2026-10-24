// Dark & Light Mode Toggle
const themeToggle = document.getElementById('theme-toggle');

function applyTheme(isDark) {
    document.body.classList.toggle('dark-mode', isDark);
    themeToggle.setAttribute('aria-pressed', isDark);
    themeToggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
}

// On load: use the saved choice, or follow the device setting
let savedTheme = null;
try {
    savedTheme = localStorage.getItem('theme');
} catch (error) {
    // Storage can be blocked, so just carry on
}
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
applyTheme(savedTheme ? savedTheme === 'dark' : prefersDark);

themeToggle.addEventListener('click', () => {
    const isDark = !document.body.classList.contains('dark-mode');
    applyTheme(isDark);
    try {
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    } catch (error) {
        // Ignore if storage is blocked
    }
});

// Contact Form WhatsApp Redirection
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Your WhatsApp number in international format (233 = Ghana, leading 0 dropped)
    const phoneNumber = "233593798620";
    const whatsappMessage = `Hello, my name is ${name} (${email}). Message: ${message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Open WhatsApp with the pre-filled message
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
});
