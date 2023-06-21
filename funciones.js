import { añadirGuiones,seleccionarPalabraAleatoria,generarGuion,palabra2, guionesBajos } from "./principal.js";

añadirGuiones(guionesBajos);
console.log(palabra2);
console.log(existeLetra("a", palabra2));
let guiones = devuelveSolucionParcial("a",palabra2,guionesBajos );
console.log(guiones)
function existeLetra(letra, palabra) {
  for (let i = 0; i < palabra.length; i++) {
    if (palabra[i] === letra) {
      return true;
    }
  }

  return false;
}
function devuelveSolucionParcial(letra, palabra, solucionAnterior) {
  let solucionParcial = "";

  for (let i = 0; i < palabra.length; i++) {
    if (palabra[i] === letra) {
      solucionParcial = solucionParcial + letra;
    } else {
      solucionParcial = solucionParcial + solucionAnterior[i];
    }
  }

  return solucionParcial;
}

function aumentoNumeroIntentos(numeroIntentos) {
  return numeroIntentos + 1;
}
