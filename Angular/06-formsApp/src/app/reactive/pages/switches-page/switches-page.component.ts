import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './switches-page.component.html',
  styles: [
  ]
})
export class SwitchesPageComponent implements OnInit{

  public formularioValidado: FormGroup = this.construirFormulario.group({
    gender: ['M', Validators.required],
    notificaciones: [true, Validators.required],
    condiciones: [false, Validators.requiredTrue],
  });

  public persona = {
    gender: 'F',
    notificaciones: false
  };


  constructor ( private construirFormulario: FormBuilder ){}

  ngOnInit():void{
    this.formularioValidado.reset(this.persona);
  }


  campoValido(campo: string): boolean | null {
    return this.formularioValidado.controls[campo].errors && this.formularioValidado.controls[campo].touched;
  }

 /*  campoValidoArrays( arr: FormArray, index: number){
    return arr.controls[index].errors && arr.controls[index].touched;
  } */

 /*  getErrorCampo(campo: string): string | null {
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
  } */

  //onSubmit
  envio(){

    if(this.formularioValidado.invalid) {
      this.formularioValidado.markAllAsTouched();
      return;
    }

    const { condiciones, ...newPersona} = this.formularioValidado.value;

    // this.persona = this.formularioValidado.value;
    /* Si lo ponemos de esta manera, se pone dentro de persona una propiedad que no hemos definido para ella 
    de forma inicial, esto puede suponer problemas en partes del formulario que solo se usen para validar.
    
    */
    
    //al hacerlo de esta manera tenemos un objeto que solo recibe los parámetros necesarios y elegidos por nosotros
    this.persona = newPersona;

    console.log(this.formularioValidado.value);

    console.log(this.persona);
    
  }
}
