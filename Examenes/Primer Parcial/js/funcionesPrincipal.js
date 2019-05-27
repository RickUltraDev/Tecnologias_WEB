function leerItem() {
    var col = localStorage.getItem("usuario");
    var usuario = document.getElementById("sign");
    var inicioSes = localStorage.getItem("sesion");
    
    if (col != undefined && inicioSes != undefined) {
        usuario.innerHTML = '<a href="#" id="sign" onclick="eliminarSesion()">' + col + '</a>';
    }
}

function eliminarSesion() {
    localStorage.clear();
    location.href="index.html";
}



//Cuando cargue la página, inicia la funcion comenzar addeventlistener(type osea evento,listener,useCapture)
window.addEventListener("load", leerItem, false);
