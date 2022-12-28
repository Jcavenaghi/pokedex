var alice = {
    name : "Alice",
    dob : new Date(2001, 3, 4),
    height : 165,
    weight : 68
};
var bob = {
 name : "Robert",
 dob : new Date(1997, 0, 31),
 height : 170,
 weight : 88
};
var charly = {
 name : "Charles",
 dob : new Date(1978, 9, 15),
 height : 188,
 weight : 102
};
var lucy = {
 name : "Lucía",
 dob : new Date(1955, 7, 7),
 height : 155,
 weight : 61
};
var peter = {
 name : "Peter",
 dob : new Date(1988, 2, 9),
 height : 165,
 weight : 99
};
var luke = {
 name : "Lucas",
 dob : new Date(1910, 11, 4),
 height : 172,
 weight : 75
};

console.log("Ejercicio 13 practica 2");

var getIMC = personas => Math.round(personas.weight / Math.pow(personas.height/100, 2));
var getAge = persona => (fechaAct.getFullYear() - persona.dob.getFullYear());
var fechaAct= new Date();

const IMCmay25 = personas => (getIMC(personas) > 25);

function pName (personas){
    return personas.name;
}

const personas = [alice, bob, charly, lucy, peter, luke];

//inciso 1 --------------------------------------------------------
var arrayNombres= personas.filter(IMCmay25);
console.log("Nombres de los pacientes con IMC mayor a 25: ");
console.log(arrayNombres.map(pName));

//inciso 2 --------------------------------------------------------
function NomYEdad (personas){
    return personas.name+": "+getAge(personas);
}

console.log("Nombres y edades de todos los pacientes: ");
console.log(personas.map(NomYEdad));

//inciso 3 -------------------------------------------------------
var mayor40 = personas => (getAge (personas) > 40);
console.log("IMC de los pacientes mayores de 40: ");
var may40 = personas.filter(mayor40);
console.log(may40.map(getIMC));

//inciso 4 -------------------------------------------------------
var red = (accumulator, currentValue) => accumulator + currentValue;

var arrayIMC= personas.map(getIMC);

console.log("Promedio: "+arrayIMC.reduce(red)/arrayIMC.length);

//inciso 5----------------------------------------------------------
function masJoven(personas) {
    let edades = [];
    let menor = {};
    let edad = 99999;
    for (let i = 0; i < personas.length; i++) {
        if (getAge(personas[i]) < edad) {
            edad = getAge(personas[i])
            menor = personas[i]
        }
    }
    return menor;
}

let Joven= masJoven(personas);
console.log(Joven.name);

//inciso 6----------------------------------------------------------
function ordenarPorEstatura(personas){
    return personas.sort((a,b) => a.height - b.height);
}

let arregloOrdenado = ordenarPorEstatura(personas);
console.log(arregloOrdenado);