const gridContainer = document.getElementById("grid-container");
const timerDisplay = document.getElementById("timer");
const resetButton = document.getElementById("reset-btn");
const menuButton = document.getElementById("menu-btn");

let numbers = [];
let currentNumber = 1;
let timer = 0;
let timerInterval = null;

// Generate and shuffle numbers
function generateNumbers() {
    numbers = Array.from({ length: 25 }, (_, i) => i + 1).sort(() => Math.random() - 0.5);
}

// Create the grid
function createGrid() {
    gridContainer.innerHTML = "";
    numbers.forEach((num) => {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        gridItem.textContent = num;
        gridItem.addEventListener("click", () => handleClick(gridItem, num));
        gridContainer.appendChild(gridItem);
    });
}

// Handle number clicks
function handleClick(gridItem, num) {
    if (num === currentNumber) {
        gridItem.classList.add("correct");
        if (currentNumber === 1) startTimer();
        if (currentNumber === 25) endGame();
        currentNumber++;
    } else {
        endGame("wrong");
        gridItem.classList.add("wrong");
    }
}

// Start the timer
function startTimer() {
    timer = 0;
    timerInterval = setInterval(() => {
        timer += 0.01;
        timerDisplay.textContent = `Time: ${timer.toFixed(2)}s`;
    }, 10);
}

// End the game
function endGame(status = "success") {
    clearInterval(timerInterval);
    const message = status === "success" ? `Game Over! You completed it in ${timer.toFixed(2)}s!` : "Game Over! You clicked the wrong number.";
    alert(message);
    resetGame();
}

// Reset the game
function resetGame() {
    clearInterval(timerInterval);
    timerDisplay.textContent = "Time: 0.00s";
    currentNumber = 1;
    generateNumbers();
    createGrid();
}

// Event listeners
resetButton.addEventListener("click", resetGame);
menuButton.addEventListener("click", () => (window.location.href = "/menuindex.html"));

// Initialize game
generateNumbers();
createGrid();