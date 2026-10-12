// all main.js is ai


/* =========================================
   PURPLE CYBER BACKGROUND STAR EFFECT
   Added code - keep existing JavaScript above
   ========================================= */

document.addEventListener("DOMContentLoaded", function () {
    const background = document.querySelector(".star-field");

    // Stop safely if the decorative background is not present.
    if (!background) return;

    // Avoid adding duplicate stars if this code runs again.
    if (background.children.length > 0) return;

    const starCount = 65;

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement("span");

        star.classList.add("cyber-star");

        // Random position across the screen.
        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";

        // Vary star sizes.
        const size = Math.random() > 0.8 ? 4 : 2;
        star.style.width = size + "px";
        star.style.height = size + "px";

        // Stagger twinkling so stars do not flash together.
        star.style.animationDelay = Math.random() * 4 + "s";
        star.style.animationDuration =
            (1.5 + Math.random() * 3) + "s";

        background.appendChild(star);
    }
});
