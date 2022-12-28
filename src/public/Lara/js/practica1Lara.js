var text="Lorem ipsum dolor sit amet";
var cadena=text.substring(1,4);
const A= Math.floor((Math.random() * (11-5))+5);
const B= Math.floor((Math.random() * (11-5))+5);
const C= Math.floor((Math.random() * (11-5))+5);

function log(message) {
    console.log(message);
}

function ejercicio6(e){
    log(e.length);
    log(e.indexOf("ipsum"))
}

ejercicio6(text);

log(cadena.toUpperCase());

function ejercicio7(A, B, C){
    var resultado= (A + B);
    resultado= Math.pow(resultado, C);
    console.log(resultado);
    if (A>B && A>C){
      console.log(A);
    }
    else{
        if (B>A && B>C){
            console.log(B);
        }
        else
          console.log (C);
    }
}

ejercicio7(A, B, C);