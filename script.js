document.addEventListener("DOMContentLoaded", () => {
    const navbarButtons = document.querySelectorAll(".navbar button");
    const sections = document.querySelectorAll(".section");

    navbarButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Récupérer la section cible
            const targetSectionId = button.getAttribute("data-section");
            const targetSection = document.getElementById(targetSectionId);

            if (targetSection) {
                // Défilement fluide vers la section
                targetSection.scrollIntoView({ behavior: "smooth" });

                // Mise en évidence temporaire
                targetSection.style.backgroundColor = "#e0f7fa";
                setTimeout(() => {
                    targetSection.style.backgroundColor = "#fff";
                }, 1000);
            }
        });
    });
});
