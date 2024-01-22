const express = require('express');
require('dotenv').config();

// console.log( process.env );

// Crear el servidor de express
const app = express();

// Direcctorio publico
app.use( express.static('public') );

// Rutas

// TODO: auth // crear, login, renew
app.use('/api/auth', require('./routes/auth') );
// TODO: CRUD: Eventos

// Escuchar peticiones
app.listen( process.env.PORT , () => {
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
});