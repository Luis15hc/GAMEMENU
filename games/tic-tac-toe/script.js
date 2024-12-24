document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('board');
    const cells = Array.from(document.querySelectorAll('.cell'));
    const status = document.getElementById('status');
    const resetButton = document.getElementById('reset');
    const backButton = document.getElementById('back-to-menu');

    let currentPlayer = 'X';
    let boardState = Array(9).fill(null);

    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    const checkWinner = () => {
        for (let [a, b, c] of winningCombinations) {
            if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
                return boardState[a];
            }
        }
        return boardState.every(cell => cell) ? 'Draw' : null;
    };

    const handleClick = (e) => {
        const index = e.target.dataset.index;

        if (!boardState[index]) {
            boardState[index] = currentPlayer;
            e.target.textContent = currentPlayer;
            const winner = checkWinner();

            if (winner) {
                status.textContent = winner === 'Draw' ? 'It\'s a Draw!' : `Player ${winner} Wins!`;
                cells.forEach(cell => cell.removeEventListener('click', handleClick));
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                status.textContent = `Player ${currentPlayer}'s turn`;
            }
        }
    };

    const resetGame = () => {
        boardState.fill(null);
        cells.forEach(cell => cell.textContent = '');
        currentPlayer = 'X';
        status.textContent = `Player ${currentPlayer}'s turn`;
        cells.forEach(cell => cell.addEventListener('click', handleClick));
    };

    const goBackToMenu = () => {
        window.location.href = '/menuindex.html'; // Correct route
    };

    cells.forEach(cell => cell.addEventListener('click', handleClick));
    resetButton.addEventListener('click', resetGame);
    backButton.addEventListener('click', goBackToMenu);
});