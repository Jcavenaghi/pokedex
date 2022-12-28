var words = ['perro', 'gato', 'casa',
 'árbol', 'nube', 'día', 'noche',
 'zanahoria', 'babuino'];

console.log("Ejercicio 9 practica 2");

var enOrden = words.sort((a, b)=>a.localeCompare(b));

console.log("En orden: "+enOrden);

var inverso = words.reverse((a, b)=>a.localeCompare(b));

console.log("Inverso: "+inverso);