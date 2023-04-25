const mongoose = require("mongoose");


const conexionDb = async() => {

    try {   
        
        mongoose.connect( process.env.BD_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }); //esto es una promesa

        console.log('BBDD lista');

    } catch (error) {
        console.log(error);
        throw new Error('Error iniciando la bbdd');
    }
}


module.exports = {
    conexionDb
}