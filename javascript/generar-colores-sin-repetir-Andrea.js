const contFallos = document.querySelector('.contFallos p:last-child');

let rangomin = 72;
let rangomax = 183;
let nivel = 0
let num = 9

function Niveles(){
  console.log("Numeros de niveles");
  if(nivel === 3){
    nivel = 0
  }else if(contFallos.textContent == 2){
    rangomax += 8
    rangomin += 8
    nivel++
    num--

    console.log(rangomax);
    console.log(rangomin);
    console.log(nivel);
    console.log(num);
  }
}

function AplicarColoresInterfaz(r,g,b){
  let body = document.querySelector("body")
  body.style.background = `rgb(${r+43} ,${g+43} ,${b+43})`
  
  let header = document.querySelector("header")
  header.style.background = `rgb(${r - 10} ,${g - 20} ,${b -30})`

  let carteles = document.querySelector(".puntaje")
  carteles.style.background = `rgb(${r+4} ,${g+4} ,${b+4} ,0.50)`

  
  const sombra = document.querySelector(".enunciado");
  sombra.style.boxShadow = `26px 26px 51px rgb(${r - 20} ,${g - 20} ,${b -20}),-26px -26px 51px rgb(${r + 100} ,${g + 100} ,${b +100})`;
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

  console.log(r, g, b);
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
  console.log(r);

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
