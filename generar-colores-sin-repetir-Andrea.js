let random = parseInt(Math.random() * 3);

export const ColorAleatorio = function generarVariacionesDeColor() {
  // se genera el codigo rgb aleatorio
  let r = parseInt(Math.random() * 240),
    g = parseInt(Math.random() * 240), // evitar la aproximacion entre colores
    b = parseInt(Math.random() * 240);
  // escogemos una saturacion entre rojo , azul y verde
  switch (random) {
    case 0:
      r = 255;
      break;
    case 1:
      g = 255;
      break;
    case 2:
      b = 255;
      break;
  }
  return { r, g, b };
};
// escoger nueva saturacion
const grid_itemas = document.querySelectorAll(".colorElegible");
grid_itemas.forEach((item) => {
  item.addEventListener("click", () => {
    random = parseInt(Math.random() * 3);
  });
});
