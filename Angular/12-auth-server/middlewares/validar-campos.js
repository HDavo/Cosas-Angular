const { response } = require('express');
const { validationResult } = require('express-validator');

const validarCampos = (peticion, respuesta = response, continuacion) => {
    const errores = validationResult(peticion);

    if(!errores.isEmpty()){
        return respuesta.status(400).json({
            ok: false,
            errors: errores.mapped() 
        });
    }
    console.log(errores);

    continuacion(); //función necesaria para que después de hacerse las validaciones se continue, sin ella no resuelve peticiones correctas (debe estar siempre en middlewares personalizados)
}




module.exports = {
    validacion: validarCampos
}