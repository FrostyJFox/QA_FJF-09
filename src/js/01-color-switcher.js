function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
const colorNumber = document.getElementById('color-number');
const body = document.body;
let colorChangeInterval;
let currentColor = '';

startButton.addEventListener('click', () => {
    startButton.disabled = true;

    colorChangeInterval = setInterval(() => {
        currentColor = getRandomHexColor();
        body.style.backgroundColor = currentColor;

        // Update the color number
        colorNumber.textContent = `Current Color: ${currentColor}`;
    }, 1000);
});

stopButton.addEventListener('click', () => {
    startButton.disabled = false;
    clearInterval(colorChangeInterval);
});