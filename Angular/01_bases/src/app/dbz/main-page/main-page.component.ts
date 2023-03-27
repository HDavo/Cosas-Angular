import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 12000
    }

  ];

  nuevo: Personaje = {
    nombre: "Bardock",
    poder: 100000
  }

  agregarNuevoPersonaje( recibido: Personaje ) {
    /* el evento que recibe esta función será de tipo personaje ya que lo hemos definido así dentro de la clase hija encargada de la tarea.
      @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();
      this.onNuevoPersonaje.emit( this.nuevo );
    */
    //  debugger;
     this.personajes.push( recibido );

    console.log("Agregado con éxito usando un eventEmitter desde la clase hija ")
  }
}


