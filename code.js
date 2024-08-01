// Function to generate a random number between min and max (inclusive)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to play the Craps game
function playCraps() {
    // Generate two random numbers between 1 and 6
    const die1 = getRandomNumber(1, 6);
    const die2 = getRandomNumber(1, 6);

    // Calculate the sum of the two dice
    const sum = die1 + die2;

    // Get the result div to display the output
    const resultDiv = document.getElementById('result');

    // Determine the game outcome based on the sum and values of the dice
    if (sum === 7 || sum === 11) {
        // If the sum is 7 or 11, the player loses
        resultDiv.innerHTML = `Dice: ${die1}, ${die2} - Sum: ${sum} - CRAPS! You lose!`;
    } else if (die1 === die2 && die1 % 2 === 0) {
        // If the dice are doubles and even, the player wins
        resultDiv.innerHTML = `Dice: ${die1}, ${die2} - Sum: ${sum} - You won!`;
    } else {
        // Otherwise, it's a push
        resultDiv.innerHTML = `Dice: ${die1}, ${die2} - Sum: ${sum} - You pushed!`;
    }
}

// Add an event listener to the play button to call the playCraps function when clicked
document.getElementById('playButton').addEventListener('click', playCraps);