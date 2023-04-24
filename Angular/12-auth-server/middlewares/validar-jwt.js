const { response } = require("express");
const jwt = require('jsonwebtoken');

const validarJWT = (peticion, respuesta = response, continuacion) => {

    const token = peticion.header('x-token');

    if(!token){
        return respuesta.status(401).json({
           ok: false,
           mensaje: 'Error en el token'
        });
    }

    try {

        const { uid, name} = jwt.verify(token, process.env.SECRET_JWT_SEED);
        // console.log(uid, name);
        peticion.uid = uid;
        peticion.name = name;
        
    } catch (error) {
        return respuesta.status(401).json({
            ok: false,
            mensaje: 'Token no válido'
        });
    }


    continuacion();
}









module.exports = {
    validarJWT
}