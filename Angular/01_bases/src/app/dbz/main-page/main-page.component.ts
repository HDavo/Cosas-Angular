import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})

export class MainPageComponent {

  //establecimiento de un personaje por defecto
  nuevo: Personaje = {
    nombre: "Bardock",
    poder: 100000
  }


  //ejemplo de inyección de dependencias
  constructor(){}
}


