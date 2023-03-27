// console.log('Hola Mundo!!!!');
/*
    ===== Código de TypeScript =====
*/

//-------------Perteneciente al vídeo 20: Desestructuración de objetos -----------------------

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles
}

interface Detalles {
    autor: string;
    annio: number;
}

const reproductor: Reproductor = {
    volumen: 75,
    segundo: 35,
    cancion: "Pepes in Paris",
    detalles: {
        autor: 'Pepe',
        annio: 2013
    }
}


//para extraer las propiedades sin desestructuración de objetos
/* console.log('El volumen actual de: ', reproductor.volumen)
console.log('El segundo actual de: ' ,reproductor.segundo)
console.log('La canción actual de: ', reproductor.cancion)
console.log('El autor es: ', reproductor.detalles.autor) */


// uso de la desestructuración
//forma recomendada de hacerlo
const { volumen: vol, segundo, cancion, detalles } = reproductor; // para las de primer nivel, en el caso de que tengamos otros objetos dentro, en este caso solo pasamos el tipo 
const {autor} = detalles; // haciendo uso del objeto de primer nivel se extrae la propiedad

//otra forma de hacerlo en una sola línea:
// const { volumen, segundo, cancion, detalles: {autor}} = reproductor;

//si hay una variable llamada igual a una de las propiedades o queremos usar otro nombre para referirnos a esa propiedad
// const autor = 'Manolo';

/* //Para solucionarlo con el formato de varias líneas
const { volumen: vol, segundo, cancion, detalles } = reproductor;
// para hacer referencia ahora deberemos usar vol en lugar de volumen

// Para solucionarlo en una sola línea
const { volumen, segundo, cancion, detalles: {autor: autorDetalle}} = reproductor; */


console.log('El volumen actual de: ', vol)
console.log('El segundo actual de: ' ,segundo)
console.log('La canción actual de: ', cancion)
console.log('El autor es: ', autor)






