function CartelFin(cartel_fin,h2,r ,g ,b){
  let cartel = document.querySelector(cartel_fin)
    cartel.style.background = `rgb(${r-70} ,${g-70} ,${b-70})`
    cartel.style.textShadow = `0 0 0.1rem rgb(${r+100} ,${g+100} ,${b+100})`
    cartel.style.color = `rgb(${r+90} ,${g+90} ,${b+90})`
  
    let fondo = document.querySelector(h2)
    fondo.style.background = `rgb(${r-40} ,${g-40} ,${b-40})`
}
function Buttons(name,r ,g ,b){
  let btn = document.querySelector(name)
  btn.style.background = `rgb(${r-20} ,${g-20} ,${b-20})`
  btn.style.textShadow = `0 0 0.1rem rgb(${r+100} ,${g+100} ,${b+100})`
  btn.style.color = `rgb(${r+90} ,${g+90} ,${b+90})`

}
export const AplicarColoresInterfaz = (r,g,b) => {
  
    let body = document.querySelector("body")
    body.style.background = `rgb(${r+43} ,${g+43} ,${b+43})`
    
    let header = document.querySelector("header")
    header.style.background = `rgb(${r - 5} ,${g - 5} ,${b -5})`
  
    let carteles = document.querySelector(".puntaje > h1")
    carteles.style.textShadow = `0 0 3px rgb(${r+100} ,${g+100} ,${b+100})`
    carteles.style.color = `rgb(${r-90} ,${g-90} ,${b-90})`

    Buttons("#resetGame2",r ,g ,b)
    Buttons("#resetGame1",r ,g ,b)
    Buttons("#continueGame",r ,g ,b)
  
    const sombra = document.querySelector(".enunciado");
    sombra.style.boxShadow = `26px 26px 51px rgb(${r - 20} ,${g - 20} ,${b -20}),-26px -26px 51px rgb(${r + 100} ,${g + 100} ,${b +100})`;
  
    CartelFin(".mensajeFin",".mensajeFin > h2",r ,g ,b)
    CartelFin(".fondo",".fondo > h2",r ,g ,b)

    const contadores = document.querySelectorAll(".contador")

    contadores.forEach((item)=>{
      item.style.background = `rgb(${r+50} ,${g+50} ,${b+50})`
    })
  }
  