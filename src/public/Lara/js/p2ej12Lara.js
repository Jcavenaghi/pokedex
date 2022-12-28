function reduce(array, binaryOperation, initialValue){
 let total= initialValue;
 for (let i=0; i < array.length; i++){
     total= binaryOperation(total, array[i]);
 }
 return total;
}

var numbers = [ 1, 3, 4, 6, 23, 56, 56, 67, 3,
    567, 98, 45, 480, 324, 546, 56 ];
   
var sum = (x, y) => x + y;

console.log("Ejercicio 12 practica 2");
  
console.log(numbers.reduce(sum, 0));
   
console.log(reduce(numbers, sum, 0));