// function GenerarCarteles (aciertos, fallos) {
//    if (aciertos === 3) {
//         ganar();
//    }else if(fallos === 3) {
//         perder();
//   }
// }
const informacion= document.querySelector(".cartel")
const puntaje= document.querySelector(".puntaje")
export const ganar() => {
 sonarGanaste()
 puntaje.classList.remove("oculto")
  informacion.textContent="¡Correcto!"
  informacion.style.color="black"
  setTimeout(function() {puntaje.classList.add("oculto")}, 1500);
 
}
function sonarGanaste(){
 var sonido = document.createElement("audio");
 sonido.scr="Sonidos/bites-ta-da-winner.mp3";
 sonido.type="audio/mp3"
 sonido.play()
}

export const perder() => { 
  sonarPerdiste()
  puntaje.classList.remove("oculto")
  informacion.textContent="¡Error!"
  informacion.style.color="black"
  setTimeout(function() {puntaje.classList.add("oculto")}, 1500);
}
function sonarPerdiste(){
 var sonido = document.createElement("audio");
 sonido.scr="Sonidos/perder-incorrecto-no-valido.mp3";
 sonido.type="audio/mp3"
 sonido.play()

// document.addEventListener("click",function(){
// sonarMouse()
       
});

function sonarMouse(){
 var sonido= document.createElement("audio");
 sonido.src="Sonidos/pick-92276.mp3";
 sonido.type="audio/mp3"
 sonido.play()
//  document.body.appendChild(sonido.play);
//  document.getElementById("play").removeEventListener("click",sonarMouse);
}
 
