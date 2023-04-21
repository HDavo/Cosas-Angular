const express = require('express'); //importación de express


//Creación del servidor/aplicación de express

const app = express(); 


// console.log('Hola, probando nodemon');
// console.log('Hola, probando run ');

app.get('/', (peticion, respuesta) => { //esto admite dos parámetros, que son la peticion y la respuesta que hacemos a ella
    // console.log('Petición en /');

    //podemos indicar el error que queremos devolver en respuesta a la petición
   /*  respuesta.status(404).json({
        ok: true,
        mensaje: 'Pepe',
        uid: 1234
    }) */
     respuesta.json({
        ok: true,
        mensaje: 'Pepe',
        uid: 1234
    })
});


app.listen(4000, () => {
    console.log(`Servidor puesto en el puerto ${ 4000 }`)
}); //definición del puerto en donde queremos poner el servidor