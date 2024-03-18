let questionCount = 0;
let correctAnswers = 0;

function generateQuestion() {
    const randomNumber = Math.floor(Math.random() * 101);
    document.getElementById('question').innerText = `What is the square of ${randomNumber}?`;
}

function checkAnswer() {
    const userAnswer = parseInt(document.getElementById('answerInput').value);
    if (!isNaN(userAnswer)) {
        const randomNumber = parseInt(document.getElementById('question').innerText.split(' ').pop());
        const actualSquare = randomNumber ** 2;
        if (userAnswer === actualSquare) {
            document.getElementById('result').innerText = 'Correct!';
            correctAnswers++;
        } else {
            document.getElementById('result').innerText = `Incorrect. The square of ${randomNumber} is ${actualSquare}.`;
        }
        questionCount++;
        if (questionCount < 5) {
            setTimeout(generateQuestion, 1000);
            document.getElementById('answerInput').value = '';
        } else {
            const percentageCorrect = (correctAnswers / 5) * 100;
            document.getElementById('question').innerText = `Quiz completed!`;
            document.getElementById('answerInput').style.display = 'none';
            document.getElementById('submitBtn').style.display = 'none';
            document.getElementById('result').innerText = `Total correct answers: ${correctAnswers}. Percentage correct: ${percentageCorrect.toFixed(2)}%`;
        }
    } else {
        document.getElementById('result').innerText = 'Invalid input. Please enter a valid number.';
    }
}

document.getElementById('submitBtn').addEventListener('click', checkAnswer);

generateQuestion();
