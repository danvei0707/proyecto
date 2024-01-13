import { AplicarColoresInterfaz } from "./colores-interfaz.js";
let rangomin = 72;
let rangomax = 183;
let nivel = 0
let num = 9
let niv = document.querySelector(".nivel")
  

function Buttons(name){
  let button = document.querySelector(name)
  button.addEventListener("click",()=>{
    rangomax += 10
    rangomin += 10
    nivel++
    num -= 2

    console.log("Numeros de niveles "+nivel);
  if(nivel > 2){
    rangomin = 72;
    rangomax = 183;
    nivel = 0
    num = 9
  }
    
    console.log("Nivel en niveles es "+nivel);
    switch(nivel){
      case 0: niv.textContent =`Nivel Facil`; break;
      case 1: niv.textContent =`Nivel normal`; break;
      case 2: niv.textContent =`Nivel Extremo`; break;
    }
    
    
    console.log("este nivel es el: "+nivel);  
    console.log(rangomax);
    console.log(rangomin);
    console.log(num);

  })  
}
function ButtonsReset(name,){
    let button = document.querySelector(name)
    

  button.addEventListener("click",()=>{
    rangomin = 72;
    rangomax = 183;
    nivel = 0
    num = 9
    console.log("Reset");

    console.log("Nivel en niveles es "+nivel);
    niv.textContent =`Nivel Facil`;
  })
} 

  ButtonsReset("#resetGame1")
  ButtonsReset("#resetGame2")
  Buttons("#continueGame", nivel)

function GenerarNumeros() {

  let r = parseInt(Math.random() * (rangomax - rangomin + 1) + rangomin);
  let g = parseInt(Math.random() * (rangomax - rangomin + 1) + rangomin);
  let b = parseInt(Math.random() * (rangomax - rangomin + 1) + rangomin);
  console.log("El nivel: "+nivel);
  AplicarColoresInterfaz(r ,g , b)

  let random;
  random = Math.floor(Math.random() * 2);
  
  return [r, g, b, random];
}

let [r, g, b, random] = GenerarNumeros();

export const GenerarVariacion = () => {
  // se genera el codigo rgb aleatorio

  // escogemos una saturacion entre rojo , azul y verde

  // console.log(r, g, b);
  switch (random) {
    case 0:
      r += num;
      g += num;
      b += num;
      console.log("Suma");
      break;
    case 1:
      r -= num;
      g -= num;
      b -= num;
      console.log("Resta");
      break;
  }
  // console.log(r);

  if (r > 255 || g > 255 || b > 255 || r < 0 || g < 0 || b < 0) {
    alert("Numero fuera de rango");
  }

  return { r, g, b };
};

// escoger nueva saturacion
const grid_itemas = document.querySelectorAll(".colorElegible");
grid_itemas.forEach((item) => {
  item.addEventListener("click", () => {
    [r, g, b, random] = GenerarNumeros();
  });
});
