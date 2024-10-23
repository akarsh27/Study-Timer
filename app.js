// Timer variables
let timerDuration = 25 * 60; // 25 minutes in seconds
let currentTimer = timerDuration;
let timerInterval = null;
let isRunning = false;

// Timer Display Update
const timerDisplay = document.getElementById('timerDisplay');

function updateDisplay() {
    const minutes = Math.floor(currentTimer / 60);
    const seconds = currentTimer % 60;
    timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

// Start the Timer
document.getElementById('startBtn').addEventListener('click', () => {
    if (!isRunning) {
        timerInterval = setInterval(() => {
            if (currentTimer > 0) {
                currentTimer--;
                updateDisplay();
            } else {
                clearInterval(timerInterval);
                alert("Time's up!");
            }
        }, 1000);
        isRunning = true;
    }
});

// Reset the Timer
document.getElementById('resetBtn').addEventListener('click', () => {
    clearInterval(timerInterval);
    currentTimer = timerDuration;
    updateDisplay();
    isRunning = false;
});

// Initialize the display to the starting value
updateDisplay();
