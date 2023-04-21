import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent {

  texto1: string = 'Pepe Perez';
  color: string = '';

  miFormulario: FormGroup = this.construirFormulario.group({
    nombre: ['', Validators.required]
  });

  constructor(private construirFormulario: FormBuilder){}

  hayError(campo: string): boolean{
    return this.miFormulario.get(campo)?.invalid || false ;
  }

  cambiarNombre(){
    this.texto1 = 'Manolo Martinez';
  }

  cambiarColor(){
    const color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
    this.color = color;
  }

}
