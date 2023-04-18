import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicioValidacion } from 'src/app/shared/service/validaciones.service';
import { ValidacionCorreo } from 'src/app/shared/validaciones/email-validator.service';
// import * as validacionesPersonalizadas from 'src/app/shared/validaciones/validaciones.funciones';

@Component({
  templateUrl: './register-page.component.html',
  styles: [
  ]
})
export class RegisterPageComponent {

  public miFormulario: FormGroup = this.construirFormulario.group({
    //las validaciones dentro del primer grupo de llaves son individuales, es decir, para cada campo
    nombre: ['', [Validators.required, Validators.pattern(this.validaciones.firstNameAndLastnamePattern)]],
    // correo: ['', [Validators.required, Validators.pattern(this.validaciones.emailPattern) ],[new ValidacionCorreo]],
    correo: ['', [Validators.required, Validators.pattern(this.validaciones.emailPattern) ],[this.validarCorreo]],
    usuario: ['', [Validators.required, this.validaciones.noAceptado ]], //solo se pasa la referencia, no la función
    passwd: ['', [Validators.required, Validators.minLength(6)]],
    passwd2: ['', [Validators.required]],
  },{
    //las validaciones que se pongan aqui son validaciones que se aplican de forma general sobre el formulario, indicado cuando una validación afecte a varios campos a la vez (campos iguales)
    Validators: [
      this.validaciones.camposIguales('passwd','passwd2')
    ]
  });

  constructor(
    private construirFormulario: FormBuilder,
    private validaciones: ServicioValidacion,
    private validarCorreo: ValidacionCorreo
    ) {}

  campoValido(campo: string) {
    return this.validaciones.campoValido( this.miFormulario, campo);
  }

  envio(){
    this.miFormulario.markAllAsTouched();
  }
}
