// Timer variables
let timerDuration = 25 * 60; // 25 minutes in seconds
let currentTimer = timerDuration;
let timerInterval = null;
let isRunning = false;

// Elements
const timerDisplay = document.getElementById('timerDisplay');
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');
const themeSelect = document.getElementById('themeSelect');
const saveThemeBtn = document.getElementById('saveTheme');
const settingsSidebar = document.getElementById('settingsSidebar');
const settingsIcon = document.getElementById('settingsIcon');
const customMinutes = document.getElementById('customMinutes');
const customSeconds = document.getElementById('customSeconds');
const saveCustomTimeBtn = document.getElementById('saveCustomTime');
const closeSidebarBtn = document.getElementById('closeSidebar');

// Background image URLs
const themeBackgrounds = {
    default: 'https://images.unsplash.com/photo-1500964757637-c85e8a162699?q=80&w=2103&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA==',
    forest: 'https://images.unsplash.com/photo-1727950183920-654c2feee258?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    mountain: 'https://images.unsplash.com/photo-1554147090-e1221a04a025?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA==',
    sunset: 'https://images.unsplash.com/photo-1727013031787-858020654797?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    stars: 'https://images.unsplash.com/photo-1537819191377-d3305ffddce4?q=80&w=2021&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA==',
    river: 'https://images.unsplash.com/photo-1504858700536-882c978a3464?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    
};

// Open/Close sidebar
settingsIcon.addEventListener('click', (e) => {
    e.stopPropagation();  // Prevents click event propagation
    settingsSidebar.classList.toggle('show');
});

// Close sidebar when clicking outside or on the close button
document.addEventListener('click', function (event) {
    const isClickInsideSidebar = settingsSidebar.contains(event.target);
    const isClickOnHamburger = event.target.closest('#settingsIcon');

    if (!isClickInsideSidebar && !isClickOnHamburger && settingsSidebar.classList.contains('show')) {
        settingsSidebar.classList.remove('show');
    }
});

// Close sidebar when clicking the close button
closeSidebarBtn.addEventListener('click', () => {
    settingsSidebar.classList.remove('show');
});

// Timer functions
startBtn.addEventListener('click', () => {
    if (!isRunning) {
        timerInterval = setInterval(countdown, 1000);
        isRunning = true;
    }
});

resetBtn.addEventListener('click', () => {
    clearInterval(timerInterval);
    currentTimer = timerDuration;
    updateTimerDisplay();
    isRunning = false;
});

// Countdown function
function countdown() {
    if (currentTimer > 0) {
        currentTimer--;
        updateTimerDisplay();
    } else {
        clearInterval(timerInterval);
        isRunning = false;
    }
}

// Update timer display
function updateTimerDisplay() {
    const minutes = Math.floor(currentTimer / 60);
    const seconds = currentTimer % 60;
    timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Save theme
saveThemeBtn.addEventListener('click', () => {
    const selectedTheme = themeSelect.value;
    document.body.style.backgroundImage = `url(${themeBackgrounds[selectedTheme]})`;
});

// Save custom time
saveCustomTimeBtn.addEventListener('click', () => {
    const minutes = parseInt(customMinutes.value);
    const seconds = parseInt(customSeconds.value);
    currentTimer = (minutes * 60) + seconds;
    timerDuration = currentTimer;
    updateTimerDisplay();
});

// Set default background
document.body.style.backgroundImage = `url(${themeBackgrounds['default']})`;
