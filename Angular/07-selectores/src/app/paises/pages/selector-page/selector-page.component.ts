import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { switchMap, tap } from 'rxjs';
import { PaisesService } from '../../services/paises.service';
import { PaisCodigo, PaisSm } from '../../interfaces/paises.interface';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styles: [
  ]
})
export class SelectorPageComponent implements OnInit{
 
  miFormulario: FormGroup = this.constructorFormulario.group({
    region: ['', Validators.required],
    pais: ['', Validators.required],
    frontera: ['', Validators.required],
  });

  // llenar selectores
  regiones: string [] = []; 
  paises: PaisSm[] = [];
  // fronteras: string[] = [];
  fronteras: PaisSm[] = [];

  //para mostrar o no elementos de IU
  cargando: boolean = false;



  constructor(private constructorFormulario: FormBuilder,
    private servicioPaises: PaisesService) {}

  ngOnInit():void{
    this.regiones = this.servicioPaises.regiones;


    //cuando cambie la región.
    //Cogemos el valor de la option desde el HTML, usando la propidad region de nuestro objeto de formulario
    this.miFormulario.get('region')?.valueChanges
      .pipe(
        tap( ( _ ) => { // ( _ ) forma de indicar, por convenio, que no nos interesa lo que recibe
          this.miFormulario.get('pais')?.reset(''); 
          //esto es lo que hace que al cambiar de region, se limpie el apartado de pais de nuestro objeto de formulario
          this.cargando = true;
        }),
        switchMap(region => this.servicioPaises.getPaisesPorRegion(region))
      )
      .subscribe( paises => {
        this.paises = paises;
        console.log(paises);
        this.cargando = false;
      })

      //sacar el código del pais cuando cambia y modificación del tercer selector (sin mostrar el nombre del pais en lugar del cca3)
      /* this.miFormulario.get('pais')?.valueChanges
        .pipe(
          tap( ( _ ) => {
            this.fronteras = [];
            this.miFormulario.get('frontera')?.reset('');
            this.cargando = true;
          }),
          switchMap( codigo => this.servicioPaises.getPaisPorCodigo(codigo))
        ).subscribe(pais => {
          console.log("pais", pais);
          if(pais.length > 0){
            this.fronteras = pais[0]?.borders;
            console.log(this.fronteras);
            this.cargando = false;
          }
        }) */

      this.miFormulario.get('pais')?.valueChanges
        .pipe(
          tap( ( _ ) => {
            this.fronteras = [];
            this.miFormulario.get('frontera')?.reset('');
            this.cargando = true;
          }),
          switchMap( codigo => this.servicioPaises.getPaisPorCodigo(codigo)),
          switchMap( pais => this.servicioPaises.getPaisesPorCodigos( pais[0]?.borders!)) //se usa para poder poner el nombre en lugar del cca3
        ).subscribe(paises => {
          console.log("pais", paises);
          if(paises.length > 0){
            this.fronteras = paises;
            // console.log(this.fronteras);
            this.cargando = false;
          }
        })



        /* .subscribe( codigo => {
          console.log(codigo);
        }) */
   
  }

  guardar(){
    console.log(this.miFormulario.value);
  }
}


 //version sin switchmap del selector de país cambiando al cambiar de región (iría dentro del OnInit)
   /*  this.miFormulario.get('region')?.valueChanges
      .subscribe( region => {
        console.log(region);

        this.servicioPaises.getPaisesPorRegion(region)
          .subscribe( paises => {
            this.paises = paises;
            console.log(paises);
          })
      }) */