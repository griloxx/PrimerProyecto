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

// Creo la función de error enlazada con la letra del formulario
// Función para validar la letra ingresada y mostrar mensajes
function comprobarLetra(event) {
  event.preventDefault(); // Evitar el envío del formulario y la actualización de la página

  const letraInput = document.getElementById("letra");
  const letra = letraInput.value.toLowerCase(); // Convertir la letra a minúscula

  if (!letra.match(/[a-z]/)) {
    // Si el caracter ingresado no es una letra
    alert("El caracter introducido no es una letra. Introduzca una letra.");
    return;
  }

  const palabraAleatoria = palabra2;
  const guionesBajos = document.querySelector(".guionesBajos").textContent;

  if (existeLetra(letra, palabraAleatoria)) {
    // Si la letra es correcta
    const solucionParcial = devuelveSolucionParcial(
      letra,
      palabraAleatoria,
      guionesBajos
    );
    document.querySelector(".guionesBajos").textContent = solucionParcial;

    if (solucionParcial === palabraAleatoria) {
      alert(
        "Felicidades, la letra es correcta. Estás más cerca de salvar a Felipe."
      );
    }
  } else {
    // Si la letra es incorrecta
    alert("Error fatal!! La vida de Felipe está en tus manos.");
  }

  letraInput.value = ""; // Limpiar el campo de entrada de letra
}

// Evento para el botón de comprobar letra
const botonComprobar = document.querySelector(".comprobar");
botonComprobar.addEventListener("click", comprobarLetra);
