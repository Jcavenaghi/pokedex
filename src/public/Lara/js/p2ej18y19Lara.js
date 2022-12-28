function cambiarFondo(x){
    var body= document.getElementById("body");
    body.style.backgroundColor= x.value;
}

function modificar(){
    var color = document.getElementById("select").value;
    var body = document.getElementById("body");
    body.style.backgroundColor= color.value;
}