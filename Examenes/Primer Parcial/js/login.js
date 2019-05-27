function comprobar(){
    var contra = localStorage.getItem("contra");
    var usr = localStorage.getItem("usuario");
    var usri = document.getElementById("usrInp").value;
    var contrai = document.getElementById("contraInp").value;
    var ses = 1234;
    
    if(contra == contrai && usr == usri ){
        localStorage.setItem("sesion",ses);
        location.href="index.html";
    }else{
        alert("Dato(s) érroneo(s), vuelva introducir los datos.");
        location.href="login.html";
    }
    
     
}
