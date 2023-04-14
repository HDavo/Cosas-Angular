import { Component } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent {
  termino:string = '';
  heroes: Heroe[] = [];

  heroeSeleccionado: Heroe | undefined;

  constructor( private servicioHeroes: HeroesService){}

  buscando(){
    this.servicioHeroes.getSugerencias( this.termino.trim())
      .subscribe( heroes => this.heroes = heroes);
  }

  opcionSeleccionada(event: MatAutocompleteSelectedEvent){

    if(!event.option.value){
      this.heroeSeleccionado = undefined;
      // console.log('No hay valor');
      return;
    }

    const heroeOpcion: Heroe = event.option.value;
    console.log(event.option.value);

    this.termino = heroeOpcion.superhero;

    this.servicioHeroes.getHeroePorId( heroeOpcion.id!) //con esto le estamos asegurando que siempre tendrá un valor
      .subscribe( heroeOpcion => this.heroeSeleccionado = heroeOpcion );
  }
}
