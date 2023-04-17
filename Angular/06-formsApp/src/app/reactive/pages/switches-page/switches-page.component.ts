import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './switches-page.component.html',
  styles: [
  ]
})
export class SwitchesPageComponent {

  public formularioValidado: FormGroup = this.construirFormulario.group({
    gender: ['M', Validators.required],
    notificaciones: [true, Validators.required],
    condiciones: [false, Validators.requiredTrue],
  });


  constructor ( private construirFormulario: FormBuilder ){}


  campoValido(campo: string): boolean | null {
    return this.formularioValidado.controls[campo] && this.formularioValidado.controls[campo].touched;
  }

  getErrorCampo(campo: string): string | null {
    if(!this.formularioValidado.controls[campo]){
      return null;
    }

    const fallos = this.formularioValidado.controls[campo].errors || {};

    for(const key of Object.keys(fallos)){
      switch(key){
        case 'required':
          return 'Este campo es requerido';
        case 'minlength':
          return `Mínimo ${fallos['minlength'].requiredLength } caracteres.`;
        
      }
    }

    return null;
  }

  //onSubmit
  envio(){

    if(this.formularioValidado.invalid) {
      this.formularioValidado.markAllAsTouched();
      return;
    }
  }
}
