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

// CREO ARRAY PER ANIMAZIONE M
const testo = m.innerText.replace(/\s+/g, ""); // Ottiengo il testo senza spazi e a capo
const arrayM = testo.split(""); // Converto il testo in un array di singoli caratteri
console.log("Creato array per animazione M", arrayM);

// Animazine colore navBar a scroll
window.addEventListener("scroll", function () {
  const navFixed = document.querySelector(".nav");
  const navButton = document.getElementById("buttonNav");
  const headerBottom = document.querySelector(".headerBottom");

  const navFixedPositionEsize = navFixed.getBoundingClientRect().bottom;
  const headerBottomPositionEsize = headerBottom.getBoundingClientRect().bottom;

  if (navFixedPositionEsize >= headerBottomPositionEsize) {
    navFixed.classList.add("scrolled");
    navButton.classList.add("scrolled");
  } else {
    navFixed.classList.remove("scrolled");
    navButton.classList.remove("scrolled");
  }
});
