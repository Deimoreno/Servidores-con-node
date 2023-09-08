const http = require("http");
const chalk = require("chalk");
const host = "localhost";
const port = 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');

   const response = {
    nombre: 'TuNombre',
    mensaje: 'Hola, este es un servidor web básico en Node.js'
  };

    res.end(JSON.stringify(response));
});