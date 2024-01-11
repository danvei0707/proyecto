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
   
   puntaje.classList.remove("oculto")
    informacion.textContent="¡Correcto!"
    informacion.style.color="green"
    setTimeout(function() {puntaje.classList.add("oculto")}, 1500);
   
 }
 export const perder=() => { 
   
    puntaje.classList.remove("oculto")
    informacion.textContent="¡Error!"
    informacion.style.color="red"
    setTimeout(function() {puntaje.classList.add("oculto")}, 1500);
 }
 
