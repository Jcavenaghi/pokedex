function sumar(){
    return document.getElementById("resul").value = parseInt(document.getElementById("op1").value) + parseInt(document.getElementById("op2").value);
}

function restar(){
    return document.getElementById("resul").value= parseInt(document.getElementById("op1").value) - parseInt(document.getElementById("op2").value);
}

function multiplicar(){
    return document.getElementById("resul").value= parseInt(document.getElementById("op1").value) * parseInt(document.getElementById("op2").value);
}

function dividir(){
    if (document.getElementById("op2").value != 0){
      return document.getElementById("resul").value= parseInt(document.getElementById("op1").value) / parseInt(document.getElementById("op2").value);
    }
    else{
        return document.getElementById("resul").value= "Error"
    }
}