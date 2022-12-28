function max (arreglo) {
    let max =  Math.max(...arreglo);
    if ((isNaN(max)) || (max == -Infinity)){
       return ("Error. el resultado no es un número.");
    }
    return max;
}
function min(arreglo) {
    let min = Math.min(...arreglo);
    if ((isNaN(min)) || (min == Infinity)) { // si hay al menos UN elemento del arreglo que no pueda pasarse a numero O el arreglo // 
       return ("Error. el resultado no es un número.");                           // Esta vacio, retonaremos 0    //
    }
    return min;
}
function avg(arreglo) {
    let prom = sum(arreglo);
    prom = (prom / arreglo.length);
    if (isNaN(prom)) { // 0 / 0 da NaN y si hay al menos Un elemento que no se pueda pasar a numero, tambien dara NaN
       return ("Error. el resultado no es un número.");
    }
    return prom;
}
function sum(arreglo) {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let total = arreglo.reduce(reducer, 0);
    if (isNaN(total)) { // si hay al menos Un elemento que no se pueda pasar a numero, dara NaN
       return ("Error. el resultado no es un número.");
    }
    return total;
}
// MAS FUNCIONES
function concat(left, right) {
    return left.concat(right);
}
function arrayEquals(a,b) {
    if ((Array.isArray(a)) && (Array.isArray(b))) { //determina si es un arreglo
        if (a.length == b.length) { //La longitud es la misma
            for (let i = 0; i < a.length; i++) {
                if (a[i] !== b[i]) {
                return false;
                }
            return true // si termina el for, los elementos son iguales
            }
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
}
function isInteger(num) {
    return (Number.isInteger(num));
}