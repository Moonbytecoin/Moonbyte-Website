
document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;

    // Create and animate shooting stars
    for (let i = 0; i < 50; i++) {
        createShootingStar();
    }

    function createShootingStar() {
        const star = document.createElement("div");
        star.className = "shooting-star";
        body.appendChild(star);

        // Randomize position and delay
        const startX = Math.random() * window.innerWidth;
        const startY = Math.random() * window.innerHeight / 2; // Top half of the screen
        const duration = Math.random() * 3 + 2; // Between 2 and 5 seconds
        const size = Math.random() * 2 + 1; // Between 1 and 3 pixels

        star.style.left = `${startX}px`;
        star.style.top = `${startY}px`;
        star.style.width = `${size}px`;
        star.style.height = `${size * 10}px`; // Elongated for shooting effect
        star.style.animationDuration = `${duration}s`;

        // Remove star after animation
        star.addEventListener("animationend", () => {
            star.remove();
            createShootingStar(); // Create a new star after one finishes
        });
    }
});
