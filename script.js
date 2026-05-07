// LOADER

window.addEventListener("load", ()=>{

    const loader = document.getElementById("loader");

    setTimeout(()=>{

        loader.style.opacity = "0";

        setTimeout(()=>{

            loader.style.display = "none";

        },500);

    },1200);

});


// HEADER SCROLL EFFECT

window.addEventListener("scroll", ()=>{

    const header = document.querySelector(".header");

    if(window.scrollY > 50){

        header.style.background = "rgba(0,0,0,0.88)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,0.35)";

    }else{

        header.style.background = "rgba(0,0,0,0.65)";
        header.style.boxShadow = "none";

    }

});


// SCROLL ANIMATION

const elements = document.querySelectorAll(
    ".service-card, .process-box, .about-image, .about-content, .contact-box"
);

const observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

elements.forEach((element)=>{

    element.classList.add("hidden");

    observer.observe(element);

});

// ORDER MODAL

const openForm = document.getElementById("openForm");
const orderModal = document.getElementById("orderModal");
const closeModal = document.getElementById("closeModal");

openForm.addEventListener("click", ()=>{

    orderModal.style.display = "flex";

});

closeModal.addEventListener("click", ()=>{

    orderModal.style.display = "none";

});

window.addEventListener("click",(e)=>{

    if(e.target === orderModal){

        orderModal.style.display = "none";

    }

});


// PDF GENERATOR

document.getElementById("orderForm").addEventListener("submit",(e)=>{

    e.preventDefault();

    const { jsPDF } = window.jspdf;

    const doc = new jsPDF();

// LOGO

const logo = new Image();

logo.src = "images/logo.png";

logo.onload = function(){

    doc.addImage(logo, "PNG", 15, 10, 35, 35);

    // TITRE

    doc.setFontSize(20);
    doc.setTextColor(20,20,20);

    doc.text("PRIME MOTORS INTERNATIONAL",60,25);

    doc.setFontSize(12);

    doc.text("FICHE DE COMMANDE VEHICULE",60,35);

    // LIGNE

    doc.setDrawColor(37,99,235);
    doc.line(15,50,195,50);

    // INFOS CLIENT

    doc.setFontSize(13);

    doc.text("Informations Client",20,65);

    doc.setFontSize(11);

    doc.text("Nom : " + fullname,20,80);

    doc.text("Adresse : " + country,20,92);

    doc.text("Telephone : " + phone,20,104);

    // INFOS VEHICULE

    doc.setFontSize(13);

    doc.text("Informations Vehicule",20,122);

    doc.setFontSize(11);

    doc.text("Vehicule : " + vehicle,20,136);

    doc.text("Annee : " + year,20,148);

    doc.text("Couleur : " + color,20,160);

    doc.text("Boite : " + gearbox,20,172);

    doc.text("Budget : " + budget,20,184);

    // CONDITIONS

    doc.setFontSize(13);

    doc.text("Conditions de Commande",20,205);

    doc.setFontSize(10);

    doc.text("- Versement initial de 50% pour lancer la commande",20,218);

    doc.text("- Solde payable a l'arrivee avant remise du vehicule",20,228);

    doc.text("- Delai de livraison : 15 a 35 jours",20,238);

    doc.text("- Suivi assure jusqu'a reception",20,248);

    // FOOTER

    doc.setFontSize(9);

    doc.setTextColor(120);

    doc.text(
        "Prime Motors International - Importation & Livraison Internationale",
        20,
        280
    );

    // SAVE PDF

    doc.save("commande-prime-motors.pdf");

};

    const whatsappMessage =
`Bonjour Prime Motors International,

Je viens de remplir ma fiche de commande véhicule.

Nom : ${fullname}
Véhicule : ${vehicle}
Année : ${year}

Je vais envoyer le PDF de ma commande ici.`;

    window.open(
`https://wa.me/85266820933?text=${encodeURIComponent(whatsappMessage)}`,
"_blank"
);

});