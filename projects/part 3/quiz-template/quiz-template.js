document.getElementById('quizForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const answers = {
        q1: 'c',
        q2: 'b',
        q3: 'b',
        q4: 'a',
        q5: 'c',
        q6: 'b',
        q7: 'b',
        q8: 'c'
    };

    const totalQuestions = Object.keys(answers).length;

    let score = 0;

    for (let question in answers) {
        const selectedOption = document.querySelector(`input[name="${question}"]:checked`);
        if (selectedOption) {
            const questionDiv = document.querySelector(`div[name="${question}`);
            if (selectedOption.value === answers[question]) {
                score++;
                questionDiv.style.color = 'green';
            } else {
                questionDiv.style.color = 'red';
            }
        }
    }

    const resultDiv = document.getElementById('result');
    const percentage = (score / totalQuestions) * 100;

    if (percentage >= 70) {
        resultDiv.innerHTML = `You got ${score} out of ${totalQuestions} correct. Great job!`;
    } else {
        resultDiv.innerHTML = `You got ${score} out of ${totalQuestions} correct. You need to study more.`;
    }
});