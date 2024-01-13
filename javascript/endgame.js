'use strict'

//* Cambios en la pantalla

export const pantallaVictoria = () => {
  console.log("Victoria!")

  //? En pruebas
  let msgFinGanar = document.getElementById("finGanar");
  msgFinGanar.classList.remove ("oculto");

  let continueGame = document.getElementById("continueGame")
  let resetGame1 = document.getElementById("resetGame1")
  console.log(document.getElementById('continueGame'))
  console.log(document.getElementById("resetGame1"));

  continueGame.addEventListener('click', () => {
    // Se limpia la pantalla de victoria
    document.getElementById("finGanar").classList.add("oculto")
    
  });
  

  resetGame1.addEventListener('click', () => {
    //Revisar ID's en tu html
    document.getElementById("finGanar").classList.add("oculto")
  }); 

}

export const pantallaDerrota = () => {
  console.log("Derrota!")

  //? En pruebas
  let msgFinPerder = document.getElementById("finPerder");
  msgFinPerder.classList.remove("oculto");
  
  let resetGame2 = document.getElementById("resetGame2")
  console.log(document.getElementById("resetGame2"));

  resetGame2.addEventListener('click', () => {
    //Revisar ID's en tu html
    document.getElementById("finPerder").classList.add("oculto")
  });

}
export const inicio = () => {
  
  let startButton = document.getElementById("start")
  console.log(document.getElementById("start"));
  
  let intro = document.getElementById("intro");
  console.log(intro)
  intro.classList.remove("oculto");

  startButton.addEventListener('click', () => {
    //Revisar ID's en tu html
    intro.classList.add("oculto")
  });

}

//? ============= Pruebas =========================================================
document.addEventListener("DOMContentLoaded",inicio());

