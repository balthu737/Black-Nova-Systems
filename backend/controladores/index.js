const express = require('express');
const app = express();
const homeRoutes = require("./src/routes/home");

app.use("/", homeRoutes);


app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
