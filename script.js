const toggleButton = document.getElementById('mode-toggle');
const body = document.body;
const logo = document.getElementById('logo');
const modeText = document.getElementById('button-text');
const modeIcon = document.getElementById('mode-icon');

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        logo.src = 'logodark.png';
        modeText.textContent = 'Modo Claro';
        modeIcon.src = 'light.png';
    } else {
        logo.src = 'logolight.png';
        modeText.textContent = 'Modo Escuro';
        modeIcon.src = 'dark.png';
    }
});
