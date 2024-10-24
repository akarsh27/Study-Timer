// Stopwatch variables
let stopwatchTime = 0; // Time in milliseconds
let stopwatchInterval = null;
let isStopwatchRunning = false;

// Elements
const stopwatchDisplay = document.getElementById('stopwatchDisplay');
const startStopwatchBtn = document.getElementById('startStopwatchBtn');
const stopStopwatchBtn = document.getElementById('stopStopwatchBtn');
const resetStopwatchBtn = document.getElementById('resetStopwatchBtn');

// Start stopwatch
startStopwatchBtn.addEventListener('click', () => {
    if (!isStopwatchRunning) {
        stopwatchInterval = setInterval(updateStopwatchDisplay, 10); // Update every 10ms
        isStopwatchRunning = true;
    }
});

// Stop stopwatch
stopStopwatchBtn.addEventListener('click', () => {
    clearInterval(stopwatchInterval);
    isStopwatchRunning = false;
});

// Reset stopwatch
resetStopwatchBtn.addEventListener('click', () => {
    clearInterval(stopwatchInterval);
    stopwatchTime = 0;
    isStopwatchRunning = false;
    updateStopwatchDisplay();
});

// Update stopwatch display
function updateStopwatchDisplay() {
    stopwatchTime += 10; // Increase time by 10ms
    const hours = Math.floor(stopwatchTime / (1000 * 60 * 60));
    const minutes = Math.floor((stopwatchTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((stopwatchTime % (1000 * 60)) / 1000);
    const milliseconds = Math.floor((stopwatchTime % 1000) / 10);
    
    stopwatchDisplay.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Theme handling (same as in the timer page)
const themeSelect = document.getElementById('themeSelect');
const saveThemeBtn = document.getElementById('saveTheme');
const settingsSidebar = document.getElementById('settingsSidebar');
const settingsIcon = document.getElementById('settingsIcon');
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

// Save theme
saveThemeBtn.addEventListener('click', () => {
    const selectedTheme = themeSelect.value;
    document.body.style.backgroundImage = `url(${themeBackgrounds[selectedTheme]})`;
});

// Set default background
document.body.style.backgroundImage = `url(${themeBackgrounds['default']})`;
