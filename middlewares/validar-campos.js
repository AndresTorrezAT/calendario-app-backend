const { response } = require("express");
const { validationResult } = require("express-validator");


const validarCampos = ( req, res = response, next ) => {

        // manejo de errores
        const errors = validationResult( req );
        if ( !errors.isEmpty() ) {
            return res.status(400).json({ // Este return es para que se evite el siguiente res
                ok: false,
                errors: errors.mapped()
            });
        }

        next();

}

module.exports = {
    validarCampos
}