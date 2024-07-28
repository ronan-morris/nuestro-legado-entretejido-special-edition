// Set the initial language
function setInitialLanguage() {
    const currentLang = localStorage.getItem('language') || 'en';
    setLanguage(currentLang);
}

// Toggle language and save preference
function toggleLanguage() {
    const langToggle = document.getElementById('langToggle');
    const currentLang = langToggle.textContent.toLowerCase();
    const newLang = currentLang === 'en' ? 'es' : 'en';
    setLanguage(newLang);
    localStorage.setItem('language', newLang);
}

// Set language based on saved preference
function setLanguage(lang) {
    const langToggle = document.getElementById('langToggle');
    const enElements = document.querySelectorAll('.lang-en');
    const esElements = document.querySelectorAll('.lang-es');

    langToggle.textContent = lang.toUpperCase();
    if (lang === 'es') {
        enElements.forEach(el => el.style.display = 'none');
        esElements.forEach(el => el.style.display = 'inline');
    } else {
        enElements.forEach(el => el.style.display = 'inline');
        esElements.forEach(el => el.style.display = 'none');
    }
}

// Call setInitialLanguage when the page loads
document.addEventListener('DOMContentLoaded', setInitialLanguage);