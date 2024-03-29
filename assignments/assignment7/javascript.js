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

let isMenuVisible = false;

function toggleMenu() {
    const exercise1Content = document.getElementById('exercise1-content');
    const exercise2Content = document.getElementById('exercise2-content');

    if (!isMenuVisible) {
        exercise1Content.style.display = 'block';
        exercise2Content.style.display = 'block';
        isMenuVisible = true;
    } else {
        exercise1Content.style.display = 'none';
        exercise2Content.style.display = 'none';
        isMenuVisible = false;
    }
}

window.addEventListener('load', function() {

    if (window.innerWidth <= 768) {
        const exercise1Content = document.getElementById('exercise1-content');
        const exercise2Content = document.getElementById('exercise2-content');
        exercise1Content.style.display = 'none';
        exercise2Content.style.display = 'none';
    }

});

function determineOrder() {
    const name1 = document.getElementById('name1').value;
    const age1 = parseInt(document.getElementById('age1').value);
    const name2 = document.getElementById('name2').value;
    const age2 = parseInt(document.getElementById('age2').value);
    const name3 = document.getElementById('name3').value;
    const age3 = parseInt(document.getElementById('age3').value);

    if (isNaN(age1) || isNaN(age2) || isNaN(age3)) {
        document.getElementById('order-result').innerHTML = "Please enter valid ages.";
    } else {
        const people = [
            { name: name1, age: age1 },
            { name: name2, age: age2 },
            { name: name3, age: age3 }
        ];

        people.sort((a, b) => b.age - a.age);

        const sortedNames = people.map(person => person.name);

        document.getElementById('order-result').innerHTML = "Ordered names by age: " + sortedNames.join(', ');
    }
}

function updateThermometer() {
    const donation = parseInt(document.getElementById('donation').value);
    const goal = 10000;

    if (!isNaN(donation)) {
        const percentage = Math.min((donation / goal) * 100, 100); // Cap at 100%
        const thermometer = document.querySelector('.thermometer');
        thermometer.style.background = `linear-gradient(to top, red ${percentage}%, white ${percentage}%)`;
    }
}

document.getElementById('menu-icon').addEventListener('click', toggleMenu);
window.addEventListener('load', function() {
    showExercise('exercise1');
});