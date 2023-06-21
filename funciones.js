import {
  añadirGuiones,
  seleccionarPalabraAleatoria,
  generarGuion,
  palabra2,
  guionesBajos,
} from "./principal.js";

añadirGuiones(guionesBajos);
console.log(palabra2);
console.log(existeLetra("a", palabra2));
let guiones = devuelveSolucionParcial("a", palabra2, guionesBajos);
console.log(guiones);
let intentos = 0;
const comenzar = document.querySelector(".comenzar");
const botonComprobar = document.querySelector(".comprobar");
botonComprobar.setAttribute("disabled", true);
botonComprobar.classList.replace("comprobar", "deshabilitado");
comenzar.addEventListener("click", () => {
  botonComprobar.removeAttribute("disabled");
  botonComprobar.classList.replace("deshabilitado", "comprobar");
  comenzar.classList.replace("comenzar", "deshabilitado");
  comenzar.setAttribute("disabled", true);
});

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

function aumentoNumeroIntentos() {
  intentos++;
  return intentos;
}

// Creo la función de error enlazada con la letra del formulario
// Función para validar la letra ingresada y mostrar mensajes
function comprobarLetra(event) {
  event.preventDefault(); // Evitar el envío del formulario y la actualización de la página
  let intentos = 0;
  const imagen = document.querySelector(".tamaño");
  const letraInput = document.getElementById("letra");
  const letra = letraInput.value.toLowerCase(); // Convertir la letra a minúscula
  let box = document.querySelector(".Box");
  let parrafo = document.createElement("p");
  parrafo.classList.add("error");

  if (!letra.match(/[a-z]/)) {
    // Si el caracter ingresado no es una letra
    if (parrafo.classList.contains("error")) {
    }
    box.prepend(parrafo);
    parrafo.textContent =
      "El caracter introducido no es una letra. Introduzca una letra.";
    return;
  }
  if (letra.length > 1) {
    box.prepend(parrafo);
    parrafo.textContent = "Solo puedes introducir una letra.";
  }

  const palabraAleatoria = palabra2;
  const guionesBajos = document.querySelector(".guionesBajos").textContent;

  if (existeLetra(letra, palabra2)) {
    // Si la letra es correcta
    const solucionParcial = devuelveSolucionParcial(
      letra,
      palabra2,
      guionesBajos
    );

    document.querySelector(".guionesBajos").textContent = solucionParcial;
    box.prepend(parrafo);
    parrafo.classList.replace("error", "correcto");
    parrafo.textContent =
      "Felicidades, la letra es correcta. Estás más cerca de salvar a Felipe.";

    if (solucionParcial === palabra2) {
      box.prepend(parrafo);
      parrafo.classList.replace("error", "correcto");
      parrafo.textContent = "Enhorabuena!!! Has salvado a Felipe.";
      botonComprobar.setAttribute("disabled", true);
      botonComprobar.classList.replace("comprobar", "deshabilitado");
    }
  } else {
    // Si la letra es incorrecta
    box.prepend(parrafo);
    parrafo.textContent = "Error fatal!! La vida de Felipe está en tus manos.";

    let numerodeIntentos = aumentoNumeroIntentos();
    console.log(numerodeIntentos);
    switch (numerodeIntentos) {
      case 1:
        imagen.classList.replace("imagen", "imagen1");
        break;
      case 2:
        imagen.classList.replace("imagen1", "imagen2");
        break;
      case 3:
        imagen.classList.replace("imagen2", "imagen3");
        break;
      case 4:
        imagen.classList.replace("imagen3", "imagen4");
        break;
      case 5:
        imagen.classList.replace("imagen4", "imagen5");
        break;

      default:
        imagen.classList.replace("imagen5", "imagen6");
        box.prepend(parrafo);
        parrafo.textContent = "¡¡Has Perdido!! ¡¡Felipe a muerto!";
        botonComprobar.setAttribute("disabled", true);
        botonComprobar.classList.replace("comprobar", "deshabilitado");
        break;
    }
  }

  letraInput.value = ""; // Limpiar el campo de entrada de letra
}

// Evento para el botón de comprobar letra
botonComprobar.addEventListener("click", comprobarLetra);
