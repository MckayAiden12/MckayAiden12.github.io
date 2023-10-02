let currentValue = 0;

function updateThermometer() {
    const valueInput = document.getElementById('valueInput');
    const thermometerFill = document.getElementById('thermometerFill');
    const value = parseFloat(valueInput.value);

    if (!isNaN(value)) {
        currentValue = value;
        const percentage = Math.min((currentValue / 10000) * 100, 100); // Cap at 100%
        thermometerFill.style.height = percentage + '%';
    } else {
        alert('Please enter a valid number.');
    }
}

const runningMan = document.getElementById('runningMan');
let isRunning = false;
let isWalking = true;
let animationFrame;
const maxMargin = window.innerWidth - 1000; // Adjust this value as needed

runningMan.addEventListener('click', () => {
    if (isWalking) {
        isWalking = false;
        animateRunningMan();
    } else {
        isWalking = true;
        cancelAnimationFrame(animationFrame);
    }
});

function animateRunningMan() {
    if (!isWalking) {
        const currentMargin = parseInt(getComputedStyle(runningMan).marginLeft) || 0;
        const incrementValue = 10; // Adjust this value for speed
        const delayBetweenImages = 100; // Adjust this value for smoother transition

        const newMargin = currentMargin + incrementValue;

        // Check if newMargin exceeds the maximum limit
        if (newMargin <= maxMargin) {
            runningMan.style.marginLeft = `${newMargin}px`;
        } else {
            runningMan.style.marginLeft = `${maxMargin}px`;
            isWalking = true; // Stop when the box ends
        }

        if (!isWalking) {
            runningMan.src = 'running-man.png';
            setTimeout(() => {
                runningMan.src = 'walking-man.png';
                animateRunningMan();
            }, delayBetweenImages);
        }

        animationFrame = requestAnimationFrame(animateRunningMan);
    }
}