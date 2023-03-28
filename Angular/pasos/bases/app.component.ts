/* Ejemplo básico de como se estructuran los componentes (vistas).
1- importar component
2- establecer rutas
3- establecer templates a usar
4- Definir la lógica a mostrar por los templates. Mediante la clase pertinente que siempre debe ir acompañada de un export para poder ser usada desde el template */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //esto indica que se trata de la aplicación principal
  templateUrl: './app.component.html', //indica la ruta del template para este componente
  // template:  , // con esto se puede establecer contenido desde aquí pero se usa más templateURL

  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo: string = 'Contador App'; //esto se puede llamar desde el HTML y se puede definir también el tipo de dato y el tipo de acceso
  numero: number = 10;
  base: number = 5;

  /* sumar() {
    this.numero += 1;
  }

  restar() {
    this.numero -=1;
  } */

  acumular( valor : number) {
    this.numero += valor;
  }
}
