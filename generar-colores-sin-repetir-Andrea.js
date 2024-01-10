let r ,g ,b
export const ColorAleatorio =  function generarVariacionesDeColor() {
  
  r = parseInt(Math.random() * 255);
  g = parseInt(Math.random() * 255);
  b = parseInt(Math.random() * 255);

  return {r ,g ,b }
}

    
