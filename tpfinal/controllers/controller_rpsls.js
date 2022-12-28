const path = require('path');

/* Creamos fs para obtener el json
   de las salas, y asi a medida que
   se van creando salas, agregarlas
   al mismo. Y cuando se termina un
   juego, borrarla(salas = board en
   el ejercicio) */

const fs = require('fs');
let salas_json = fs.readFileSync(path.join(__dirname, '../salas/salas-rpsls.json'));
let salas = JSON.parse(salas_json);   //manejamos como un objeto el json

/* Creamos una matriz con las posibles
   jugadas que pueden existir. Esta 
   determinara cual es la jugada que se
   realizo y dará un ganador o empate.
   usada en darResultado(). */
var jugada = [                                                                  
                [0,1,2,2,1],
                [2,0,1,1,2],
                [1,2,0,2,1],                                            //Para ambas matrices, fila = jugador1 y columna = jugador2
                [1,2,1,0,2],
                [2,1,2,1,0]
            ];
/* Matriz similar a la anterior pero en
   esta estan todos los posibles resultados,
   segun las opciones elegidas, se tomara
   el resultado correspondiente y se enviara
   al usuario. */
var desc_jugada = [
                    ["Iguales","Papel tapa a piedra","Piedra rompe tijeras","Piedra aplasta lagarto","Spock vaporiza piedra"],
                    ["Papel tapa a piedra","Iguales","Tijeras cortan papel","Lagarto devora papel","Papel desautoriza a spock"],
                    ["Piedra rompe tijeas","Tijeras cortan papel","Iguales","Tijeras decapitan lagarto","Spock rompe tijeas"],
                    ["Piedra aplasta lagarto","Lagarto devora papel","Tijeras decapitan lagarto","iguales","Lagarto envenena a spock"],
                    ["Spock vaporiza piedra","Papel desautoriza a spock","Spock rompe tijeras","Lagarto envenena a spock","Iguales"]
                ];

/* Generamos un num aleatorio, nos valdra
   para ID del board, userID. Lo que se hace
   es generar un numero aleatorio entre 1000000
   y 100, (999900 posibles)*/
   
   function generarID() {
    let salaID = Math.floor((Math.random() * (1000000 - 100 + 1)) + 1); 
    return salaID;
  }

/* Creamos la sala asignando los
   datos que contendra la misma y
   la almacenamos en el json de salas.*/

const createSala = () => {
    let boardID = generarID();
    player1ID = generarID();
    let dataSala = {
        idTable : boardID,      //id del tablero
        estadoGame : 0,         //estado del juego, 0 es que hay 1/2 jugador/es . 1 es que hay 1 opcion seleccionada, 2 es que hay 2 opciones seleccionadas (luego de eso no habrá más. el juego finaliza)
        opcP1: '',       //opcion elegida por el p1
        opcP2: '',       //opcion elegida por el p2
        idP1: player1ID,        //id del p1
        idP2: '',         //id del p2
        cantPlayer: 1
    }
    salas.push(dataSala);
                            //  agregarSala(dataSala);
    salasJSON = JSON.stringify(salas);
    fs.writeFileSync(path.join(__dirname, '../salas/salas-rpsls.json'), salasJSON);

    return(dataSala);
}
/* Entramos a una partida existente
   mediante el ID, si el id corresponde
   a una partida y esta no esta llena, 
   ingresa y devuelve el id del jugador 2,
   caso contrario, error */

const entrarAPartida = (idS) => {
    let id = idS;
    let idEncontrada = false;
    var idP2 = 0;
    for(var i = 0; i < salas.length; i++) {
        if (salas[i].idTable == id) {
            if (salas[i].cantPlayer < 2) {
                idEncontrada = true;
                idP2 = generarID();
                salas[i].idP2 = idP2;
                salas[i].cantPlayer++;
            }
            break;
        }
    }
    if (idEncontrada == true) {
        salasJSON = JSON.stringify(salas);
        fs.writeFileSync(path.join(__dirname, '../salas/salas-rpsls.json'), salasJSON);
        return( dataIDP2 = {
            idPlayer2: idP2
        });
    } else { //si no se ecuentra, enviamos idP2=-1 indicando que no se asigno un id ya que no existe la sala
        return(dataIDP2 = {
            idPlayer2: -1
            });
    }
}
/* se recibe la opcion elegida por el 
   player, la sala y el player. la opcion 
   se guarda en la sala en el lugar 
   correspondiente segun el player que sea.
   Luego, actualizamos el json. una vez 
   realizado esto, retornamos un objeto
   boolean indicando que ya se escogio una 
   opcion, evitando asi que el usuario la cambie */

const escogerOpcion = (opc, player, idSala) => {
    for(var i = 0; i < salas.length; i++) {
        if (salas[i].idTable == idSala) {
            if(salas[i].idP1 == player) {   //si es el player 1, modifico la opc del player 1. Caso contrario, opcP2 = opc
                salas[i].opcP1 = opc;
            } else {
                salas[i].opcP2 = opc;
            }
            salas[i].estadoGame = salas[i].estadoGame + 1;
            break;
        }
    }
    salasJSON = JSON.stringify(salas);
    fs.writeFileSync(path.join(__dirname, '../salas/salas-rpsls.json'), salasJSON);
    return( escogio = {
        estado : true
    } )
}




/* stateGame estara siendo llamada constantemente
   para verificar la cantidad de jugadores que hay
   en la sala y asi saber si ambos jugadores ya han
   escogido su opcion. Devolvera true si el estado 
   del juego esta en 2, indicando que ya se debe dar
   un ganador.  */

const stateGame = (idSala) => {
    let encontre = { fin : false};
    for(var i = 0; i < salas.length; i++) {
        if (salas[i].idTable == idSala) {
            if (salas[i].estadoGame == 2) {
                encontre = {fin : true};
                break;
            } 
        }
    }
    return(encontre);
}
/* Se obtienen los datos de la sala una vez que ambos
   jugadores eligen su opcion a jugar. En base a esto, 
   se determina quien gano, perdio o si se empato. Este
   resultado es enviado a rpsls.js y ahi se muestra al 
   usuario. */

const darResultado = (idSala) => {
    let winner = 0;
        for(var i = 0; i < salas.length; i++) {
            if (salas[i].idTable == idSala) {
                let opc1 = salas[i].opcP1;
                let opc2 = salas[i].opcP2;
                let ganador = jugada[opc1][opc2];                     //resultado num(0,1,2 para saber si empate/gane/perdi)
                if (ganador === 1) {
                    winner = salas[i].idP2; 
                } else {
                    if (ganador === 2) {
                        winner = salas[i].idP1;
                    }
                }
                var result_descr = desc_jugada[opc1][opc2];             //descripcion del resultado, que fue superior a que. 
                break;
            }
        }

        let data = {
            res_ganador : winner,
            res_descr : result_descr
        }
    return(data);
}















module.exports = {createSala, entrarAPartida, escogerOpcion,stateGame,darResultado};