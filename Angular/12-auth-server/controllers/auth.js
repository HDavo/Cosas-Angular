//controladores de cada una de las rutas que hemos definido dentro del fichero que se encuentra dentro de routes

const { response } = require('express'); //ponemos esto para poder tener un tipado 
const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');


const crearUsuario = async (peticion, respuesta = response) =>{ //aqui se pone el tipado para esos dos parámetros

    const { email,  name, password } = peticion.body;
    // console.log(email,  name, password);

    try {
         //Verificar el email
        const usuario = await Usuario.findOne({ email });

        if(usuario){
            return respuesta.status(400).json({
                ok: false,
                mensaje: 'Correo ya registrado por otro usuario'
            });
        }

        //Crear el usuario con el modelo
        const dbUser = new Usuario(peticion.body);

        //Encriptar la contraseña
        const salt = bcrypt.genSaltSync();
        dbUser.password = bcrypt.hashSync( password, salt);


        //Generar el jwt


        //Crear usuario de bbdd
        await dbUser.save();

        //Generar respuesta
        return respuesta.status(201).json({
            ok: true,
            uid: dbUser.id,
            name,
        });
        
    } catch (error) {
        console.log(error);
        return respuesta.status(500).json({
            ok: false,
            mensaje: 'Contacte con el administrador',
        })
    }
};


const loginUsuario = ((peticion, respuesta = response) =>{

    const { email, password } = peticion.body;

    // console.log(email, password);

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