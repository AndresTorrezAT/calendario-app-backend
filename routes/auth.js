/*
    Rutas de Usuarios / Auth
    host + /api/auth
*/

const { Router } = require('express');
const router = Router(); //Hay que ejecutar la funcion

const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');

router.post('/new', crearUsuario );

router.post('/', loginUsuario );

router.get('/renew', revalidarToken );

module.exports = router;