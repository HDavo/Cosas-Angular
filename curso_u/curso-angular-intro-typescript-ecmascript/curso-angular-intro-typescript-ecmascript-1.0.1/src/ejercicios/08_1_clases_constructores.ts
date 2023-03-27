// console.log('Hola Mundo!!!!');
/*
    ===== Código de TypeScript =====
*/
//-------------Perteneciente al vídeo 24: Clases básicas -----------------------
//-------------Perteneciente al vídeo 25: Constructores -----------------------

//las interfaces no existen en js

//El uso de constructores en TS es distinto a otros lenguajes. TS permite que dentro del constructor hagamos la declaración de las variables con modificador de acceso, valores por defecto... sin necesidad de declarar las variables de manera previa.

class Heroes {

    /*
     //En otros lenguajes se haría de la siguiente manera: 
     alterEgo: string;
     edad: number;
     nombreReal: string; 
 
 
     constructor(alterEgo, edad, nombreReal) {
         this.alterEgo = alterEgo;
         this.edad = edad;
         this.nombreReal = nombreReal;
     }
     */
 
     //En TS la forma de hacerlo es la siguiente:
     constructor(
         public alterEgo: string,
         public edad: number,
         public nombreReal: string
     ){}
 }
 
 // El comportamiento de los modificadores de acceso es distinto en JS y en TS
 // private
 // public 
 // static 
 
 
 const pepe =new Heroes("Super Pepe", 34, "Manolo");
 
 console.log(pepe);