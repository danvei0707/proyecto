// Obtener los elementos necesarios del DOM
const contAciertos = document.querySelector('.contAciertos p:last-child');
const contFallos = document.querySelector('.contFallos p:last-child');
const coloresElegibles = document.querySelectorAll('.colorElegible');

import { pantallaVictoria, pantallaDerrota} from "./endgame.js";

let aciertos = 0;
let fallos = 0;

// Función para actualizar los contadores en el DOM
function actualizarContadores() {
  contAciertos.textContent = aciertos;
  contFallos.textContent = fallos;
}

// Función para reiniciar la página
function reiniciarPagina() {
  aciertos = 0;
  fallos = 0;
  actualizarContadores();
  // Aquí iría la lógica adicional para reiniciar otros elementos de la página si es necesario
  // Esta línea recarga la página
}

// Event listener para cada color elegible
coloresElegibles.forEach((color, index) => {
  color.addEventListener('click', () => {
    // Aquí iría la lógica para verificar si el color elegido es el correcto
    if (index === 0) {
      aciertos++;
      actualizarContadores();
    } else {
      fallos++;
      actualizarContadores();
    }

    // Verificar si se ha alcanzado el límite de aciertos o fallos
    if (aciertos === 3) {
        pantallaVictoria()
        reiniciarPagina()
    } else if (fallos === 3) {
        pantallaDerrota()
        reiniciarPagina()
    }
  });
});