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
    nombre: '',
    poder: 0
  }
  /*
    //con esto evitariamos que se recargue la página cada vez que se envía el formulario (de forma manual)
    agregar( event: any) { 
    event.preventDefault(); 
    console.log(event);
  } */

  //angular 
  agregar() {
    if ( this.nuevo.nombre.trim().length === 0){
      return;
    }

    console.log(this.nuevo)

    //para añadir nuevos personajes y limpiar después de añadir
    this.personajes.push( this.nuevo );
    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }

 /* 
    //Esto deja de ser necesario al incorporar el cambio de las propiedades a través de los inputs (two-way data binding) 
    cambiarNombre( event: any) {
    console.log(event.target.value)
  } */


}
