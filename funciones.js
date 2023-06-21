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
  const palabraAleatoria = Math.floor(Math.random() * (words.length - 1));
  return words[palabraAleatoria];
}

//función para crear los _ _ _ de la palabra seleccionada

export function generarGuion(palabra) {
  return "_".repeat(palabra.length);
}

export function existeLetra(letra, palabra) {
  for (let i = 0; i < palabra.length; i++) {
    if (palabra[i] === letra) {
      return true;
    }
  }

  return false;
}

export function devuelveSolucionParcial(letra, palabra, solucionAnterior) {
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

export function aumentoNumeroIntentos(numeroIntentos) {
  return numeroIntentos + 1;
}
