import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';

//----------Perteneciente a la sección 5: Módulos padres e hijos---------

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {
  @Input() personajes: Personaje[] = [];

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  //eventEmitter devuelve es un genérico
  @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();
  //En este caso se ha definido que debe emitir un tipo Personaje

  agregar() {
    if ( this.nuevo.nombre.trim().length === 0){
      return;
    }

    console.log(this.nuevo)
    this.onNuevoPersonaje.emit( this.nuevo );

    //para añadir nuevos personajes y limpiar después de añadir
    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }
}
