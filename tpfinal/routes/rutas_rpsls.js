const express = require('express');

const route = express.Router(); //especializado en rutas

const {createSala, entrarAPartida, escogerOpcion,stateGame, darResultado} = require('../controllers/controller_rpsls'); //importamos controllers del rpsls

/* Lo que hacemos con express(req y res)
   de cada una de las funciones, lo hacemos
   aca para separar la logica del juego y 
   permitir asi reusabilidad */

const crearSala = (req, res) => {
    let dataSala = createSala();
    res.send(dataSala);
}

const entrar = (req, res) => {
    let idSala = req.body.idS;
    let idS = parseFloat(idSala);        //convierto a number. Ya que viene como string (si no es un numero se convierte en NaN)
    if (typeof(idS) === 'number') {      //verifico que la id sea un numero (dentro verifico si corresponde a una sala o no.)
        let dataP2 = entrarAPartida(idS);
        res.send(dataP2);
    } else {
        res.status(500).send('Algo fallo!');
    }
}

const escogerOpc = (req, res) => {
    let opcion = req.body.opcion;
    let player = req.body.idP;
    let idSala = req.body.idS;
    let idS = parseFloat(idSala);        //convierto a number. Ya que viene como string (si no es un numero se convierte en NaN)
    let opc = parseFloat(opcion);
    if (typeof(idS) === 'number' && opc < 5) {      //verifico que la id sea un numero (dentro verifico si corresponde a una sala o no.)
        eligio = escogerOpcion(opc, player, idS);
        res.send(eligio);
    } else {
        res.status(500).send('Algo fallo!');
    }
}

const estadoJuego = (req, res) => {
    let idSala = req.body.id;
    let idS = parseFloat(idSala);        //convierto a number. Ya que viene como string (si no es un numero se convierte en NaN)
    if (typeof(idS) === 'number') {      //verifico que la id sea un numero (dentro verifico si corresponde a una sala o no.)
        estado = stateGame(idSala);
        res.send(estado);
    } else {
        res.status(500).send('Algo fallo!');
    }
}

const resultadoFinal = (req,res) => {
    let idSala = req.body.id;
    let idS = parseFloat(idSala);        //convierto a number. Ya que viene como string (si no es un numero se convierte en NaN)
    if (typeof(idS) === 'number') {      //verifico que la id sea un numero (dentro verifico si corresponde a una sala o no.)

        dataRes = darResultado(idSala);
        res.send(dataRes);
    } else {
        res.status(500).send('Algo fallo!');
    }
}

route.post('/crearBoard', crearSala)
route.post('/joinBoard', entrar)
route.post('/choose', escogerOpc)
route.post('/actualizarGame',estadoJuego)
route.post('/result', resultadoFinal)




















module.exports = route;
