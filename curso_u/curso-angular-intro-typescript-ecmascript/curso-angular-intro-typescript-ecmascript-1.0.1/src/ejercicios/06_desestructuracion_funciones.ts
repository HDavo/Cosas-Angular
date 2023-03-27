// console.log('Hola Mundo!!!!');
/*
    ===== Código de TypeScript =====
*/

//-------------Perteneciente al vídeo 22: Desestructuración de funciones -----------------------
//export añadido para las importaciones del video 23, también el comentario de los console.log

export interface Producto {
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc: 'Asus Zenphone 12',
    precio: 800
}

const tablet: Producto = {
    desc: 'Ipad Mini',
    precio: 650
}


//Función sin desestructuración
/* function calculaIVA(productos: Producto[]): number{
    let total = 0;
 
    productos.forEach( (prod) => { // (prod: Producto) aqui dentro se puede o no especificar el tipo, al no hacerlo coge el establecido
        total+=prod.precio;
    })

    return total * 0.15;
} 

const resultado = calculaIVA(articulos);

console.log('IVA: ', resultado)

*/

//Función CON desestructuración

export function calculaIVA(productos: Producto[]): [number, number]{
    let total = 0;
 
    productos.forEach( ({precio}) => { 
        total+=precio;
    })

    return [total, total * 0.15];
}


//comentado para evitar que salga al importarse en el fichero de ejemplo de importaciones
/* const articulos = [ telefono, tablet];

const [total, res ] = calculaIVA (articulos) //desestructuración del retorno de la función en dos variables, después de mandarle un array de tipo productos. De esta forma, podemos imprimir o utilizar de forma independiente y sencilla los resultados devueltos

console.log('Total: ', total);
console.log('IVA: ', res); */