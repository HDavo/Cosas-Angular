// console.log('Hola Mundo!!!!');
/*
    ===== Código de TypeScript =====
*/

//-------------Perteneciente al vídeo 21: Desestructuración de arrays -----------------------

const conde: string [] = ['Lord Wilmore', "Abad Bussoni", 'Simbad el Marino']; //array

//desestructacion de arrays: A diferencia que en los objetos, se basa en la posición.

/* 
//acceso a los elementos del array sin desestructuración
console.log('Personaje 1: ', conde[0]);
console.log('Personaje 2: ', conde[1]);
console.log('Personaje 3: ', conde[2]); */



//acceso a los elementos del array CON desestructuración
const [p1, p2, p3] = conde; //en el caso de que necesitemos todos los elementos

console.log('Personaje 1: ', p1);
console.log('Personaje 2: ', p2);
console.log('Personaje 3: ', p3);

//si queremos acceder a uno de los elementos, al basarse en la posición, se deben usar comas (,)
const [, ,cosa3] = conde;

// console.log('Personaje 1: ', p1);
// console.log('Personaje 2: ', p2);
console.log('Personaje 3 (desestructuración): ', p3);