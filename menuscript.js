document.addEventListener('DOMContentLoaded', () => {
    // Get all game items
    const gameItems = document.querySelectorAll('.game-item');

    // Add hover effects to each game item
    gameItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            const overlay = item.querySelector('.game-overlay');
            overlay.style.opacity = '1'; // Show the overlay on hover
        });

        item.addEventListener('mouseout', () => {
            const overlay = item.querySelector('.game-overlay');
            overlay.style.opacity = '0'; // Hide the overlay when not hovering
        });
    });
});