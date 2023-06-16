"use strict";

//Creo un array con las palabras con las que se va a jugar.

let words = [
  "feo",
  "hoyuelo",
  "festejo",
  "unicornio",
  "figuritas",
  "lagartija",
  "tramar",
  "atletismo",
  "facultad",
  "loro",
  "puntual",
  "humear",
  "cuerpo",
  "anunciar",
  "horno",
  "alianza",
  "hiedra",
  "dictador",
  "elegante",
  "estribo",
  "respaldo",
  "vestuario",
  "dibujar",
  "palmera",
  "adelgazar",
  "inmenso",
  "plumas",
  "congelador",
  "parte",
  "establo",
  "fotocopia",
  "cuchillo",
  "radio",
  "levantar",
  "bidet",
  "ayer",
  "gradas",
];

// Selecciona la palabra aleatoria del array
const palabraAleatoria = Math.floor(Math.random() * words.length);
let palabra = words[palabraAleatoria];
console.log(palabra);

//Crea los _ _ _ de la palabra seleccionada
let guionesBajos = " _ ".repeat(palabra.length);
console.log(guionesBajos);

// Selecciono parrafo con querySelector
const palabraSeleccionada = document.querySelector(".palabraAleatoria");

function añadirGuiones() {
  let botonStart = document.querySelector(".comenzar");
  botonStart.addEventListener("click", (event) => {
    event.preventDefault();
    palabraSeleccionada.textContent = `La palabra secreta es: ( ${guionesBajos} )`;
  });
}
añadirGuiones();
