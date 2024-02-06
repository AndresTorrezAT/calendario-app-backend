const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { dbConnection } = require('./database/config');

// console.log( process.env );

// Crear el servidor de express
const app = express();

// Base de datos
dbConnection();

// CORS
app.use(cors());

// Direcctorio publico: Ruta Publica
app.use( express.static('public') );

// Lectura y parseo del body
app.use( express.json() ); // midleware para parsear el body

// Rutas
// TODO: auth 
app.use('/api/auth', require('./routes/auth') );
// TODO: Eventos
app.use('/api/events', require('./routes/events') );

// Rutas que no maneja Node y si el router de React
app.get('*', ( req, res) => {
    res.sendFile( __dirname + '/public/index.html'); // este maneja las rutas no /api
})

// Escuchar peticiones
app.listen( process.env.PORT , () => {
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
});