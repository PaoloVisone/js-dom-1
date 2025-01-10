// Prendo gli elementi
const luceOn = document.getElementById('lampadina-accesa');
const luceOff = document.getElementById('lampadina-spenta');
const btnOnOff = document.getElementById('btn');


// Il bottone viene cliccato
btnOnOff.addEventListener("click", event => {
    // L'immagine cambia
    luceOff.classList.toggle("spenta2");
    luceOn.classList.toggle("accesa");
    // luceOn.classList.remove = "accesa";

    // Il testo cambia 
    if (btnOnOff.innerText === 'Accendi') {
        btnOnOff.innerText = 'Spegni';
    } else {
        btnOnOff.innerText = 'Accendi';
    }

    // btnOnOff.innerText = 'Spegni';

    // Cambia Colore
    btnOnOff.classList.toggle("btn-color2");

});




