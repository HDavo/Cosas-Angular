

console.log('Hola Mundo!!!!');

/*
    ===== Código de TypeScript =====
*/
//Otros tipos de TS

// array
// let habilidades = ['Patada','Golpe bajo', 'Disparo', 200]; //el tipo de variable vendrá inferido según el contenido puesto en la creación (cuando no se especifique de manera explicita)

let habilidades: string [] = ['Patada','Golpe bajo', 'Disparo'];


//objetos


//para poner restricciones de tipos se deben usar interfaces

interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;
}

//sin restricción de tipos
const personaje = {
    nombre: 'Pepe',
    hp: 100,
    habilidades: ['Patada','Golpe bajo', 'Disparo']
}


console.table(personaje);