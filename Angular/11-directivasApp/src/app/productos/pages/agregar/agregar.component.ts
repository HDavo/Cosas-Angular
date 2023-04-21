import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent {

  miFormulario: FormGroup = this.construirFormulario.group({
    nombre: ['', Validators.required]
  });

  constructor(private construirFormulario: FormBuilder){}

  hayError(campo: string): boolean{
    return this.miFormulario.get(campo)?.invalid || false ;
  }

}
