const path = require('path');

const fs = require('fs');
let salas_json = fs.readFileSync(path.join(__dirname, '../salas/salas_tateti.json'));
let salas = JSON.parse(salas_json);   //manejamos como un objeto el json

const EMPTY = ' ';
const CROSS = 'X';
const CIRCLE = 'O';

/*creo la sala con el tablero*/
const createSala = () =>{

    let sala = {

        board: [
            [EMPTY, EMPTY, EMPTY],
            [EMPTY, EMPTY, EMPTY],
            [EMPTY, EMPTY, EMPTY]
        ],
        turn: CROSS,
        id: generateID(),
        playerId: generateID(),
        playerId2: '',
        cantPlayer: 1
    };

    //pusheo el board al objeto salas
    salas.push(sala)
    let salasJSON = JSON.stringify(salas)
    //con writeFileSync guardo la sala creada en el json
    fs.writeFileSync(path.join(__dirname, '../salas/salas_tateti.json'), salasJSON)

    let data = {
        board: sala.id,
        playerId: sala.playerId
    }
    return (data)
}

function generateID() {
    let salaID = Math.floor((Math.random() * (1000000 - 100 + 1)) + 1); 
    return salaID;
}



const ingresarSala = (idSala) =>{
    let idEncontrada = false;
    for(var i = 0; i < salas.length; i++) {
        if (salas[i].id == idSala) {
            if (salas[i].cantPlayer < 2) {
                idEncontrada = true;
                playerId2 = generateID();
                salas[i].playerId2 = playerId2;
                salas[i].cantPlayer++;
                break;
            }
            break;
        }
    }
    if (idEncontrada == true) {
        let salasJSON = JSON.stringify(salas);
        fs.writeFileSync(path.join(__dirname, '../salas/salas_tateti.json'), salasJSON);
        let dataIDP2 = {
            idPlayer2: playerId2
        }
        return dataIDP2
    } else { //si no se ecuentra, enviamos idP2=-1 indicando que no se asigno un id ya que no existe la sala
        let dataIDP2 = {
            idPlayer2: -1
        }
        return dataIDP2
    }
}

//marca la ficha en el tablero teniendo en cuenta si
//es el turno del jugador y si la cuadricula esta libre
const jugarTablero = (tablero, turno, x, y) =>{
    let dibuje = false
    for(var i = 0; i < salas.length; i++) {
        if (salas[i].id == tablero) {
            if (salas[i].turn == 'X'){ //comparo quien hizo click y si es su turno
                if (salas[i].playerId == turno){
                    if (salas[i].board[x][y] == EMPTY){
                        salas[i].board[x][y]= CROSS
                        salas[i].turn= CIRCLE
                        dibuje= true
                    }
                }
            }
            else{
                if (salas[i].playerId2 == turno){
                    if (salas[i].board[x][y] == EMPTY){
                        salas[i].board[x][y]= CIRCLE
                        salas[i].turn= CROSS
                        dibuje= true
                    }
                }
            }
            break;
        }
    }
    if (dibuje == true){
        let salasJSON = JSON.stringify(salas);
        fs.writeFileSync(path.join(__dirname, '../salas/salas_tateti.json'), salasJSON);
    }
    let dibujar = {
        pude : dibuje,
        simbolo : salas[i].board[x][y],
    }
    return dibujar
}


//verifica el estado del tablero. si hay ganador (true) retorna el ganador
//si no hay ganador (false) retorna el tablero actualizado
const actualizarJuego= (boardId) =>{
    if (boardId != undefined){
        let booleanGanador= false
        let ganador
        let encontreId= false
        let tablero;
        let turno
        for(var i = 0; i < salas.length; i++) {
            if (salas[i].id == boardId) {
                encontreId= true
                tablero= salas[i].board
                turno= salas[i].turn
                break;
            }
        }
        if (encontreId == true){
        if (turno == CIRCLE){
            booleanGanador = hayGanador(CROSS, tablero)
            ganador = CROSS
        }
        else {
            booleanGanador= hayGanador(CIRCLE, tablero)
            ganador = CIRCLE 
        }
        let empate = hayEmp(tablero)
        let actualizado = {
            tabla : tablero,
            hayGanador : booleanGanador,
            winner : ganador,
            turno: salas[i].turn,
            tie : empate
        }
        return actualizado
        }
    }
}

function hayEmp (board){
    for (let i = 0; i <= 2; i++) {
        for (let j = 0; j <= 2; j++) {
            if (board[i][j] == EMPTY){
                return false
            }   
        }
    }
    return true
}

//comparo si en el tablero hay algun ganador
function hayGanador(simbolo, board){
    let encontre= false
    //vertical
    if (board[0][0]== simbolo && board[0][1]== simbolo && board[0][2]== simbolo){
        encontre= true
    }
    else if (board[1][0]== simbolo && board[1][1]== simbolo && board[1][2]== simbolo){
        encontre= true
    }
    else if (board[2][0]== simbolo && board[2][1]== simbolo && board[2][2]== simbolo){
        encontre= true
    }
    //horizontal
    else if (board[0][0]== simbolo && board[1][0]== simbolo && board[2][0]== simbolo){
        encontre= true
    }
    else if (board[0][1]== simbolo && board[1][1]== simbolo && board[2][1]== simbolo){
        encontre= true
    }
    else if (board[0][2]== simbolo && board[1][2]== simbolo && board[2][2]== simbolo){
        encontre= true
    }
    //diagonal
    else if (board[0][0]== simbolo && board[1][1]== simbolo && board[2][2]== simbolo){
        encontre= true
    }
    else if (board[0][2]== simbolo && board[1][1]== simbolo && board[2][0]== simbolo){
        encontre= true
    }
    return encontre
}




//exporto las funciones
module.exports = {createSala, ingresarSala, jugarTablero, actualizarJuego}