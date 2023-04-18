import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PaisesService } from '../../services/paises.service';
import { PaisSm } from '../../interfaces/paises.interface';

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
  });

  // llenar selectores
  regiones: string [] = []; 
  paises: PaisSm[] = [];



  constructor(private constructorFormulario: FormBuilder,
    private servicioPaises: PaisesService) {}

  ngOnInit():void{
    this.regiones = this.servicioPaises.regiones;


    //cuando cambie la región.
    //Cogemos el valor de la option desde el HTML, usando la propidad region de nuestro objeto de formulario
    this.miFormulario.get('region')?.valueChanges
      .subscribe( region => {
        console.log(region);

        this.servicioPaises.getPaisesPorRegion(region)
          .subscribe( paises => {
            this.paises = paises;
            console.log(paises);
          })
      })
  }

  guardar(){
    console.log(this.miFormulario.value);
  }
}
