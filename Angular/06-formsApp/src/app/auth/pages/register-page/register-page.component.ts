import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './register-page.component.html',
  styles: [
  ]
})
export class RegisterPageComponent {

  public miFormulario: FormGroup = this.construirFormulario.group({
    nombre: ['', Validators.required],
    correo: ['', Validators.required],
    usuario: ['', Validators.required],
    passwd: ['', Validators.required, Validators.minLength(6)],
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
