// Function to check the user's answer
function checkAnswer() {
    // The correct answer
    const correctAnswer = "4";

    // Get the user's selected answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked');

    // Element for displaying feedback
    const feedback = document.getElementById('feedback');

    // Check if an answer is selected
    if (userAnswer) {
        // Compare user's answer with the correct answer
        if (userAnswer.value === correctAnswer) {
            feedback.textContent = "Correct! Well done.";
            feedback.style.color = "green"; // Optional: Change feedback text color
        } else {
            feedback.textContent = "That's incorrect. Try again!";
            feedback.style.color = "red"; // Optional: Change feedback text color
        }
    } else {
        // No answer selected
        feedback.textContent = "Please select an answer!";
        feedback.style.color = "orange"; // Optional: Change feedback text color
    }
}

// Add event listener to the Submit button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
