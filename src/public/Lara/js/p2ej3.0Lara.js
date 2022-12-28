console.log('Ejercicio 3 usando reduce, math.max y math.min practica 2');
const reducer = (accumulator, currentValue) => accumulator + currentValue;

 let value = [10, 2, 3, 4, 5]; 

   function max(value) {
     return Math.max(value[0], value[1], value[2], value[3], value[4]);
     // retorna el valor máximo
   }
   function min(value) {
     return Math.min(value[0], value[1], value[2], value[3], value[4]);
     // retorna el valor mínimo
   }
   function avg(value) {
     let prom= value.reduce(reducer);
     prom = prom / value.length;
     return prom;
     // retorna el valor promedio
   }
   function sum(value) {
     return value.reduce(reducer);
     // retorna la sumatoria de los valores
   }

   console.log(max(value));
   console.log(min(value));
   console.log(avg(value));
   console.log(sum(value));