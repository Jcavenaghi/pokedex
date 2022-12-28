const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Grupo 11 dashboard');
});

app.listen(PORT, () => console.log(`Server grupo 11: http://localhost:${PORT}`));