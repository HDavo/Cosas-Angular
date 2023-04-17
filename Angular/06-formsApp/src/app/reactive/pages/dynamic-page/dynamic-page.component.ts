import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './dynamic-page.component.html',
  styles: [
  ]
})
export class DynamicPageComponent {

  /* public formTradicional = new FormGroup({
    juegosFavoritos: new FormArray([])
  }); */

  public miFormularioDinamico: FormGroup = this.construirFormulario.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    juegosFavoritos: this.construirFormulario.array([
      ['Tekken 5', Validators.required],
      ['Batman Arkham Asylum', Validators.required]
    ])
  });

  public nuevoFavorito: FormControl = new FormControl('', [Validators.required]);


  constructor( private construirFormulario: FormBuilder) {}

  get juegosFavoritos(){
    return this.miFormularioDinamico.get('juegosFavoritos') as FormArray;
  }

  campoValido(campo: string): boolean | null {
    return this.miFormularioDinamico.controls[campo].errors && this.miFormularioDinamico.controls[campo].touched;
  }

  campoValidoArrays( arr: FormArray, index: number){
    return arr.controls[index].errors && arr.controls[index].touched;
  }

  getErrorCampo(campo: string): string | null {
    if(!this.miFormularioDinamico.controls[campo]){
      return null;
    }

    const fallos = this.miFormularioDinamico.controls[campo].errors || {};

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

  masFavoritos(): void{
    if(this.nuevoFavorito.invalid) return;

    // console.log(this.nuevoFavorito);
    const nuevoJuego = this.nuevoFavorito.value;

    this.juegosFavoritos.push(
      this.construirFormulario.control( nuevoJuego, Validators.required)
    );

    //se añade esto para que después de agregar un elemento a favoritos el campo vuelva a su estado inicial (antes seguía mostrandose el valor introducido después de pulsar el botón)
    this.nuevoFavorito.reset();
  }

  borradoFavoritos(index: number): void{ //aprovechando que los objetos se pasan por referencia, basta con aplicar sobre el array removeAt y pasarle la posición
    this.juegosFavoritos.removeAt(index);
  }

  onSubmit(): void {
    if (this.miFormularioDinamico.invalid) {
      this.miFormularioDinamico.markAllAsTouched();
      return;
    }

    console.log(this.miFormularioDinamico.value);
    //se hace esto para una vez que enviamos el formulario tener un array de juegos nuevo
    (this.miFormularioDinamico.controls['juegosFavoritos'] as FormArray) = this.construirFormulario.array([]); //para hacerlo de otra forma tendriamos que tener un getter para este elemento.
    
    this.miFormularioDinamico.reset();
  }
 //TODO: Leer documentación de https://angular.io/guide/reactive-forms para afianzar conceptos
}
