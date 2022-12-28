const IMCmas25 = persona => (persona.weight /(Math.pow((persona.height /100), 2))> 25);
/*
    para el reduce
*/
const acumular = (accumulator, currentValue) => accumulator + currentValue;
/* sacamos el IMC de cualqueier persona
*/
function IMC(persona){
    return (persona.weight /(Math.pow((persona.height /100), 2)));
}
/*
    nuevo arreglo con formatos
    nombre 
        y
    nombre: edad de las personas 
*/
function mapear (persona) {
    return persona.name;
}
function mapNomEdad(persona) {
    edadP = edadPersona(persona);
    return persona.name+": "+ edadP;
}
function edadPersona(persona) {
    let fechaAct = new Date();  //para crear la fecha de hoy
    let edad = ((fechaAct.getTime() - persona.dob.getTime()) /365);
    if (edad < 0) {
        edad = edad *(-1);
    }
    edad = edad / 86400000;
    edad = Math.round(edad);
    return edad;
}

function edadMAS40 (persona) {
    edadP = edadPersona(persona);
    if (edadP > 40) {
        return IMC(persona);
    }
}
function mapIMC(persona) {
    let IMCP = IMC(persona);
    return Math.round(IMCP);
}
function edadesP(persona) {
    edadP = edadPersona(persona);
    return edadP;
}
function mapEstaturas(persona){
    return persona.height
}
const ordenarEstaturas = (a,b) => a-b;
