const express = require('express');
const app = express();
const homeRoutes = require("./src/routes/home");
const userRoutes = require("./src/routes/user");
const appsRoutes = require("./src/routes/apps");

app.use("/", homeRoutes);
app.use("/", userRoutes);
app.use("/", appsRoutes);

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000'); /* cambiar el puerto mas adelante ya que no va a ser localhost */
});
