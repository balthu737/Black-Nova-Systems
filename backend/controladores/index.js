const express = require('express');
const app = express();


app.use(express.json());

app.get("/", (req, res) => {
  let b="hallo";
  res.send(b);
})

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
