function modificar() {
    var color = document.getElementById("select").value;
    var body = document.getElementById("body");
    body.style.backgroundColor = color;
}


//ej 19

function cambiarFondo(color) {
    var body = document.getElementById("body");
    body.style.backgroundColor = color.value;
}