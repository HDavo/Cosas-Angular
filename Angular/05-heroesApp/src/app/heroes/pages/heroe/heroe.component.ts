import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe } from '../../interfaces/heroes.interface';
import { switchMap } from 'rxjs/operators';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
    `
      img{
        width: 100%;
        border-radius: 5px;
      }
    `
  ]
})

export class HeroeComponent implements OnInit{
  
  heroe!: Heroe;

  constructor( private activado: ActivatedRoute,
               private heroesService: HeroesService,
               private ruta: Router) {}

  ngOnInit(): void {
      this.activado.params
      .pipe(
        switchMap( ({id}) => this.heroesService.getHeroePorId(id) )
      )
      .subscribe( heroe => this.heroe = heroe);
  }

  regresar(){
    this.ruta.navigate(['/heroes/listado']);
  }
}
