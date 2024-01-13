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
    body.style.background = `rgb(${r+90} ,${g+90} ,${b+90})`
    
    let header = document.querySelector("header")
    
    let carteles = document.querySelectorAll(".centrado")
    console.log(carteles)

    let cartel_media = window.matchMedia("(max-width: 848px)")
    console.log(cartel_media);
    if (cartel_media.matches){
      const cartel = document.querySelector(".cartel")
      cartel.style.background = `rgb(${r + 5} ,${g + 5} ,${b +5})`
    }

    carteles.forEach((item)=>{
      item.style.textShadow = `0 0 3px rgb(${r+120} ,${g+120} ,${b+120})`
      item.style.color = `rgb(${r-100} ,${g-100} ,${b-100})`

    })
    
    header.style.background = `rgb(${r - 5} ,${g - 5} ,${b -5})`
    header.style.textShadow = `none`

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
  