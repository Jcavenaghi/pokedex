function identity(x){
    return x;
   }

var id = function(x){
    return x;
   }

var iden = x => x;

var identidad = identity;

console.log("Ejercicio 11 practica 2");

console.log(typeof identity); //function
console.log(typeof id); //function
console.log(typeof iden); //function
console.log(typeof identidad); //function

console.log(identity('Hola'));
console.log(id('Hello'));
console.log(iden('Buen día'));
console.log(identidad('Buen día'));
