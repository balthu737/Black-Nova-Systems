const express = require('express');
const app = express();
const homeRoutes = require("./src/routes/home");
const userRoutes = require("./src/routes/user");
const appsRoutes = require("./src/routes/apps");

  app.get('/prueba', (req, res) => {
  res.send('Ruta directa funcionando');
});
app.get("/", homeRoutes);
app.get("/user", userRoutes);
app.get("/app", appsRoutes);

app.listen(4000,() => {
  console.log("Servidor corriendo en http://localhost:3000");
});

