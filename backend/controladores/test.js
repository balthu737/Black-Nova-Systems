const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Ruta raíz funcionando');
});

app.get('/user', (req, res) => {
  res.send('Ruta /user funcionando');
});

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
