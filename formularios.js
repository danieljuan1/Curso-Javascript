
var edad;
function comenzar(){
    edad=document.getElementById("edad");
    edad.addEventListener("change",cambiarRango,false);
    document.datosUsuario.addEventListener("invalid",validar, true);
    document.getElementById("enviar").addEventListener("click",enviar,false);
    document.datosUsuario.addEventListener("input",validarTiempoReal,false);
}
function cambiarRango(){
    var salida = document.getElementById("rango");
    var calculo = edad.value-30;
    if(calculo<30){
        calculo = 0;
        edad.value=30;
    }
    salida.innerHTML=calculo+" a "+edad.value;
}

function validar(e){
    var elemento = e.target;
    elemento.style.background="#FFDDDD"
}

function enviar(){
    var correcto=document.datosUsuario.checkValidity();
    if(correcto == true){
        document.datosUsuario.submit();
    }
}

function validarTiempoReal(e){
    var elemento=e.target;
    if(elemento.validity.valid==true){
        elemento.style.background="#FFFF"
    }else{
        elemento.style.background="#FFDDDD"
    }
}


window.addEventListener("load", comenzar, false);