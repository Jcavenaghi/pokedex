var dia1= new Date();
var dia2= new Date(1575978300000);

function imprimirFecha(d){
    console.log(d.toLocaleDateString()+" "+d.toLocaleTimeString());
}

function swapFechas(dia1, dia2){
    let yearDia1= dia1.getFullYear();
    let monthDia2= dia2.getMonth();
    dia2.setFullYear(yearDia1);
    dia1.setMonth(monthDia2);
    console.log("Variable dia2 modificada: ");
    imprimirFecha(dia2);
    console.log("Variable dia1 modificada: ");
    imprimirFecha(dia1);
}

function resta(dia1, dia2){
    var nuevaFecha= new Date(dia1-dia2);
    imprimirFecha(nuevaFecha);
}

console.log("Variable dia2 antes de la modificacion: ");
imprimirFecha(dia2);
console.log("Variable dia1 antes de la modificacion: ");
imprimirFecha(dia1);
swapFechas(dia1, dia2);
resta(dia1, dia2);