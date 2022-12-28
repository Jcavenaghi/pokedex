const express = require('express');

const route = express.Router(); //especializado en rutas

const {createSala, ingresarSala, jugarTablero, actualizarJuego} = require('../controllers/controller_tateti'); 

/* Lo que hacemos con express(req y res)
   de cada una de las funciones, lo hacemos
   aca para separar la logica del juego y 
   permitir asi reusabilidad */

const crear = (req, res) => {
    let dataSala = createSala();
    res.send(dataSala);
}

const ingresar = (req, res) => {
    idSala = req.body.idSala;
    let id = parseFloat(idSala)
    if (typeof(id) === 'number'){
        let dataP2 = ingresarSala(idSala);
        res.send(dataP2);
    }
    else
        res.status(500).send('Tipo de parametro incorrecto');
    }

const jugar = (req, res) => {
    let tablero = req.body.idTabla;
    let turno = req.body.turno;
    let x = req.body.coorX;
    let y = req.body.coorY;
    let table= parseFloat(tablero);
    let turn= parseFloat(turno);
    if (typeof(table) === 'number'){
        if (typeof(turn) === 'number' ){
            if (typeof(x) === 'number' && typeof(y) === 'number'){
                let dibujar = jugarTablero(tablero, turno, x, y);
                res.send(dibujar);
            }
            else {
                res.status(500).send('Coordenadas incorrectas');
            }
        }
        else{
            res.status(500).send('Turno invalido');
        }
    }
    else{
        res.status(500).send('Tablero invalido');
    }
}

const update = (req, res) => {
    let boardId= req.body.id
    let board= parseFloat(boardId)
    if (typeof(board) === 'number'){
        let act = actualizarJuego(boardId)
        res.send(act)
    }
    else{
        res.status(500).send('Tablero invalido');
    }
}

route.post('/actualizarGame', update)

route.post('/jugada', jugar)

route.post('/ingresar', ingresar)

route.post('/crearTabla', crear)

module.exports = route;