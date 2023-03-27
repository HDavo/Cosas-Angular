// console.log('Hola Mundo!!!!');
/*
    ===== Código de TypeScript =====
*/

//-------------Perteneciente al vídeo 23: Importaciones y exportaciones -----------------------


//al importar se ejecuta el contenido del fichero original, por eso se han comentado en el fichero original los console.log

import { Producto, calculaIVA } from "./06_desestructuracion_funciones"; // si es del mismo fichero todo en la misma línea
// import { calculaIva} from "./ejercicios/06_desestructuracion_funciones";

const carroCompras: Producto[] = [
    {
        desc: 'Telefono 1',
        precio: 100
    },
    {
        desc: 'Telefono 2',
        precio: 250
    }
];


const [total, iva] = calculaIVA(carroCompras);

console.log('Total', total);
console.log('IVA', iva);