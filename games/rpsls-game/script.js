// Function to handle the user's choice
function userChoice(choice) {
    // Randomly generate the machine's choice
    const choices = ["rock", "paper", "scissors", "lizard", "spock"];
    const machineChoice = choices[Math.floor(Math.random() * choices.length)];

    // Display choices
    document.getElementById("user-choice-text").textContent = choice;
    document.getElementById("machine-choice-text").textContent = machineChoice;

    // Show the machine's choice image
    document.getElementById("machine-choice-image").style.display = "inline";
    document.getElementById("machine-choice-image").src = `assets/images/${machineChoice}.png`;

    // Clear previous result and reset the message
    document.getElementById("result-message").textContent = "Waiting for the result...";

    // Disable the buttons during the timer
    disableButtons(true);

    // Set a timer for 1 second before revealing the result
    setTimeout(() => {
        const result = determineWinner(choice, machineChoice);
        displayResult(result);
        disableButtons(false);  // Enable buttons after result is displayed
    }, 1000);  // 1 second delay
}

// Function to determine the winner
function determineWinner(user, machine) {
    const winningCombinations = {
        rock: ["scissors", "lizard"],
        paper: ["rock", "spock"],
        scissors: ["paper", "lizard"],
        lizard: ["paper", "spock"],
        spock: ["rock", "scissors"]
    };

    if (user === machine) {
        return "tie";
    } else if (winningCombinations[user].includes(machine)) {
        return "win";
    } else {
        return "lose";
    }
}

// Function to display the result
function displayResult(result) {
    const resultMessage = document.getElementById("result-message");
    const resultText = document.getElementById("result-text");
    const resultClass = {
        win: "win",
        lose: "lose",
        tie: "tie"
    };

    // Clear previous classes and add the new class
    resultText.classList.remove("win", "lose", "tie");
    resultText.classList.add(resultClass[result]);

    // Display the corresponding result message
    if (result === "win") {
        resultMessage.textContent = "You Win!";
    } else if (result === "lose") {
        resultMessage.textContent = "You Lose!";
    } else {
        resultMessage.textContent = "It's a Tie!";
    }
}

// Function to disable/enable the choice buttons
function disableButtons(disable) {
    const buttons = document.querySelectorAll('.choice-btn');
    buttons.forEach(button => {
        button.disabled = disable;
    })
};

// Function to reset the game
function resetGame() {
    // Clear choices
    document.getElementById("user-choice-text").textContent = "None";
    document.getElementById("machine-choice-text").textContent = "None";
    document.getElementById("result-message").textContent = "Make a choice!";
    
    // Hide machine choice image
    document.getElementById("machine-choice-image").style.display = "none";
    
    // Enable buttons
    disableButtons(false);
}

// Function to navigate back to the main menu
function goToMenu() {
    window.location.href = "/menuindex.html"; // Change to the correct file path
}

// Event listeners for the buttons
document.getElementById("rock").addEventListener("click", () => userChoice("rock"));
document.getElementById("paper").addEventListener("click", () => userChoice("paper"));
document.getElementById("scissors").addEventListener("click", () => userChoice("scissors"));
document.getElementById("lizard").addEventListener("click", () => userChoice("lizard"));
document.getElementById("spock").addEventListener("click", () => userChoice("spock"));

// Event listeners for the new buttons
document.getElementById("reset-btn").addEventListener("click", resetGame);
document.getElementById("menu-btn").addEventListener("click", goToMenu);