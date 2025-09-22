document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("active");
        hamburger.classList.toggle("open"); // Ajout de la classe "open" pour la croix
    });
});

function showMenu(category) {
    let sections = document.querySelectorAll(".menu-section");
    sections.forEach(section => {
        section.style.display = "none";
    });

    document.getElementById(category).style.display = "block";
}

// Affiche la première section par défaut
document.addEventListener("DOMContentLoaded", function() {
    showMenu('entrees');
});

document.getElementById("reservation-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Récupérer les valeurs du formulaire
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;
    let guests = document.getElementById("guests").value;

    // Numéro WhatsApp du restaurant (format international sans le "+")
    let whatsappNumber = "2250797484729"; // Remplace par ton numéro

    // Message à envoyer
    let message = `📢 Nouvelle réservation au restaurant !%0A👤 Nom: ${name}%0A📧 Email: ${email}%0A📞 Téléphone: ${phone}%0A📅 Date: ${date}%0A⏰ Heure: ${time}%0A👥 Nombre de personnes: ${guests}`;

    // Générer le lien WhatsApp
    let whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;

    // Ouvrir WhatsApp
    window.open(whatsappURL, "_blank");

    // Réinitialiser le formulaire
    document.getElementById("reservation-form").reset();
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("comment-form");
    const commentList = document.getElementById("comment-list");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Empêche le rechargement de la page

        const name = document.getElementById("name").value;
        const comment = document.getElementById("comment").value;

        if (name.trim() === "" || comment.trim() === "") {
            alert("Veuillez remplir tous les champs.");
            return;
        }

        // Créer un nouvel élément de commentaire
        const newComment = document.createElement("li");
        newComment.innerHTML = `<strong>${name}:</strong> ${comment}`;

        // Ajouter le commentaire à la liste
        commentList.appendChild(newComment);

        // Réinitialiser le formulaire
        form.reset();
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll(".nav-links a");

    links.forEach(link => {
        link.addEventListener("click", function() {
            links.forEach(l => l.classList.remove("active")); // Supprime la classe active de tous les liens
            this.classList.add("active"); // Ajoute la classe active au lien cliqué
        });
    });
});
