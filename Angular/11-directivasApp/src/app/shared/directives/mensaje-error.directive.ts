import { Directive, ElementRef, Input, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[mensaje-error]' //esto sirve para que Angular interprete la directiva, podemos poner el nombre que queramos sin usar restringidos
})
export class MensajeErrorDirective implements OnInit{

  htmlElement: ElementRef<HTMLElement>;
  @Input() color: string = 'red'; //con esto ponemos un color por defecto, en el caso de que no se defina un color dentro del componente que usa esta directiva
  @Input() mensaje: string = 'Tienes que rellenar este campo';
  @Input() clase: string = 'form-text';

  constructor(private elemento: ElementRef<HTMLElement>) {
    // console.log(elemento);
    // console.log('directiva constructor');

    this.htmlElement = elemento;
  }

  ngOnInit(): void{
    console.log('ngOnInit directiva');
    this.setColor();
    this.setMensaje();
    this.setClase();
  }

  ngOnChanges(changes: SimpleChanges): void {
    
   /*  if ( changes['mensaje'] ) {
      const mensaje = changes['mensaje'].currentValue;
      this.htmlElement.nativeElement.innerText = mensaje;
    }

    if ( changes['color'] ) {
      const color = changes['color'].currentValue;
      this.htmlElement.nativeElement.style.color = color;
    }

    console.log(changes) */

  }


  setColor(){ //para cambiar el color del texto del mensaje mostrado
    this.htmlElement.nativeElement.style.color = this.color;
  }
 
  setMensaje(){ //para definir el texto mostrado
    this.htmlElement.nativeElement.innerText = this.mensaje;
  }

  setClase(){ //para definir la clase de la etiqueta
    this.htmlElement.nativeElement.classList.add(this.clase);
  }

}
