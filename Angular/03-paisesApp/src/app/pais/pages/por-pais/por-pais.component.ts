import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';

import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
    li {
      cursor: pointer;
    }
    `
  ]
})
export class PorPaisComponent {
  
  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  paisesSugeridos: Country[] = [];
  mostrarSugerencias = false;

  constructor(private paisService: PaisService){}

  buscar(termino: string){
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = false;
    // console.log(this.termino);

    this.paisService.buscarPais(this.termino) //subscribe tiene dos argumentos (next y error)
      .subscribe( (paises) => {
        console.log(paises);
        this.paises = paises;
      }, (fallo) => {
        this.hayError = true;
        this.paises = [];
      }
      );
  }

  //importante para saber hacer una caja de sugerencias
  sugerencias(termino: string){
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;

    this.paisService.buscarPais( termino)
      .subscribe(
        paises => this.paisesSugeridos = paises.splice(0,5),
        (fallo) => this.paisesSugeridos = []
        );

  }

  buscarSugerido( termino: string){
    this.buscar( termino );
    
  }
}
