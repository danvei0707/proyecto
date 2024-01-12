export const AplicarColoresInterfaz = (r,g,b) => {
  
    let body = document.querySelector("body")
    body.style.background = `rgb(${r+43} ,${g+43} ,${b+43})`
    
    let header = document.querySelector("header")
    header.style.background = `rgb(${r - 5} ,${g - 5} ,${b -5})`
  
    let carteles = document.querySelector(".puntaje > h1")
    carteles.style.textShadow = `0 0 3px rgb(${r+100} ,${g+100} ,${b+100})`
    carteles.style.color = `rgb(${r-90} ,${g-90} ,${b-90})`
  
    const sombra = document.querySelector(".enunciado");
    sombra.style.boxShadow = `26px 26px 51px rgb(${r - 20} ,${g - 20} ,${b -20}),-26px -26px 51px rgb(${r + 100} ,${g + 100} ,${b +100})`;
  
    let cartel = document.querySelector(".fondo")
    cartel.style.background = `rgb(${r-70} ,${g-70} ,${b-70})`
    cartel.style.textShadow = `0 0 0.1rem rgb(${r+100} ,${g+100} ,${b+100})`
    cartel.style.color = `rgb(${r+90} ,${g+90} ,${b+90})`
  
    let fondo = document.querySelector(".fondo > h2")
    fondo.style.background = `rgb(${r-40} ,${g-40} ,${b-40})`
  }
  