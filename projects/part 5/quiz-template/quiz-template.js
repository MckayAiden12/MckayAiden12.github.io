document.addEventListener("DOMContentLoaded", function () {
    const quizForm = document.getElementById('quizForm');
    const resultDiv = document.getElementById('result');
    let quizData; // Define quizData in a higher scope

    // Fetch the JSON data from the external file
    fetch('quiz-questions.json')
        .then(response => response.json())
        .then(data => {
            quizData = data; // Assign the fetched data to quizData
            // Create and display quiz questions
            quizData.questions.forEach((questionData, index) => {
                const questionDiv = document.createElement('div');
                questionDiv.className = 'question';

                const questionTitle = document.createElement('h2');
                questionTitle.textContent = `Question ${index + 1}: ${questionData.question}`;

                questionDiv.appendChild(questionTitle);

                questionData.options.forEach((option, optionIndex) => {
                    const label = document.createElement('label');
                    label.innerHTML = `<input type="radio" data-question="${index + 1}" name="q${index + 1}" value="${String.fromCharCode(97 + optionIndex)}"> ${option}`;
                    questionDiv.appendChild(label);
                });

                quizForm.appendChild(questionDiv);
            });

            // Add the "Submit quiz" button without overwriting the questions
            const submitButton = document.createElement('input');
            submitButton.type = 'submit';
            submitButton.value = 'Submit quiz';
            quizForm.appendChild(submitButton);
        })
        .catch(error => {
            console.error('Failed to fetch quiz data:', error);
        });

    quizForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const totalQuestions = quizForm.getElementsByClassName('question').length;
        let score = 0;

        for (let i = 1; i <= totalQuestions; i++) {
            const selectedOption = document.querySelector(`input[data-question="${i}"]:checked`);
            const questionData = quizData.questions[i - 1];

            if (selectedOption) {
                if (selectedOption.value === questionData.correctAnswer) {
                    score++;
                }
            }
        }

        const percentage = (score / totalQuestions) * 100;

        if (percentage >= 70) {
            resultDiv.innerHTML = `You got ${score} out of ${totalQuestions} correct. Great job!`;
        } else {
            resultDiv.innerHTML = `You got ${score} out of ${totalQuestions} correct. You need to study more.`;
        }
    });
});