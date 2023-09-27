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