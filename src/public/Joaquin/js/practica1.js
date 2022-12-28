function log(message) {
    console.log(message);
}
function ejercicio6(e) {
    log(e.length);
    log(e.indexOf("lipsum"));
    const text1a4 = e.substring(1,4);
    log(text1a4.toUpperCase());
}
function ejercicio7(A,B,C) {
    let D = (A + B);
    for ( let I = 0; I < C; I++) {
        D = (D * D);
    }
    log(D);
    log(Math.max(A,B,C));
}
function imprimirFecha (dia) {
    log(dia.toLocaleDateString()); 
    log(dia.toLocaleTimeString());
 
 }
 function recibo2fechas(dia1, dia2) {
    let yearDia1 = dia1.getFullYear();
    let monthDia2 = dia2.getMonth();
    dia2.setFullYear(yearDia1);
    dia1.setMonth(monthDia2);
    imprimirFecha(dia1);
    imprimirFecha(dia2);
 }
 function  diferenciaDeFechas(fecha, fecha2) {
    let tiempo = fecha.getTime() - fecha2.getTime();
    let fechaNueva = new Date(tiempo);
    return fechaNueva;
 }
