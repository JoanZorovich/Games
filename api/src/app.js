
//AQUI DEFINO - CREO EL SERVIDOR

const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');// validar si lo debo utilizar




const routes = require('./routes/index.js');

require('./db.js');


const server = express(); // AQUI estoy definiendo el servidor




server.name = 'API';


//configuración de Middlewares
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' })); //La aplicación cliente envia un formato JSON, el servirdor lo pueda entender
server.use(cookieParser());
server.use(cors());/// validar si lo debo utilizar
server.use(morgan('dev'));//mostrar por consola


server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // Para que acepte cualquier request del local host 3000//update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');//pida las credenciales para entraar
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');//Dejo que entren los que sean del origen que marque
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE'); //PErmito los metodos GET....
  next();
});

server.use('/', routes);  

// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
