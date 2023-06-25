"use strict";
import {
  aumentoNumeroIntentos,
  devuelveSolucionParcial,
  seleccionarPalabraAleatoria,
  existeLetra,
  generarGuion,
} from "./funciones.js";
//Creo un array con las palabras con las que se va a jugar.

const maximoNumeroDeIntentos = 6;
let finPartida;
let numeroDeintentos;
let solucionParcial;
let solucion;
// Selecciono parrafo con querySelector
const palabraSeleccionada = document.querySelector(".palabraAleatoria");

function inicializar() {
  let botonStart = document.querySelector(".comenzar");
  botonStart.addEventListener("click", (event) => {
    event.preventDefault();
    finPartida = false;
    solucion = seleccionarPalabraAleatoria();
    numeroDeintentos = 0;
    solucionParcial = generarGuion(solucion);
    palabraSeleccionada.textContent = `La palabra secreta es: ( ${solucionParcial} )`;

    console.log(solucion);
  });

  let botonComenzar = document.querySelector("#comprobar");
  botonComenzar.addEventListener("click", (event) => {
    event.preventDefault();
    let valor = document.querySelector("#letra").value;
    comprobar(valor);
    document.querySelector("#letra").value = "";
    // 1. Obtener la letra del elemento input
    // 2. Llamar a la funcion comprobar
  });
}

function comprobar(letra) {
  console.log(solucionParcial);
  if (!finPartida) {
    if (existeLetra(letra, solucion)) {
      solucionParcial = devuelveSolucionParcial(
        letra,
        solucion,
        solucionParcial
      );
      palabraSeleccionada.textContent = `La palabra secreta es: ( ${solucionParcial} )`;
    } else {
      numeroDeintentos = aumentoNumeroIntentos(numeroDeintentos);
      palabraSeleccionada.textContent = `La letra no existe. Te quedan ${
        maximoNumeroDeIntentos - numeroDeintentos
      } intentos`;
    }
    console.log(solucionParcial === solucion);
    if (numeroDeintentos === maximoNumeroDeIntentos) {
      finPartida = true;
      palabraSeleccionada.textContent = `Has perdido`;
    } else if (solucionParcial === solucion) {
      finPartida = true;
      palabraSeleccionada.textContent = `Has ganado. La palabra secreta es ${solucion}`;
    }
  }
}

inicializar();
