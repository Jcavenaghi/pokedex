const express = require('express');
const app = express();
const PORT = 3000;


const server = app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
//
const routes_rpsls = require('./routes/rutas_rpsls'); //importamos las rutas de rpsls

const routes_tateti = require('./routes/rutas_tateti');//importamos las rutas de tateti



//

/* todo lo que es .use (para tener ordenado) son middleware y
   también pueden ser rutas */
app.use(express.static('public'));

app.use(express.json());

app.use('/game_rpsls', routes_rpsls) //es .use ya que es un modulo

app.use('/game_tateti', routes_tateti) 

app.set('view engine','pug');

/* todo lo que es .get (para tener ordenado)*/


app.get('/', (req, res) => {
    res.send('Hello World!');
});



