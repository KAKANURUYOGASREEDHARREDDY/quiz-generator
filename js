const questions = [
    {
        question: "What is the capital of France?",
        choices: ["London", "Berlin", "Madrid", "Paris"],
        correctAnswer: 3
    },
    {
        question: "Which planet is known as the Red Planet?",
        choices: ["Venus", "Earth", "Mars", "Jupiter"],
        correctAnswer: 2
    },
    {
        question: "What is the largest mammal in the world?",
        choices: ["Elephant", "Giraffe", "Whale Shark", "Blue Whale"],
        correctAnswer: 3
    }
];

const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const nextButton = document.getElementById("next-button");
const resultElement = document.getElementById("result");

let currentQuestionIndex = 0;
let score = 0;

function showQuestion(questionIndex) {
    const question = questions[questionIndex];
    questionElement.textContent = question.question;
    choicesElement.innerHTML = "";

    question.choices.forEach((choice, index) => {
        const choiceButton = document.createElement("button");
        choiceButton.textContent = choice;
        choiceButton.addEventListener("click", () => checkAnswer(questionIndex, index));
        choicesElement.appendChild(choiceButton);
    });
}

function checkAnswer(questionIndex, choiceIndex) {
    if (choiceIndex === questions[questionIndex].correctAnswer) {
        score++;
    }

    if (questionIndex < questions.length - 1) {
        showQuestion(questionIndex + 1);
    } else {
        showResult();
    }
}

function showResult() {
    questionElement.textContent = "";
    choicesElement.innerHTML = "";
    resultElement.textContent = `You scored ${score} out of ${questions.length} questions correctly.`;
    resultElement.classList.remove("hidden");
    nextButton.style.display = "none";
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length - 1) {
        showQuestion(currentQuestionIndex + 1);
        currentQuestionIndex++;
    }
});

showQuestion(currentQuestionIndex);
