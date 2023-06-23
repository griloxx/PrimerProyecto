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

//función para  Seleccionar la palabra aleatoria del array
export function seleccionarPalabraAleatoria() {
  const palabraAleatoria = Math.floor(Math.random() * (words.length + 1));
  let palabra = words[palabraAleatoria];
  return palabra;
}

export function generarGuion(palabra2) {
  return "_".repeat(palabra2.length);
}
//Selecciono parrafo con querySelector
const palabraSeleccionada = document.querySelector(".palabraAleatoria");

export function añadirGuiones(guiones) {
    const guiones2 = document.querySelector(".guionesBajos");
    palabraSeleccionada.textContent = `La palabra secreta es: `;
    palabraSeleccionada.classList.add("parrafoNuevo");
    guiones2.textContent = `${guiones}`;
    guiones2.classList.add("parrafoNuevo");
  };

