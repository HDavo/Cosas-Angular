

console.log('Hola Mundo!!!!');

/*
    ===== Código de TypeScript =====
*/

let nombre: string = 'Pepe'; //asi se especifica el tipo de variable para ts
// al ser ts no puede cambiarse el tipo de dato de la variable
// let hp: number = 95;
//si se necesitan varios tipos de datos puede ponerse de la siguiente manera:
let hp: number | string = 95;
let estaVivo: boolean = false;

hp = "100%";

console.log(nombre, hp);


//el tipado fuerte de ts no puede verse dentro de bundle.js aunque se haya establecido así