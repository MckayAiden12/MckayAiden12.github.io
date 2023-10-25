document.getElementById('addQuestion').addEventListener('click', function() {
    const questionContainer = document.getElementById('question-container');
    const questionCount = questionContainer.children.length;

    const questionDiv = document.createElement('div');
    questionDiv.classList.add('question');
    questionDiv.name = `q${questionCount + 1}`;

    const questionTitle = document.createElement('h2');
    questionTitle.textContent = `Question ${questionCount + 1}:`;

    const questionText = document.createElement('input');
    questionText.type = 'text';
    questionText.name = `questionText${questionCount + 1}`;
    questionText.placeholder = 'Enter the question text';

    const answerInputs = [];
    const answerLabels = [];

    for (let i = 0; i < 3; i++) {
        const answerLabel = document.createElement('label');
        const answerInput = document.createElement('input');
        answerInput.type = 'radio';
        answerInput.name = `q${questionCount + 1}`;
        answerInput.value = String.fromCharCode(97 + i);
        answerLabel.appendChild(answerInput);
        answerLabel.appendChild(document.createTextNode(` ${String.fromCharCode(97 + i)}) `));
        answerLabel.appendChild(document.createElement('input'));
        answerInputs.push(answerInput);
        answerLabels.push(answerLabel);
    }

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        questionContainer.removeChild(questionDiv);
    });

    questionDiv.appendChild(questionTitle);
    questionDiv.appendChild(questionText);

    answerLabels.forEach((label) => {
        questionDiv.appendChild(label);
    });

    questionDiv.appendChild(deleteButton);
    questionContainer.appendChild(questionDiv);
});

document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const quizName = document.querySelector('.q-title h1').textContent;
    const questions = document.querySelectorAll('.question');
    const answers = {};

    questions.forEach((question, index) => {
        const questionText = question.querySelector(`input[name="questionText${index + 1}"]`).value;
        const selectedOption = question.querySelector(`input[name="q${index + 1}"]:checked`);

        if (questionText && selectedOption) {
            answers[`q${index + 1}`] = selectedOption.value;
        }
    });

    const resultDiv = document.getElementById('result');
    const percentage = (score / totalQuestions) * 100;

    if (percentage >= 70) {
        resultDiv.innerHTML = `You got ${score} out of ${totalQuestions} correct. Great job on the "${quizName}" quiz!`;
    } else {
        resultDiv.innerHTML = `You got ${score} out of ${totalQuestions} correct on the "${quizName}" quiz. You need to study more.`;
    }
});