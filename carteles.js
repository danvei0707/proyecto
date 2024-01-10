// function GenerarCarteles (aciertos, fallos) {
//     if (aciertos === 3) {
//          ganar();
//     }else if(fallos === 3) {
//          perder();
//     }
//  }
 export function ganar() {
   const rojo= document.querySelector (".win")
   rojo.classList.remove("oculto");
  
    setTimeout(()=> {
      rojo.classList.add("oculto"); 
    }, 1500);
   }
 export function perder() {
   const rojo= document.querySelector (".over")
   rojo.classList.remove("oculto");
  
    setTimeout(()=> {
      rojo.classList.add("oculto"); 
    }, 1500); 
 }