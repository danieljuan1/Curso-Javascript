$(document).ready(function(){
    document.getElementById("img").addEventListener("mouseover",cambiar, false);
});

function cambiar(){
    $("img").attr("src","Captura.PNG");
}

function diaActual(){
    var hoy=new Date();
    document.write(hoy.toDateString());
}

document.write("<br/>")

function aviso(){
    alert("hola")
}

function evento(){
    alert("has dado click a la imagen");
}

function mapa(){
    var foto = document.getElementsByTagName("img")[0];
    foto.addEventListener("click", evento, false);
}

window.onload=mapa;

var anuncio=document.getElementsByClassName("anuncio");
anuncio.innerHTML="VENDE";

