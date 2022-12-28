console.log('Ejercicio 3 practica 2');
 let values = [10, 2, 3, 4, 5]; 
  function max(values) {
    let maxi= -100;
    for (var i=0; i<values.length; i++){
      if (values[i]> maxi)
        maxi= values[i];
    }
    if (values.length == 0)
      maxi= null;
    return maxi;
    // retorna el valor máximo
   }

   function min(values) {
    let mini= 10000;
     for (var i= 0; i<values.length; i++){
       if (values[i]<mini)
         mini= values[i]
     }
     if (values.length == 0)
      mini= null;
     return mini;
    // retorna el valor mínimo
   }

   function avg(values) {
     let prom=0;
     for (var i=0; i<values.length; i++){
       prom= prom + values[i];
     }
     prom= prom / values.length;
     if (values.length == 0)
      prom= null;
     return prom;
    // retorna el valor promedio
   }

   function sum(values) {
     let tot=0;
     for (var i=0; i<values.length; i++){
       tot= tot + values[i];
     }
     if (values.length == 0)
      tot= null;
    return tot;
    // retorna la sumatoria de los valores
   }

console.log(max(values));
console.log(min(values));
console.log(avg(values));
console.log(sum(values));