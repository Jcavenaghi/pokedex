function sumar() {
 let num1 = document.getElementById('num1').value;
num1 = parseInt(num1);
 let num2 = document.getElementById('num2').value;
 num2= parseInt(num2);
 let result = num1 + num2;
 document.getElementById('resultado').value = result;
}
//17
function restar() {
    document.getElementById('resultado').value = document.getElementById('num1').value - document.getElementById('num2').value;
}

function dividir() {
    document.getElementById('resultado').value = (document.getElementById('num1').value / document.getElementById('num2').value);
}

function mult() {
    document.getElementById('resultado').value = (document.getElementById('num1').value * document.getElementById('num2').value);
}