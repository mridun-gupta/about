/* timer Logic */
let timeRemaining = 1000;

function updateTimer() {
    const timerElements = document.querySelectorAll('.timer');
    if (timeRemaining > 0) {
        timeRemaining--;
        timerElements.forEach(timerElement => {
            timerElement.textContent = timeRemaining;
        });
    } else {
        window.location.href = 'https://www.mridungupta.eu.org/';
    }
}

setInterval(updateTimer, 1000);
