// console.log('Hola Mundo!!!!');
/*
    ===== Código de TypeScript =====
*/

//Diferentes formas de usar interfaces sobre un objeto

//para definir interfaces en donde puedan existir diferentes objetos dentro de la interfaz es recomendable hacer uso de diferentes interfaces para las variables que sean de tipo objeto. La siguiente solución sería válida pero no sería óptima:
/* interface SuperHeroe {
    nombre: string;
    edad: number;
    direccion: {
        calle: string;
        pais: string;
        ciudad: string;
    },
    mostrarDireccion: () => string;
} */

// La solución óptima sería la siguiente:
interface SuperHeroe {
    nombre: string;
    edad: number;
    direccion: Direccion,
    mostrarDireccion: () => string;
}

interface Direccion {
    calle: string;
    pais: string;
    ciudad: string;
}

//En el caso de tener que usar otros objetos dentro de interfaces se haría estructurandolo de la misma manera



const superH: SuperHeroe = {
    nombre: 'Pepe',
    edad: 30,
    direccion: {
        calle: 'Calle Falsa, 123',
        pais: 'USA',
        ciudad: 'Cleveland'
    },
    mostrarDireccion() {
        return this.nombre + ', ' + this.direccion.ciudad + ', ' + this.direccion.pais;
    }
}

const direccion = superH.mostrarDireccion()
console.log(direccion)