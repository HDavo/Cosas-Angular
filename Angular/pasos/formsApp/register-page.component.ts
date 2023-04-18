//Estado del fichero antes de poner las validaciones dentro de un servicio

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as validacionesPersonalizadas from 'src/app/shared/validaciones/validaciones.funciones';

@Component({
  templateUrl: './register-page.component.html',
  styles: [
  ]
})
export class RegisterPageComponent {

  public miFormulario: FormGroup = this.construirFormulario.group({
    nombre: ['', [Validators.required, Validators.pattern(validacionesPersonalizadas.firstNameAndLastnamePattern)]],
    correo: ['', [Validators.required, Validators.pattern(validacionesPersonalizadas.emailPattern) ]],
    usuario: ['', [Validators.required, validacionesPersonalizadas.noAceptado ]], //solo se pasa la referencia, no la función
    passwd: ['', [Validators.required, Validators.minLength(6)]],
    passwd2: ['', Validators.required],
  })


  constructor ( private construirFormulario: FormBuilder) {}

  campoValido(campo: string): boolean | null {
    //TODO: todo este tipo de validaciones debe hacerse desde un servicio
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched;
  }

  envio(){
    this.miFormulario.markAllAsTouched();
  }
}