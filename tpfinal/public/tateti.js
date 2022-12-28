const url = `http://localhost:3000`
var boardId;
var playerId;

//cuadros del tateti
let btn00= document.getElementById("btn00")
let btn01= document.getElementById("btn01")
let btn02= document.getElementById("btn02")
let btn10= document.getElementById("btn10")
let btn11= document.getElementById("btn11")
let btn12= document.getElementById("btn12")
let btn20= document.getElementById("btn20")
let btn21= document.getElementById("btn21")
let btn22= document.getElementById("btn22")

function crearSala(){
    document.getElementById("player").innerHTML= "Jugador: X"
    document.getElementById("tabla").style.display = "inline";
    document.getElementById("turno").style.display = "inline";
    actualizar()
    fetch(url+'/game_tateti'+'/crearTabla', {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(), // data can be `string` or {object}!
        headers:{
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(function(res) {
        /* data de devolucion */
        boardId= res.board;
        playerId= res.playerId;
        document.getElementById('idSala').innerHTML= "Id de sala: "+boardId;
    });
}

function unirseSala(){
  let id = {
    idSala: document.getElementById("salaID").value
  }
  document.getElementById("player").innerHTML= "Jugador: O"
  if (id.idSala != ''){
    fetch(url+'/game_tateti'+'/ingresar', {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(id), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(function(res) {
      /* data de devolucion */
      if (res.idPlayer2 != -1) {
        playerId = res.idPlayer2;
        boardId = document.getElementById("salaID").value;
        document.getElementById("tabla").style.display = "inline"; 
        document.getElementById("turno").style.display = "inline"; 
        actualizar()
      } else {
        document.getElementById("idSala").innerHTML = "La sala a la que desea acceder no existe o esta llena.";
      }
  });
  } else {
    document.getElementById("idSala").innerHTML = "No se ha ingresado un id";
  }
}

function jugada(x, y){
  let data = {coorX: x,
              coorY: y,
              turno: playerId,
              idTabla: boardId}
  actualizar()
  fetch(url+'/game_tateti'+'/jugada', {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers:{
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(function(res) {
      /* data de devolucion */
        if (res.pude == true) {
          let id= "btn"+x.toString()+y.toString()
          console.log(id)
          console.log(res.simbolo)
          document.getElementById(id).value = res.simbolo
          document.getElementById("mensaje").innerHTML=""
        }
        else
          document.getElementById("mensaje").innerHTML= "Jugada invalida"
    });
}


function actualizar() {
  let data = { 
    id : boardId
  }
  fetch(url+'/game_tateti'+'/actualizarGame', {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers:{
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
  .catch(error => console.error('Error:', error))
  .then(function(res) {   
    let board= res.tabla
    btn00.value= board[0][0]
    btn01.value= board[0][1]
    btn02.value= board[0][2]
    btn10.value= board[1][0]
    btn11.value= board[1][1]
    btn12.value= board[1][2]
    btn20.value= board[2][0]
    btn21.value= board[2][1]
    btn22.value= board[2][2]
    document.getElementById("turno").innerHTML= "Turno: "+res.turno
    if (res.hayGanador === true) {
      document.getElementById("mensaje").innerHTML= "Fin del juego. Ganador "+res.winner+"."
      document.getElementById("turno").style.display= "none"
      btn00.disabled= true
      btn01.disabled= true
      btn02.disabled= true
      btn10.disabled= true
      btn11.disabled= true
      btn12.disabled= true
      btn20.disabled= true
      btn21.disabled= true
      btn22.disabled= true
    } else if (res.tie == true) {
      document.getElementById("mensaje").innerHTML= "Fin del juego. Empate."
      document.getElementById("turno").style.display= "none"
      btn00.disabled= true
      btn01.disabled= true
      btn02.disabled= true
      btn10.disabled= true
      btn11.disabled= true
      btn12.disabled= true
      btn20.disabled= true
      btn21.disabled= true
      btn22.disabled= true
    }else {
      setTimeout(actualizar, 1000);
    }
  });
};