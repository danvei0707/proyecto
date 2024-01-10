import { ColorAleatorio} from "./generar-colores-sin-repetir-Andrea.js";
let lista_colores = []; // lista de colores vacia

let color_correcto // color correcto

function RandomColor() {
  let {r , g ,b} = ColorAleatorio(); // color aleatorio importado

  let color_variation = `rgb(${r},${g},${b})`
  return color_variation;
}


function AssingColor(element, callback) {
  let color = callback(); // Funcion de numero random

  lista_colores.push(color)
  
  console.log(lista_colores);
  element.style.background = color;
}

function DivRandomColors() {
  grid_itemas.forEach((item) => {
    AssingColor(item, RandomColor);
  });
}

// cazar elementos del grid
const grid_itemas = document.querySelectorAll(".colorElegible");

// reinicia la secuencia de colores
grid_itemas.forEach((item) => {
  item.addEventListener("click", () => {
    lista_colores = []
    DivRandomColors();
  });
});

DivRandomColors();

//añadir el color
function CorrectRandomColorOnScreen(array) {

  // separar el codigo desde los paréntesis
  const random = parseInt(Math.random()* array.length)
  const color = array[random]
  console.log(random);
  let codigo = color.slice(color.indexOf("(") + 1, color.indexOf(")"));

  // agrega el codigo del color y cambia el estilo de texto a bold
  const div_rbg = document.querySelector(".rgb");
  div_rbg.textContent = codigo;
  div_rbg.style.fontWeight = "bold";

  // Muestra el color correcto
  const div_sample = document.querySelector(".sample");
  div_sample.style.background = color;

  color_correcto = color
}
CorrectRandomColorOnScreen(lista_colores);

localStorage.setItem("Lista de colores", JSON.stringify(lista_colores));console;

;