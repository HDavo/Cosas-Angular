import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

//objeto para reset (normalmente debe venir mandado por el backend)
const objetoReset = {
  name: 'Tablet',
  price: 3000,
  inStorage: 6,
}


@Component({
  templateUrl: './basic-page.component.html',
  styles: [
  ]
})
export class BasicPageComponent implements OnInit{

  /*
  //Esta es una forma de crear los formularios.
  public myForm: FormGroup = new FormGroup ({
    name: new FormControl(''),
    price: new FormControl(0),
    inStorage: new FormControl(0),
  }) */

  //la forma recomendada es esta (necesita la inyección de FormBuilder para funcionar)
  public miFormulario: FormGroup = this.construirFormulario.group({
    //se diferencia de la forma anterior en que define las propiedades como arrays
    name: ['', [ Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required, Validators.min(0)]],
    inStorage: [0, [Validators.required, Validators.min(0)]],
  })

  constructor( private construirFormulario: FormBuilder){}

  ngOnInit(): void{
    // this.miFormulario.reset( objetoReset);
  }

  //método para comprobar que un campo es válido sin tener que poner la condición dentro del HTML
  campoValido(campo: string): boolean | null {
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched
  }

  getErrorCampo(campo: string): string | null {
    if(!this.miFormulario.controls[campo]){
      return null;
    }

    const fallos = this.miFormulario.controls[campo].errors || {};

    for(const key of Object.keys(fallos)){
      switch(key){
        case 'required':
          return 'Este campo es requerido';
        case 'minlength':
          return `Mínimo ${fallos['minlength'].requiredLength } caracteres.`;
        
      }
    }

    return "Hola";
  }

  envio(): void{

    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched(); //hace que una vez se ha enviado el formulario los campos pasen a estar tocados y podamos mostrar los errores en función de esto de forma más sencilla.
      return;
    }

    console.log(this.miFormulario.value);

    /*Permite el uso de objetos para hacer el reinicio.
    Se recomienda que se ponga mediante OnInit, para que este disponible sin tiempos de espera.
    Las propiedades deben coincidir con las que definimos para nuestro formulario, 
    asi le damos el valor definido dentro de este reset a esas propiedades.
    En el caso de que tengamos alguna definida dentro del formulario con '',
    no hace falta ponerle un valor dentro del reset ya que se pone directamente.
    */
    //este reset es para después de enviar el formulario
    this.miFormulario.reset(
      {
        price: 0,
        inStorage: 0
      }
    ); //pone el formulario de vuelta a su estado inicial. 
  }
}
//TODO: poner dentro de la documentación touched, pristine... para saber que hacen cada uno de ellos.