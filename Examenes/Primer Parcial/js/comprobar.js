function comprobar(){
    var Tactual = document.getElementById("timeQ");
    var min = new Date().getMinutes();
    var hour = new Date().getHours();
    var Tot = "0"+hour.toString()+":"+ min.toString();
    var Tot2 = Tactual.value;
    var Tot3 = Tot2.toString();
    
    if(Tot2 == Tot3){    
         alert("¡Bien Hecho! Haz completado las pruebas interactivas");
         location.href="index.html";
    }else{
        alert("Sigue intentando, ¡Tú puedes!");
    }
    

}