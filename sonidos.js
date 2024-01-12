window.addEventListener("load",function(){
	document.getElementById("play").addEventListener("click",sonarPerdiste);
	document.getElementById("stop").addEventListener("click",callarPerdiste);			
});

function sonarPerdiste(){
	var sonido = document.createElement("iframe");
	sonido.setAttribute("src","perder-incorrecto-no-valido.mp3");
	document.body.appendChild(sonido);
	document.getElementById("play").removeEventListener("click",sonarPerdiste);
}

function callarPerdiste(){
	var iframe = document.getElementsByTagName("iframe");

	if (iframe.length > 0){
		iframe[0].parentNode.removeChild(iframe[0]);
		document.getElementById("play").addEventListener("click",sonarPerdiste);
	}
}

window.addEventListener("load",function(){
	document.getElementById("play").addEventListener("click",sonarGanaste);
	document.getElementById("stop").addEventListener("click",callarGanaste);			
});

function sonarPerdiste(){
	var sonido = document.createElement("iframe");
	sonido.setAttribute("src","bites-ta-da-winner.mp3");
	document.body.appendChild(sonido);
	document.getElementById("play").removeEventListener("click",sonarGanaste);
}

function callarGanaste(){
	var iframe = document.getElementsByTagName("iframe");

	if (iframe.length > 0){
		iframe[0].parentNode.removeChild(iframe[0]);
		document.getElementById("play").addEventListener("click",sonarGanaste);
	}
}

window.addEventListener("load",function(){
	document.getElementById("play").addEventListener("click",sonarMouse);
	document.getElementById("stop").addEventListener("click",callarMouse);			
});

function sonarMouse(){
	var sonido = document.createElement("iframe");
	sonido.setAttribute("src","pick-92276.mp3");
	document.body.appendChild(sonido);
	document.getElementById("play").removeEventListener("click",sonarMouse);
}

function callarMouse(){
	var iframe = document.getElementsByTagName("iframe");

	if (iframe.length > 0){
		iframe[0].parentNode.removeChild(iframe[0]);
		document.getElementById("play").addEventListener("click",sonarMouse);
	}
}
