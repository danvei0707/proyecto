const colores = [
  "rgb(255, 89, 94)",
  "rgb(255, 202, 58)",
  "rgb(138, 201, 38)",
  "rgb(202, 103, 2)",
  "rgb(25, 130, 196)",
  "rgb(106, 76, 147)",
  "rgb(141, 153, 174)",
  "rgb(235, 136, 230)",
];

//guardar datos en LStorge
localStorage.setItem("Lista de colores", colores);

function RandomColor() {
  let random = parseInt(Math.random() * colores.length);
  let color = colores[random];

  // devuleve un color aleatoreo
  return color;
}

function AssingColor(element, callback) {
  let color = callback(); // Funcion de numero random
  element.style.background = color; // agregar color
}

// añadir colores elemento a elemento
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
    DivRandomColors();
  });
});

DivRandomColors();

//añadir el color
function CorrectRandomColorOnScreen(random_color) {
  //separar el codigo desde los paréntesis
  const color = random_color.slice(
    random_color.indexOf("(") + 1,
    random_color.indexOf(")")
  );

  // agrega el codigo del color y cambia el estilo de texto a bold
  const div_rbg = document.querySelector(".rgb");
  div_rbg.textContent = color;
  div_rbg.style.fontWeight = "bold";
  
  // Muestra el color correcto
  const div_sample = document.querySelector(".sample")
  div_sample.style.background = random_color
}

CorrectRandomColorOnScreen(RandomColor());
