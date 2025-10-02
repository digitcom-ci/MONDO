document.addEventListener("DOMContentLoaded", function () {
    // MENU BURGER
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.querySelector(".nav-links");
    if (hamburger && navLinks) {
        hamburger.addEventListener("click", function () {
            navLinks.classList.toggle("active");
            hamburger.classList.toggle("open");
        });
    }

    // LIENS NAVBAR ACTIVE
    const links = document.querySelectorAll(".nav-links a");
    links.forEach(link => {
        link.addEventListener("click", function () {
            links.forEach(l => l.classList.remove("active"));
            this.classList.add("active");
        });
    });

    // RESERVATION FORMULAIRE → WhatsApp
    const reservationForm = document.getElementById("reservation-form");
    if (reservationForm) {
        reservationForm.addEventListener("submit", function (event) {
            event.preventDefault();
            let name = document.getElementById("res-name").value;
            let email = document.getElementById("res-email").value;
            let phone = document.getElementById("res-phone").value;
            let date = document.getElementById("res-date").value;
            let time = document.getElementById("res-time").value;
            let guests = document.getElementById("res-guests").value;

            let whatsappNumber = "2250797484729"; // ton numéro
            let message = `📢 Nouvelle réservation !%0A👤 Nom: ${name}%0A📧 Email: ${email}%0A📞 Téléphone: ${phone}%0A📅 Date: ${date}%0A⏰ Heure: ${time}%0A👥 Nombre: ${guests}`;
            let whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;
            window.open(whatsappURL, "_blank");

            reservationForm.reset();
        });
    }

    // COMMENTAIRES
    const commentForm = document.getElementById("comment-form");
    const commentList = document.getElementById("comment-list");
    if (commentForm && commentList) {
        commentForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const name = document.getElementById("com-name").value;
            const comment = document.getElementById("com-text").value;
            if (name.trim() === "" || comment.trim() === "") {
                alert("Veuillez remplir tous les champs.");
                return;
            }
            const newComment = document.createElement("li");
            newComment.innerHTML = `<strong>${name}:</strong> ${comment}`;
            commentList.appendChild(newComment);
            commentForm.reset();
        });
    }

    // MENU SECTION PAR DÉFAUT
    showMenu("entrees");
});

// FONCTION : Afficher sections menu
function showMenu(category) {
    let sections = document.querySelectorAll(".menu-section");
    sections.forEach(section => section.style.display = "none");
    let target = document.getElementById(category);
    if (target) target.style.display = "flex";
}

// FONCTION : Afficher/masquer la carte
function toggleCarte() {
    const carte = document.getElementById("image-carte");
    if (carte) {
        carte.style.display = (carte.style.display === "none" || carte.style.display === "") ? "block" : "none";
    }
}

// FONCTION : Changer catégorie (Pizza, Sucreries, Bière…)
function showSection(id, btn) {
    document.querySelectorAll(".menu-section").forEach(sec => sec.style.display = "none");
    document.querySelectorAll(".categories button").forEach(b => b.classList.remove("active"));
    let target = document.getElementById(id);
    if (target) target.style.display = "flex";
    if (btn) btn.classList.add("active");
}
