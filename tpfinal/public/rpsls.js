/**/
const url = `http://localhost:3000`

//ID del player
var idPlayer;
//ID sala
var idSala;
/*Estado indica si se escogio una
  Opcion o no */
var estado = false;

/* Se habilita cuando un usuario clickea
   en el boton de crear una sala. Crea una
   sala(con sus respectivos datos) y devuelve
   el ID de la misma para quien desee unirse
   lo haga mediante el mismo */

function crearSala() {
  document.getElementById("container-opc").style.display = "inline"; //mostramos las opciones(piedra, papel...)
  fetch(url+'/game_rpsls/crearBoard', {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(function(res) {
      /* data de devolucion */
      idPlayer = res.idP1;
      idSala = res.idTable;
      document.getElementById("idSala").innerHTML = "!Sala creada! <strong>ID: </strong>"+ res.idTable;
  });
}

/* Esta función nos une a la sala
   que ingresamos en el html, si es
   que esta existe. Nos devolverá el
   ID del jugador 2, el cual nos 
   servira para luego asignar a este
   la opcion que eligio, y si gano/perdio
   u empato. */

function unirseSala() {
    let id = { 
            idS: document.getElementById("salaID").value
            } 
    if (id.idS != '') {
      fetch(url+'/game_rpsls/joinBoard', {
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
          idPlayer = res.idPlayer2;
          idSala = document.getElementById("salaID").value;
          document.getElementById("container-opc").style.display = "inline"; //mostramos las opciones(piedra, papel...)
        } else {
          document.getElementById("idSala").innerHTML = "La sala a la que desea acceder no existe o esta llena.";
        }

        
      });
    } else {
      document.getElementById("idSala").innerHTML = "No se ha ingreasado un ID";
    }

}

function opcion(opc) {
  if (estado === false) {
      let dataJugador = {opcion : opc,
        idP : idPlayer,
        idS: idSala
        };

      fetch(url+'/game_rpsls/choose', {
          method: 'POST', // or 'PUT'
          body: JSON.stringify(dataJugador), // data can be `string` or {object}!
          headers:{
            'Content-Type': 'application/json'
          }
        }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(function(res) {
          /* data de devolucion */
          estado = res.estado;
        });
  }
}
/* La funcion actualizar es llamada constantemente
   para ver el estado del juego, mediante esta se 
   determina si el juego termino o sigue en marcha.
   Caso de terminar, invocará a la funcion que info-
   rma el ganador y luego la que elimina el tablero
   del JSON */

setTimeout(function actualizar() {
  let data = { 
    id : idSala
  }
  fetch(url+'/game_rpsls/actualizarGame', {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers:{
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
  .catch(error => console.error('Error:', error))
  .then(function(res) {   
    if (res.fin === true) {
      informarGanador();
    } else {
      setTimeout(actualizar, 1000);
    }
  });
});

/* Informar ganador, Mediante la id de la sala,
   determina quien gano y quien perdio o si fue
   empate. Devuelve el resultado correspondiente */

function informarGanador() {
  let data = { 
    id : idSala
  }
  fetch(url+'/game_rpsls/result', {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers:{
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
  .catch(error => console.error('Error:', error))
  .then(function(res) {
    if (res.res_ganador === 0) {
      document.getElementById("res-text").innerHTML = "EMPATE";
    } else {
      if (res.res_ganador === idPlayer) {
        document.getElementById("res-text").innerHTML = "GANAS";
      } else {
        document.getElementById("res-text").innerHTML = "PIERDES";
      }
    }
    document.getElementById("res-desc").innerHTML = res.res_descr;
  });


}