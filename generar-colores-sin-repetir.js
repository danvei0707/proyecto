function generarVariacionesDeColor(colorCorrecto, coloresGenerados) {
    
    let variacionDeColor;
    // Aquí estará el nuevo color similar generado.

    do {
        // Usamos el bucle 'do while' para generar similares hasta encontar uno que no esté repetido.
        variacionDeColor = colorCorrecto.split(", ").map(componente => {
            // Genera un nuevo color similar a partir del correcto. 
            return Math.min(255, Math.max(0, parseInt(componente) + Math.floor(Math.random() * 30) - 15));
            // Aquí se genera una variación aleatoria en el rango de - 15 a + 15.
        });
    } while (coloresGenerados.includes(`rgb(${variacionDeColor.join(", ")})`) || variacionDeColor.join(", ") === colorCorrecto); 
    // Verifica si el color similar ya está en la lista de colores generados, para que no se repitan.

    return `rgb(${variacionDeColor.join(", ")})`;
        
}

function generarColorSimilar(colorCorrecto, coloresGenerados) {
    let colorSimilar;
    do {
        colorSimilar = colorCorrecto.split(", ").map(componente => {
            return Math.min(255, Math.max(0, parseInt(componente) + Math.floor(Math.random() * 30) - 15));
        });
    } while (coloresGenerados.includes(`rgb(${colorSimilar.join(", ")})`) || colorSimilar.join(", ") === colorCorrecto);

    return `rgb(${colorSimilar.join(", ")})`;
}



function generarVariacionesDeColor(colorCorrecto, coloresGenerados) {
    
    let variacionDeColor;
    // Aquí estará el nuevo color similar generado.

    do {
        // Usamos el bucle 'do while' para generar similares hasta encontar uno que no esté repetido.
        variacionDeColor = colorCorrecto.split(", ").map(componente => {
            // Genera un nuevo color similar a partir del correcto. 
            return Math.min(255, Math.max(0, parseInt(componente) + Math.floor(Math.random() * 30) - 15));
            // Aquí se genera una variación aleatoria en el rango de - 15 a + 15.
        });
    } while (coloresGenerados.includes(`rgb(${variacionDeColor.join(", ")})`) || variacionDeColor.join(", ") === colorCorrecto); 
    // Verifica si el color similar ya está en la lista de colores generados, para que no se repitan.

    return `rgb(${variacionDeColor.join(", ")})`;
        
}