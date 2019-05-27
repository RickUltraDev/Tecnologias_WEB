/*WEB STORAGE API con LocalStorage*/

/*Poner un nuevo item*/

function comenzar(){
    var boton = document.getElementById("Grabar");
    boton.addEventListener("click",nuevoItem,false); //Poner la variable a la escucha de el evento click, luego inicia la funcion nuevoItem
    
}

function nuevoItem(){
    var usuario = document.getElementById("UsrName").value;
    
    var contra1 = document.getElementById("contra1").value;
    var contra2 = document.getElementById("contra2").value;
    var contrasena;
    
    if(contra1 == contra2){
        contrasena = contra1;
        localStorage.setItem("usuario",usuario);
        localStorage.setItem("contra",contrasena);
            
    }else{
        alert("Contraseñas diferentes, vuelva introducir los datos.");
        location.href="NewUser.html";
    }
        
}


//Cuando cargue la página, inicia la funcion comenzar addeventlistener(type osea evento,listener,useCapture)
window.addEventListener("load", comenzar, false);



