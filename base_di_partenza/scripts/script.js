const m = document.createElement("p");
m.innerText = `M M M M M M M M M M M M M M
            M M M M M M M M M M M M M M M M M M M M M
           M M M M M M M M M M M M M M M M M M M M M M M M M
            M M M M M M M M M M M M
            M M M M M M M M M M M M M M M M M M M
            M M M M M M M M M M M M M M M M M M M M M
            M M M M M M M M M M M M M M
           M M M M M M M M M M M M M M M M M
           M M M M M M M M M M M M M M M M M M M
            M M M M M M M M M M M M M M M M M M M M M M M
           M M M M M M M M M M M M
            M M M M M M M M M M M M
            M M M M M M M M M M M M M M M M M M M M M
            M M M M M M M M M M M
            M M M M M M M M M M M M M M M M M
            M M M M M M M M M M M M M M M M`;

const divHeaderM = document.querySelector(".headerDxM");
divHeaderM.appendChild(m);

// CREO ARRAY PER ANIMAZIONE
const testo = m.innerText.replace(/\s+/g, ""); // Ottieni il testo senza spazi e a capo
const arrayM = testo.split(""); // Converti il testo in un array di singoli caratteri
console.log("Creato array per animazione M", arrayM);
