/* timer Logic */
let timeRemaining = 10000;

function updateTimer() {
    const timerElements = document.querySelectorAll(".timer");
    if (timeRemaining > 0) {
        timeRemaining--;
        timerElements.forEach(timerElement => {
            timerElement.textContent = timeRemaining;
        });
    } else {
        window.location.href = "";
    }
}

setInterval(updateTimer, 1000);