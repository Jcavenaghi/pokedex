const A= Math.floor(Math.random() * 5);
const B= Math.floor(Math.random() * 5);
const C= Math.floor(Math.random() * 5);

var texto = "Lorem ipsum dolor sit amet."
var dia1 = new Date();
var dia2 = new Date (1575978300000);

function log(message) {
    console.log(message);
}

function eje6(t){
    let unString = t.substring(1,4);
    log(t.length);
    if(t.indexOf("ipsum") != -1 ){
        log(t.indexOf("ipsum"));
    }
    log(unString.toUpperCase());   
}

function eje7(A, B, C){
    let base = (A + B);
    let exponente = C;
    console.log(Math.pow(base, exponente));
    if (A > B && A > C){
        console.log(A);
    }
    else{
        if (B > A && B > C){
            console.log(B);
        }
        else
          console.log (C);
    }
}

function imprimirFecha(unDia){
    console.log(unDia.toLocaleDateString() + " " +unDia.toLocaleTimeString());

}

function modificarFechas(d1,d2){
    let mesD2 = d2.getMonth();
    d2.setFullYear(d1.getFullYear());
    d1.setMonth(mesD2);
    console.log("fecha 1 modificada:")
    imprimirFecha(d1);
    console.log("fecha 2 modificada:");
    imprimirFecha(d2);
}

function restaFechas(d1,d2){
    let fechaN = new Date(d1-d2);
    imprimirFecha(fechaN);

}

log ("Hola Mundo!!");
eje6(texto);
eje7(A,B,C);
console.log("fecha 1");
imprimirFecha(dia1);
console.log("fecha 2");
imprimirFecha(dia2);
modificarFechas(dia1,dia2);
restaFechas(dia1,dia2);


