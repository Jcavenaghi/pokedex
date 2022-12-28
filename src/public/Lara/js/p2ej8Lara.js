var prices = { //precios
    MILK: 48.90,
    BREAD: 90.50,
    BUTTER: 130.12
};

var amounts = { //cantidades
    MILK: 1,
    BREAD: 0.5,
    BUTTER: 0.2
};

var amounts2 ={
    BREAD: 1.5
};

function total(prices, amounts){ // función que retorne el valor total de amounts de acuerdo a los valores de prices
    var total= 0.0;
    for (const key in amounts){
        total= total + (prices[key] * amounts[key]);
    }
    return total;
}

console.log('Ejercicio 8 practica 2');
console.log(typeof prices);//object
console.log(prices.BREAD);//90.5
console.log(amounts["MILK"]);//1
console.log(total(prices, amounts));// imprime 120.174

var amounts2 = {
    BREAD: 1.5
};

console.log(total(prices, amounts2));
