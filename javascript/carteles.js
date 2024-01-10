// function GenerarCarteles (aciertos, fallos) {
//     if (aciertos === 3) {
//          ganar();
//     }else if(fallos === 3) {
//          perder();
//     }
//  }
 function ganar() {
    var w = window.open('','','width=100,height=100');
    var left = (screen.width - w.outerWidth) / 2;
    var top = (screen.height - w.outerHeight) / 2;
    w.moveTo(left, top);
    w.document.write('Ganaste!'); w.document.body.style.backgroundColor = '#008000';
    w.focus();
    //w.document.value
    setTimeout(function() {w.close();}, 3000);
 }
 function perder() {
    var w = window.open('','','width=100,height=100');
    var left = (screen.width - w.outerWidth) / 2;
    var top = (screen.height - w.outerHeight) / 2;
    w.moveTo(left, top);
    w.document.write('Perdiste!'); w.document.body.style.backgroundColor = '#990000';
    w.focus();
    //w.document.value
    setTimeout(function() {w.close();}, 3000);
 }
