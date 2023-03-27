//-------------Perteneciente al vídeo 26: Extender clases -----------------------


//las interfaces no existen en js

//El uso de constructores en TS es distinto a otros lenguajes. TS permite que dentro del constructor hagamos la declaración de las variables con modificador de acceso, valores por defecto... sin necesidad de declarar las variables de manera previa.

class PersonaNormal {
    
    constructor(
        public nombre: string,
        public direccion: string
    ) {}
}

class Heroe extends PersonaNormal {

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
    ){
        super(nombreReal, 'Cleveland, USA');
    }
}

const pepeman = new Heroe('SuperPepe', 35, 'Manolo');
console.log(pepeman);
