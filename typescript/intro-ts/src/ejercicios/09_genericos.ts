// console.log('Hola Mundo!!!!');
/*
    ===== Código de TypeScript =====
*/
//-------------Perteneciente al vídeo 27: Genéricos -----------------------

//para especificar un genérico se hace usando <T>


//función sin usar genéricos
/* function identificador(argumento) {
    return argumento;
}
 */

//al usar un genérico establecemos que la variable que se debe recibir es del tipo de la variable enviada
//normalmente se usa <T> para indicar que se trata de un genérico
function identificador<T>(argumento: T){
    return argumento;
}

//El establecimiento del tipo puede hacerse de manera implícita, como en las siguientes líneas.
let soyString = identificador('Hola Mundo');
let soyNumero = identificador(100);
let soyArray = identificador([1,2,3,4,4,5,5,6,6,7])

//También puede hacerse de forma explícita de la siguiente manera: 
let soyExp = identificador<number>(100);