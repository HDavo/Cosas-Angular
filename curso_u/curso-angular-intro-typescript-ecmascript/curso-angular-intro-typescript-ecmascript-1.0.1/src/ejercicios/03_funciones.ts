

console.log('Hola Mundo!!!!');

/*
    ===== Código de TypeScript =====
*/
//-------------Perteneciente al vídeo 17-----------------------

/* function sumar(a,b){ //de esta manera puede hacer concatenación, suma o usarse con objetos (en js normal)
    return a + b;
} */

//de esta manera se hace uso del tipado fuerte de ts para limitar la función a la suma. Mediante el tipo de dato recibido y el devuelto

//para hacerlo en una función normal
function sumar(a: number,b: number):number{ 
    return a + b;
    // return (a + b).toString(); //asi podríamos hacer que devuelva string, no compatible con el tipo de dato definido para la devolución
}

//cómo debe hacerse en una función flecha
const sumarFlecha = (a: number,b: number): number => {
    return a + b;
}

//en el caso de que queramos usar valores opcionales (identificados por ?) o por defecto, en ts deben ponerse siempre en último lugar. Entre estos dos tipos de argumentos debe ponerse antes siempre el que contenga un valor por defecto.

function multiplicar(numero: number, base: number, otronumero?: number,): number{
    return numero * base;
}

// const resultado = sumar('Pepe'); //en este caso ts intenta que funcione como lo haría en js aunque falte un parámetro, el parámetro que falta se pondría como undefined

const resultado = sumar(10,20)

const resul = multiplicar(12,12);

console.log(resultado)
console.log(resul)


//-------------Perteneciente al vídeo 18-----------------------

interface PersonajeK {
    nombre: string;
    pv: number;
    // mostrarPv: (a: number, b: string, c: boolean) => void; // de esta manera definimos que se trata una función y los tipos de datos que va a recibir
    mostrarPv: () => void;
}

//sin la interface los datos recibidos (sin ponerle ninguna restricción) son de tipo any
function curar( personaje: PersonajeK, curarX: number ): void { //para el caso de que no queremos que haya un retorno debemos poner siempre void
    personaje.pv += curarX;

    console.log(personaje);
}

const nuevoPersonaje: PersonajeK = {
    nombre: 'Pepe',
    pv: 50,
    mostrarPv(){
        console.log('Puntos de vida: ', this.pv)
    }
}

curar( nuevoPersonaje, 20);

nuevoPersonaje.mostrarPv();