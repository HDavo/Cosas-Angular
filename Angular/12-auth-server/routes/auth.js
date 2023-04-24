const {Router} = require('express');
const { creacion, login, renovacion } = require('../controllers/auth');
const { check } = require('express-validator');
const { validacion } = require('../middlewares/validar-campos');

const router = Router();

//creación de un nuevo usuario
//1- paths 2- middleware 3- controlador de la ruta
router.post( '/new', [ 
    check('name','El nombre de usuario no puede estar vacío').not().isEmpty(),
    check('email','Email obligatorio').isEmail(),
    check('password','Contraseña obligatoria').isLength({ min: 6}),
    validacion
], creacion ); 
//los middlewares son secuenciales

//Login de usuario
router.post( '/', [
    check('email','Email obligatorio').isEmail(),
    check('password','Contraseña obligatoria').isLength({ min: 6}),
    validacion
],login);

//Validar y renovar el token
router.get( '/renew', renovacion);





module.exports = router;