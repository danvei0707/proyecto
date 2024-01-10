'use strict'

//* Cambios en la pantalla

export const pantallaVictoria = () => {
    console.log("Victoria!")

    //? En pruebas
    let msgFinGanar = document.getElementById("finGanar");
    msgFinGanar.classList.remove ("oculto");
    let resetVictoria = document.getElementById("resetVictoria")
    console.log(document.getElementById('resetVictoria'))

    resetVictoria.addEventListener('click', () => {
        // Se limpia la pantalla de victoria
        document.getElementById("finGanar").classList.add("oculto")
        
      });

}

// Botones de reset: volver a pantalla original (esconder esta, puntos a 0, nuevos colores)

export const pantallaDerrota = () => {
    console.log("Derrota!")

    let msgFinPerder = document.getElementById("finPerder");
    msgFinPerder.classList.remove("oculto");
    
    let resetDerrota = document.getElementById("resetDerrota")
console.log(document.getElementById("resetDerrota"));

resetDerrota.addEventListener('click', () => {
    // Se limpia la pantalla de derrota

    document.getElementById("finPerder").classList.add("oculto")
  });

  let resetVictoria = document.getElementById("resetVictoria")
  console.log(document.getElementById("resetVictoria"));
  
  resetVictoria.addEventListener('click', () => {
      // Se limpia la pantalla de derrota
  
      document.getElementById("finGanar").classList.add("oculto")
    });

    
}  


