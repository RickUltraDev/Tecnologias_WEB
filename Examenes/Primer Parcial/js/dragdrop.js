var elemOr;
var elemDest;

function comenzar(){
    elemOr = document.getElementById("cajaimagen");
    elemOr.addEventListener("dragstart", arrastre, false);
    
     elemDest = document.getElementById("cajasoltar");
    elemDest.addEventListener("dragenter",function(e){
    e.preventDefault();},false);
    
    elemDest.addEventListener("dragover",function(e){
    e.preventDefault();},false);
    
    elemDest.addEventListener("drop",soltar,false); //cuando se suelte
    
    elemOr.addEventListener("dragend",terminado,false); //cuando termine de arrastrar
    
    elemDest.addEventListener("dragenter",entrar)
    
}


function arrastre(e){
  var codigo="<img src='" +elemOr.getAttribute("src")+"'>";
    e.dataTransfer.setData("Text",codigo);
}

function soltar(e){
    e.preventDefault();
    elemDest.innerHTML = e.dataTransfer.getData("Text");
    
}

function terminado(e){
    var elemento = e.target;
    
    elemento.style.visibility = "hidden"; //ocultas el elemento
    alert("¡Bien Hecho! Ve a la página 2");
}

function entrar(e){
    e.preventDefault();
    elemDest.style.background="rgb(250,207,90,0.7)";
}




window.addEventListener("load",comenzar,false);