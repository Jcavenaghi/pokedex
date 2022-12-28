console.log("Ejercicio 10 practica 2");

var words = ['perro', 'gato', 'casa',
 'árbol', 'nube', 'día', 'noche',
 'zanahoria', 'babuino'];

words.sort((a, b) => a.length-b.length);

console.log("Por largo de cadenas: "+words);