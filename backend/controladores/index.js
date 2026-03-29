const express = require('express');
const app = express();
const homeRoutes = require("./src/routes/home");
const userRoutes = require("./src/routes/user");

app.use("/", homeRoutes);
app.use("/", userRoutes);


app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
