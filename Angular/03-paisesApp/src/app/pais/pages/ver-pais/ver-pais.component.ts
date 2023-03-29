import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';


import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit{

  pais!: Country;

  constructor(
    private suscripcion: ActivatedRoute,
    private paisService: PaisService
    ) {}

  ngOnInit(): void {
    //sin desestructuración
    /* this.suscripcion.params
      .subscribe( params => {
        console.log(params);
      }) */


    //con desestructuración sin rxjs
   /*  this.suscripcion.params
      .subscribe( ({ id }) => {
        console.log(id);

        this.paisService.getPaisPorCodigo(id)
          .subscribe( pais => {
            console.log(pais);
          })
      }); */

      //con rxjs 
      this.suscripcion.params 
        .pipe(
          switchMap(({id}) => this.paisService.getPaisPorCodigo(id)), //switchmap recibe y devuelve un observable, evitando que anidemos subscribes
          tap(console.log) //recibe la respuesta de un observable (en este caso del switchmap)
        )
        .subscribe( pais => {
          this.pais=pais[0];
        });
        // console.log(pais);
  }
  
}
