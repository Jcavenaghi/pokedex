function isInteger (num){
    if (Number.isInteger(num)){
        return true
    }
    else {
        return false
    }
}
console.log('Ejercicio 6 práctica 2');
console.log(isInteger(2)); // retorna true
console.log(isInteger(2.0)); // retorna true
console.log(isInteger(2.1)); // retorna false
console.log(isInteger(-10)); // retorna true
console.log(isInteger([1])); // retorna false
console.log(isInteger("2")); // retorna false
console.log(isInteger(true)); // retorna false
console.log(isInteger(null)); // retorna false
var num;
console.log(isInteger(num)); // retorna false