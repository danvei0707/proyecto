// function GenerarCarteles (aciertos, fallos) {
//     if (aciertos === 3) {
//          ganar();
//     }else if(fallos === 3) {
//          perder();
// //     }
//  }
const informacion= document.querySelector(".cartel")
const puntaje= document.querySelector(".puntaje")
 export const ganar=() => {
   sonarGanaste()
   puntaje.classList.remove("oculto")
    informacion.textContent="¡Correcto!"
    setTimeout(function() {puntaje.classList.add("oculto")}, 1500);
   
 }
 export const perder=() => { 
   sonarPerdiste()
    puntaje.classList.remove("oculto")
    informacion.textContent="¡Error!"
    setTimeout(function() {puntaje.classList.add("oculto")}, 1500);
 }
 
 function sonarGanaste(){
   var sonido = document.createElement("audio");
   // sonido.scr="../sonidos/bites-ta-da-winner.mp3";
   sonido.type="audio/mp3"
   sonido.play()
}
function sonarPerdiste(){
   var sonido = document.createElement("audio");
   sonido.scr="../sonidos/perder-incorrecto-no-valido.mp3";
   sonido.type="audio/mp3"
   sonido.play()
}
function sonarMouse(){
   var sonido= document.createElement("audio");
   sonido.src="../sonidos/pick-92276.mp3";
   sonido.type="audio/mp3"
   sonido.play()
  //  document.body.appendChild(sonido.play);
  //  document.getElementById("play").removeEventListener("click",sonarMouse);
  }

  const grid_itemas = document.querySelectorAll(".colorElegible");
  let continueGame = document.getElementById("continueGame")
  let resetGame1 = document.getElementById("resetGame1")
  let resetGame2 = document.getElementById("resetGame2")

// reinicia la secuencia de colores
grid_itemas.forEach((item) => {
  item.addEventListener("click", () => {
   sonarMouse()
  });
});

