//controladores de cada una de las rutas que hemos definido dentro del fichero que se encuentra dentro de routes

const { response } = require('express'); //ponemos esto para poder tener un tipado 
const { validationResult } = require('express-validator');


const crearUsuario = ((peticion, respuesta = response) =>{ //aqui se pone el tipado para esos dos parámetros

    const errores = validationResult(peticion);

    if(!errores.isEmpty()){
        return respuesta.status(400).json({
            ok: false,
            errors: errores.mapped() 
        });
    }

    console.log(errores);

    const { email,  name, password } = peticion.body;
    console.log(email,  name, password);

    return respuesta.json({
        ok: true,
        mensaje: 'Crear usuario /new',
    })
});


const loginUsuario = ((peticion, respuesta = response) =>{

    const errores = validationResult(peticion);

    if(!errores.isEmpty()){
        return respuesta.status(400).json({
            ok: false,
            errors: errores.mapped() 
        });
    }

    console.log(errores);
    const { email, password } = peticion.body;

    console.log(email, password);

    return respuesta.json({
        ok: true,
        mensaje: 'Login de usuario /',
    })
});

const renovacionToken = ((peticion, respuesta = response) =>{

    return respuesta.json({
        ok: true,
        mensaje: 'Renew',
    })
});




module.exports= {
    creacion: crearUsuario,
    login: loginUsuario,
    renovacion: renovacionToken
}