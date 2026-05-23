const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser());

// Crear cookie
exports.create= (req, res) => {
  res.cookie('sessionId', req, {
    httpOnly: true,
    secure: true,   // solo en HTTPS
    maxAge: 3600000 // 1 hora
  });
  res.send('Cookie creada');
};

// Leer cookie
exports.read=(req, res) => {
  const sessionId = req.cookies.sessionId;
  res.send(`Tu sessionId es: ${sessionId}`);
};

// Borrar cookie
exports.delete=(req, res) => {
  res.clearCookie('sessionId');
  res.send('Cookie eliminada');
};

app.listen(3000, () => console.log('Servidor en http://localhost:3000'));
