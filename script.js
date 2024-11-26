document.addEventListener("DOMContentLoaded", () => {
    const navbarButtons = document.querySelectorAll(".navbar button");
    const sections = document.querySelectorAll(".section");

    // Fonction pour afficher la section et cacher les autres
    const showSection = (sectionId) => {
        sections.forEach((section) => {
            if (section.id === sectionId) {
                section.classList.remove("hidden");
            } else {
                section.classList.add("hidden");
            }
        });
    };

    // Ajouter un événement clic à chaque bouton de navigation
    navbarButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const targetSectionId = button.getAttribute("data-section");
            showSection(targetSectionId);
        });
    });

    // Afficher la section "home" par défaut
    showSection("home");
});
