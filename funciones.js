import {
  añadirGuiones,
  seleccionarPalabraAleatoria,
  generarGuion,
} from "./principal.js";
let intentos = 0;
const comenzar = document.querySelector(".comenzar");
const botonComprobar = document.querySelector(".comprobar");
const imagen = document.querySelector(".tamaño");
let box = document.querySelector(".Box");
let parrafo = document.createElement("p");
botonComprobar.setAttribute("disabled", true);
botonComprobar.classList.replace("comprobar", "deshabilitado");
let palabra2;
let guionesBajos;
comenzar.addEventListener("click", iniciar);
function iniciar(event) {
  event.preventDefault();
  if (box.children[0].tagName === parrafo.tagName) {
    box.removeChild(box.children[0]);
  }
  imagen.classList.replace(imagen.classList.item(0), "imagen");
  botonComprobar.removeAttribute("disabled");
  botonComprobar.classList.replace("deshabilitado", "comprobar");
  comenzar.classList.replace("comenzar", "deshabilitado");
  comenzar.setAttribute("disabled", true);
  palabra2 = seleccionarPalabraAleatoria();
  guionesBajos = generarGuion(palabra2);
  palabra2 = palabra2.split("").join(" ");
  enfocar();
  console.log(palabra2);
  añadirGuiones(guionesBajos);
  return palabra2, guionesBajos;
}
function existeLetra(letra, palabra) {
  for (let i = 0; i < palabra.length; i++) {
    if (palabra[i] === letra) {
      return true;
    }
  }

  return false;
}
function enfocar() {
  const enfocar = document.querySelector("input[name = 'letra']");
  enfocar.focus();
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
  if (intentos === 6) {
    intentos = 0;
  }

  return intentos;
}

// Creo la función de error enlazada con la letra del formulario
// Función para validar la letra ingresada y mostrar mensajes
function comprobarLetra(event) {
  event.preventDefault(); // Evitar el envío del formulario y la actualización de la página

  if (box.children[0].tagName === parrafo.tagName) {
    box.removeChild(box.children[0]);
  }

  const letraInput = document.getElementById("letra");
  const letra = letraInput.value.toLowerCase(); // Convertir la letra a minúscula

  parrafo.classList.add("error");
  if (letra.length === 0) {
    parrafo.classList.replace("correcto", "error");
    enfocar();
    box.prepend(parrafo);
    parrafo.textContent = "Debes introducir un carácter mínimo.";
    return;
  }
  if (!letra.match(/[a-z]/) && letra.length === 1) {
    // Si el caracter ingresado no es una letra
    parrafo.classList.replace("correcto", "error");
    box.prepend(parrafo);
    parrafo.textContent =
      "El caracter introducido no es una letra. Introduzca una letra.";
    enfocar();
    letraInput.value = "";
    return;
  }
  if (letra.length > 1) {
    box.prepend(parrafo);
    parrafo.textContent = "Solo puedes introducir una letra.";
    enfocar();
    letraInput.value = "";
    return;
  }
  const palabraAleatoria = palabra2;
  const pGuionesBajos = document.querySelector(".guionesBajos").textContent;

  if (existeLetra(letra, pGuionesBajos)) {
    box.prepend(parrafo);
    parrafo.classList.replace("correcto", "error");
    letraInput.value = "";
    enfocar();
    parrafo.textContent = "La letra introducida ya a sido usada.";
    return;
  }

  if (existeLetra(letra, palabra2)) {
    // Si la letra es correcta
    const solucionParcial = devuelveSolucionParcial(
      letra,
      palabra2,
      pGuionesBajos
    );
    document.querySelector(".guionesBajos").textContent = solucionParcial;
    box.prepend(parrafo);
    parrafo.classList.replace("error", "correcto");
    parrafo.textContent =
      "Felicidades, la letra es correcta. Estás más cerca de salvar a Felipe.";
    enfocar();

    if (solucionParcial === palabra2) {
      box.prepend(parrafo);
      parrafo.classList.replace("error", "correcto");
      parrafo.textContent = "Enhorabuena!!! Has salvado a Felipe.";
      botonComprobar.setAttribute("disabled", true);
      botonComprobar.classList.replace("comprobar", "deshabilitado");
      comenzar.removeAttribute("disabled");
      comenzar.classList.replace("deshabilitado", "comenzar");
      comenzar.textContent = "Reiniciar";
      intentos = 0;
      if (box.children[1].className === "parrafoNuevo") {
        box.children[1].remove();
      }
    }
  } else {
    // Si la letra es incorrecta
    box.prepend(parrafo);
    parrafo.classList.replace("correcto", "error");
    parrafo.textContent = "Error fatal!! La vida de Felipe está en tus manos.";
    enfocar();
    let numeroMaxIntentos = 6;
    let numerodeIntentos = aumentoNumeroIntentos();
    let intentosRestantes = numeroMaxIntentos - numerodeIntentos;
    if (box.children[1].className === "parrafoNuevo") {
      box.children[1].remove();
    }
    if (intentosRestantes !== 0 && intentosRestantes < 6) {
      const parrafoIntentos = document.createElement("p");
      parrafoIntentos.classList.add("parrafoNuevo");
      parrafoIntentos.innerHTML =
        "¡Te quedan " + intentosRestantes + " intentos.!";
      box.insertBefore(parrafoIntentos, document.querySelector("#inicio"));
    }

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
        parrafo.textContent = "¡¡Has Perdido!! ¡¡Felipe a muerto!!";
        botonComprobar.setAttribute("disabled", true);
        botonComprobar.classList.replace("comprobar", "deshabilitado");
        comenzar.removeAttribute("disabled");
        comenzar.classList.replace("deshabilitado", "comenzar");
        comenzar.textContent = "Reiniciar";
        break;
    }
  }
  letraInput.value = ""; // Limpiar el campo de entrada de letra
}

// Evento para el botón de comprobar letra
botonComprobar.addEventListener("click", comprobarLetra);
