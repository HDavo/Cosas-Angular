import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interfaces";

@Injectable()
export class DbzService {
    

    private _personajes: Personaje[] = [
        {
            nombre: 'Goku',
            poder: 15000
        },
        {
            nombre: 'Vegeta',
            poder: 12000
        }
    
    ];

    get personajes(): Personaje[]{
        return [...this._personajes]; //los getters deben hacerse de esta manera, ya que el envío se hace por referencia
    }

    constructor() {
        console.log('Servicio inicializado');
    }

    agregarPersonaje( recibido: Personaje) {
        this._personajes.push( recibido );
    }
}

      /* propiedades
      setters y getters
      constructor
      métodos */

      /*agregarNuevoPersonaje( recibido: Personaje ) {
        /* el evento que recibe esta función será de tipo personaje ya que lo hemos definido así dentro de la clase hija encargada de la tarea.
          @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();
          this.onNuevoPersonaje.emit( this.nuevo );
        
        //  debugger;
         this.personajes.push( recibido );
    
        console.log("Agregado con éxito usando un eventEmitter desde la clase hija ")
      } */


