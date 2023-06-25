"use strict";

document.addEventListener('DOMContentLoaded', ()=> {
    escribirTexto()
    ocultarIntro()
})


const selector = document.querySelector('.textoIntro');
const texto = "Bienvenido al juego del ahorcado. En este juego tienes que adivinar la palabra secreta, para ello tienes que introducir una letra en el campo que hemos habilitado. Si la letra es correcta, desvelaremos las letras que correspondan en la palabra secreta. Dispones de 6 oportunidades. ¿Serás capaz de salvar a Felipe de terminar ahorcado?";
let i = 0;

// Ocultar intro al pulsar botón
const modal = document.querySelector('.modal');
const boton = document.querySelector('.seguir');


function ocultarIntro() {
    boton.addEventListener('click', () => {
        modal.classList.add('hidden')
    })
}

function escribirTexto() {
    // Asignar variable al setInterval para poder detenerlo
    let escritura = setInterval(() => {
        if( i < texto.length) {
            // Introducir letra cada vez que "i" se incremente con el intervalo
            selector.innerHTML += texto[i];
            i++;
        } else {
            // Introduce el boton de continuar al terminar de escribir
            boton.classList.remove('aclarar');
            // Limpiar el Intervalo
            clearInterval(escritura);
        }
    }, 40)
}


