//-------------Perteneciente al vídeo 28: Decoradores de clases -----------------------

//para definir un decorador @miDecorador

function classDecorator<T extends { new (...args: any []): {} } > (
    constructor: T
) {
    return class extends constructor {
        newProperty = "new property";
        hello = "override";
    };
}

@classDecorator 
/* al usar el decorador, por defecto nos da un error. 
Por ello es necesario descomentar una línea del fichero tsconfig.json.
Dentro de este fichero debemos descomentar la siguiente línea:  "experimentalDecorators": true, 
Se encuentra dentro del apartado  'Experimental Options ' del fichero.
Para que los cambios hechos en ese fichero tengan efecto es necesario reiniciar el servicio.
*/

class MiSuperClase {
    public miPropiedad: string = 'Calle Falsa, 123';

    imprimir() {
        console.log('Hola Mundo');
    }
}


console.log(MiSuperClase); //para ver como se han incorporado distintos elementos con el decorador

const miClase = new MiSuperClase();

console.log(miClase.miPropiedad);

