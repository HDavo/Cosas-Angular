const express = require('express'); //importación de express
const cors = require('cors');
require ('dotenv').config();

// console.log(process.env);

//Creación del servidor/aplicación de express

const app = express(); 

//Directorio público
app.use(express.static('public'))

// CORS
app.use(cors());

//Lectura y parseo del body de las peticiones
app.use( express.json());


//Configuración de rutas (middleware de express)

app.use('/api/auth', require('./routes/auth')); //definición de la estructura de rutas que vamos a usar 



app.listen(process.env.PORT, () => {
    console.log(`Servidor puesto en el puerto ${ process.env.PORT}`)
}); //definición del puerto en donde queremos poner el servidor