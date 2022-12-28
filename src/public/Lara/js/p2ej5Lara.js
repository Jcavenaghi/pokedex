var aa = [1,2,3,4];
var bb = [1,2,3,4];
var cc = [1,2,3,4,5];
var dd = "Hola";
var ee = null;

function arrayEquals(aa, bb) {
   if (Array.isArray(aa) && Array.isArray(bb)){ //pregunto si ambos son arreglos
      if (aa.length == bb.length){ //pregunto si ambos tienen la misma cantidad de elementos
        for (let i=0; i<aa.length; i++){
           if (aa[i] !== bb[i]){ //comparo cada elemento
             return false;
           }
           return true;
        }
      }
      else{
        return false;
      }
   }
   else{
     return false;
   }
}   
console.log('Ejercicio 5 practica 2')
console.log('aa y aa (true) '+arrayEquals(aa, aa));
console.log('aa y bb (true) '+arrayEquals(aa, bb));
console.log('bb y cc (false) '+arrayEquals(bb, cc));
console.log('ee y cc (false) '+arrayEquals(ee, cc));
console.log('cc y dd (false) '+arrayEquals(cc, dd));
console.log('ee y ee (false porque no es un array) '+arrayEquals(ee, ee));
