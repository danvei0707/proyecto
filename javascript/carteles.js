// function GenerarCarteles (aciertos, fallos) {
//     if (aciertos === 3) {
//          ganar();
//     }else if(fallos === 3) {
//          perder();
// //     }
//  }
const informacion= document.querySelector(".cartel")
const puntaje= document.querySelector(".puntaje")

function Frase(frase1,frase2,frase3,frase4){
  let lista = [1,2,3,4]
  let random
  random = lista[parseInt(Math.random()*lista.length)]
    console.log(frase1);
    console.log(random);
    switch(random){
      case 1 : informacion.textContent=`${frase1}`; break;
      case 2 : informacion.textContent=`${frase2}`; break;
      case 3: informacion.textContent=`${frase3}`; break;
      case 4: informacion.textContent=`${frase4}`; break;
}
}
 export const ganar=() => {
   sonarGanaste()
   puntaje.classList.remove("oculto")

  Frase(
    "Tus ojos y tu cerebro están en perfecta sincronización de colores hoy!",
    "Creo que debería comprar un boleto de lotería, ¡porque elegiste el color correcto!",
    "¡No sé cómo lo hiceste, pero la rueda de colores te eligió como su campeón!",
    "¡Bravo! Incluso Pantone estaría orgulloso de tu elección de color.")   

    setTimeout(function() {puntaje.classList.add("oculto")}, 1500);
   
 }
 export const perder=() => { 
   sonarPerdiste()
    puntaje.classList.remove("oculto")
    Frase(
      "En algún lugar, un arcoíris está llorando por tu elección de colores.",
      "¡Quién necesita colores correctos cuando puedes tener una obra maestra; abstracta!",
      "Vaya, mi visión de colores debe estar en huelga hoy!",
      "Tu dedo y el color correcto deben estar en términos de separación temporal!"
      )
    setTimeout(function() {puntaje.classList.add("oculto")}, 5000);
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

