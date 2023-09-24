function showExercise(exerciseId) {
    if (exerciseId === 'exercise1') {
        document.getElementById('exercise1-content').style.display = 'block';
        document.getElementById('exercise2-content').style.display = 'none';
        document.querySelector('.menu-item.active').classList.remove('active');
        document.querySelector('.menu-item:nth-child(1)').classList.add('active');
    } else if (exerciseId === 'exercise2') {
        document.getElementById('exercise1-content').style.display = 'none';
        document.getElementById('exercise2-content').style.display = 'block';
        document.querySelector('.menu-item.active').classList.remove('active');
        document.querySelector('.menu-item:nth-child(2)').classList.add('active');
    }
}

function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

function determineOrder() {
    const age1 = parseInt(document.getElementById('age1').value);
    const age2 = parseInt(document.getElementById('age2').value);
    const age3 = parseInt(document.getElementById('age3').value);

    if (isNaN(age1) || isNaN(age2) || isNaN(age3)) {
        document.getElementById('order-result').innerHTML = "Please enter valid ages.";
    } else {
        const ages = [age1, age2, age3];
        ages.sort((a, b) => b - a);
        document.getElementById('order-result').innerHTML = "Ordered ages: " + ages.join(', ');
    }
}

function updateThermometer() {
    const donation = parseInt(document.getElementById('donation').value);
    const goal = 10000; // Set your fundraising goal here

    if (!isNaN(donation)) {
        const percentage = Math.min((donation / goal) * 100, 100); // Cap at 100%
        const thermometer = document.querySelector('.thermometer');
        thermometer.style.background = `linear-gradient(to top, red ${percentage}%, white ${percentage}%)`;
    }
}

// Toggle the menu for small screens when clicking the hamburger icon
document.getElementById('menu-icon').addEventListener('click', toggleMenu);
window.addEventListener('load', function() {
    // Show Exercise 1 by default
    showExercise('exercise1');
});