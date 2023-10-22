const themeIcon = document.getElementById('theme-icon')
themeIcon.addEventListener('click', toggleThemes);

function toggleThemes() {
    document.documentElement.classList.toggle('dark')
    changeThemeIcon(document.documentElement.classList[0]);
}

function changeThemeIcon(theme) {
    const moonIcon = 'fa-moon'
    const sunIcon = 'fa-sun'

    if (theme === 'dark' && themeIcon.classList.contains(moonIcon)) {
        themeIcon.classList.remove(moonIcon);
        themeIcon.classList.add(sunIcon);
    } else {
        if (themeIcon.classList.contains(sunIcon)) {
            themeIcon.classList.remove(sunIcon);
        }
        themeIcon.classList.add(moonIcon);
    }
}