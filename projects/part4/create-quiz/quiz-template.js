document.getElementById('quizForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const questions = []; // Store user-generated questions and answers

    // Collect user-generated questions and answers
    const questionElements = document.querySelectorAll('.question');
    questionElements.forEach((questionElement) => {
        const questionText = questionElement.querySelector('h2').textContent;
        const answers = Array.from(questionElement.querySelectorAll('input[type="text"]'))
            .map((input) => input.value);

        questions.push({ questionText, answers });
    });

    const totalQuestions = questions.length;
    const userAnswers = [];

    // Check user's answers
    questions.forEach((question, index) => {
        const selectedAnswer = question.answers.find((answer, i) => {
            return questionElement.querySelector(`input[name="q${index + 1}"][value="${i}"]:checked`);
        });
        userAnswers.push(selectedAnswer);
    });

    let score = userAnswers.filter((answer, index) => {
        return answer === questions[index].answers[0];
    }).length;

    const resultDiv = document.getElementById('result');
    const percentage = (score / totalQuestions) * 100;

    if (percentage >= 70) {
        resultDiv.innerHTML = `You got ${score} out of ${totalQuestions} correct. Great job!`;
    } else {
        resultDiv.innerHTML = `You got ${score} out of ${totalQuestions} correct. You need to study more.`;
    }
});

// Function to add a new question with inputs for question text and answers
function addQuestion() {
    const questionsContainer = document.getElementById('questions-container');
    const questionDiv = document.createElement('div');
    questionDiv.className = 'question';

    const questionNumber = questionsContainer.childElementCount + 1;
    questionDiv.innerHTML = `
        <h2>Question ${questionNumber}:</h2>
        <input type="text" name="q${questionNumber}" placeholder="Enter your question" required>
        <br>
        <label>
            a) <input type="radio" name="q${questionNumber}" value="0" required>
            <input type="text" name="q${questionNumber}" placeholder="Enter answer a" required>
        </label>
        <label>
            b) <input type="radio" name="q${questionNumber}" value="1" required>
            <input type="text" name="q${questionNumber}" placeholder="Enter answer b" required>
        </label>
        <label>
            c) <input type="radio" name="q${questionNumber}" value="2" required>
            <input type="text" name="q${questionNumber}" placeholder="Enter answer c" required>
        </label>
    `;

    questionsContainer.appendChild(questionDiv);
}

// Function to remove the last added question
function removeQuestion() {
    const questionsContainer = document.getElementById('questions-container');
    const lastQuestion = questionsContainer.lastElementChild;
    if (lastQuestion) {
        questionsContainer.removeChild(lastQuestion);
    }
}

// Event listeners for adding and removing questions
document.getElementById('add-question-button').addEventListener('click', addQuestion);
document.getElementById('remove-question-button').addEventListener('click', removeQuestion);