// Prendo gli elementi
const luceOn = document.getElementById('lampadina-accesa');
const luceOff = document.getElementById('lampadina-spenta');
const btnOnOff = document.getElementById('btn');


// Il bottone viene cliccato
btnOnOff.addEventListener("click", function () {
    // L'immagine cambia
    luceOff.classList = "spenta2";
    luceOn.classList = "accesa2";
    luceOn.classList.remove = "accesa";

    // Cambia il testo
    btnOnOff.innerHTML = 'Spegni';

    // Cambia Colore
    btnOnOff.classList = "btn-color2"
});

