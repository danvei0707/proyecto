'use strict'
//* Controlar los puntos p: Aciertos, Fallos.
console.log(`El número de fallos es ${parseInt(document.getElementById("fallos").textContent)}`);
console.log(`El número de aciertos es ${parseInt(document.getElementById("aciertos").textContent)}`);
 

//* Comprueba los puntos y lanza Victoria o derrota

export const compruebaPuntos = () => { 
if (parseInt(document.getElementById("aciertos").textContent) === 3){
    
    pantallaVictoria();

}else if (parseInt(document.getElementById("fallos").textContent) === 3)

    pantallaDerrota();
}

//* Cambios en la pantalla

const pantallaVictoria = () => {
    console.log("Victoria!")

    //? En pruebas
    let msgFinGanar = document.getElementById("finGanar");
    msgFinGanar.classList.remove("oculto");

}

const pantallaDerrota = () => {
    console.log("Derrota!")

    //? En pruebas
    let msgFinPerder = document.getElementById("finPerder");
    msgFinPerder.classList.remove("oculto");

    
}

// Botón de reset: volver a pantalla original (esconder esta, puntos a 0, nuevos colores)

const reset = () => {}

//? ============= Pruebas =========================================================

compruebaPuntos();

//Revisar ID's en tu html
let resetDerrota = document.getElementById("resetDerrota")
console.log(document.getElementById("resetDerrota"));

resetDerrota.addEventListener('click', () => {
    // Se limpia la pantalla de derrota
    
    //Revisar ID's en tu html
    document.getElementById("finPerder").classList.add("oculto")
  }); 

//Revisar ID's en tu html
let resetVictoria = document.getElementById("resetDerrota")
console.log(document.getElementById("resetDerrota"));

resetVictoria.addEventListener('click', () => {
    // Se limpia la pantalla de derrota
    
    //Revisar ID's en tu html
    document.getElementById("finPerder").classList.add("oculto")
  }); 