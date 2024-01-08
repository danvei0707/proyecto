

let colores = ["rgb(255, 89, 94)","rgb(255, 202, 58)","rgb(138, 201, 38)","rgb(202, 103, 2)",
                "rgb(25, 130, 196)","rgb(106, 76, 147)", "rgb(141, 153, 174)","rgb(201, 173, 167)"]
function ColorRandom(){

    let random = parseInt(Math.random() * colores.length)
    let color = colores[random]

    // devuleve un color aleatoreo
    return color
}

function AsignarColor(element,callback){      
       let color = callback() // Funcion de numero random
        element.style.background = color// agregar color
}

// cazar elementos del grid
const grid_itemas = document.querySelectorAll('.colorElegible')

// añadir colores elemento a elemento
grid_itemas.forEach(item =>{
    AsignarColor(item,ColorRandom)
})








