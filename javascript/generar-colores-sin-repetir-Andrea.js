import { AplicarColoresInterfaz } from "./colores-interfaz.js";

function Buttons(name){
  let button = document.querySelector(name)
  button.addEventListener("click",()=>{
    rangomax += 12
    rangomin += 12
    nivel++
    num -= 2
    console.log("este nivel es el: "+nivel);
    console.log(rangomax);
    console.log(rangomin);
    console.log(num);

  })  
}
Buttons("#continueGame")

let rangomin = 72;
let rangomax = 183;
let nivel = 0
let num = 9

function Niveles(){
  console.log("Numeros de niveles "+nivel);
  if(nivel === 3){
    rangomin = 72;
    rangomax = 183;
    nivel = 0
    num = 9
  }
}



function GenerarNumeros() {
  Niveles()

  let r = parseInt(Math.random() * (rangomax - rangomin + 1) + rangomin);
  let g = parseInt(Math.random() * (rangomax - rangomin + 1) + rangomin);
  let b = parseInt(Math.random() * (rangomax - rangomin + 1) + rangomin);

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
