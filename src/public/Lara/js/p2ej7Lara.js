function isNumeric(num){
    if (Number.isInteger(num) == false && isNaN(num) == false){
        return true;
    }
    else{
        return false;
    }
}

console.log('Ejercicio 7 practica 2');
console.log(isNumeric('2')); // retorna true
console.log(isNumeric('2a')); // retorna false
console.log(isNumeric(2)); // retorna false