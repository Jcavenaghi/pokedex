function isNumeric(cadena) {
    if(typeof(cadena) === "string") {
        if (isNaN(cadena)) { //devuelve false si la cadena no es NaN y verdadero si es NaN
            return false; //retorna false(el string no es numererico)
        }
        else {
            return true; // el string si es numerico, retorno true
        }
    }
    else {
        return false;
    }
}