function enviar(){
    document.getElementById("texto2").value= document.getElementById("texto").value;
    return document.getElementById("texto2").value;
}
console.log(enviar()); 