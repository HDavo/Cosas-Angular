//-------------Perteneciente al vídeo 29: Encadenamiento opcional -----------------------

/* ? en clases e interfaces indica que se trata de algo opcional.
? si se usa sobre una propiedad, nos indica que va intentar evaluar esa propiedad
y en el caso de que no exista, es decir, sea undefined no nos va a devolver un error.
Simplemente lo trata como undefined y deja que se ejecute.
 */

interface Pasajero {
    nombre: string;
    hijos?: string[]
}

const pasajero1: Pasajero = {
    nombre: 'Pepe'
}

const pasajero2: Pasajero = {
    nombre: 'Manolo',
    hijos: ['Manolito', 'Pepe']
}


function imprimeHijos( pasajero: Pasajero ): void {
    // const numHijos = pasajero.hijos.length; //si intentamos usar esto así nos dará un error si lo llamamos sobre un elemento sin esa propiedad.

    const numHijos = pasajero.hijos?.length || 0;  
    /*
    Con la línea previa lo que se hace es que evalua 
    si existen los hijos devuelve el número de hijos y si no existen devuelve 0.
    Pero en todo momento intenta buscar esa propiedad dentro del elemento.
    */


    console.log( numHijos );
}

imprimeHijos(pasajero1);
imprimeHijos(pasajero2);