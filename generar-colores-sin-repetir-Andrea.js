function GenerarNumeros() {
  let r = parseInt(Math.random() * (183 - 72 + 1) + 72);
  let g = parseInt(Math.random() * (183- 72 + 1) + 72);
  let b = parseInt(Math.random() * (183 - 72 + 1) + 72);
  let random;

  let body = document.querySelector("body")
  body.style.background = `rgb(${r+43} ,${g+43} ,${b+43})`

  let header = document.querySelector("header")
  header.style.background = `rgb(${r - 10} ,${g - 20} ,${b -30})`

  const div_sample = document.querySelector(".enunciado");
  div_sample.style.boxShadow = `26px 26px 51px rgb(${r - 20} ,${g - 20} ,${b -20}),-26px -26px 51px rgb(${r + 100} ,${g + 100} ,${b +100})`;

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
      r += 9;
      g += 9;
      b += 9;
      console.log("Suma");
      break;
    case 1:
      r -= 9;
      g -= 9;
      b -= 9;
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
