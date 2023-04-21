import { Directive, ElementRef, Input, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[mensaje-error]' //esto sirve para que Angular interprete la directiva, podemos poner el nombre que queramos sin usar restringidos
})
export class MensajeErrorDirective implements OnInit{

  private _color: string = 'red';
  private _mensaje: string = 'Pepe Perez. Mensaje obligatorio'

  htmlElement: ElementRef<HTMLElement>;
  // @Input() color: string = 'red'; //con esto ponemos un color por defecto, en el caso de que no se defina un color dentro del componente que usa esta directiva
  //usados antes de poner dinamismo
  /* @Input() mensaje: string = 'Tienes que rellenar este campo';
  @Input() clase: string = 'form-text'; */

  @Input() clase: string = 'form-text'; 

  @Input() set color( valor: string){
    
    this._color = valor;
    this.setColor();
  }

  @Input() set mensaje(valor:string){
    this._mensaje = valor;
    this.setMensaje();
  }
  @Input() set valido(valor:boolean){ //forma sencilla de esconder un elemento (no lo destruye)
    if(valor){
      this.htmlElement.nativeElement.classList.add('escondido');
    }else{
      this.htmlElement.nativeElement.classList.remove('escondido');
    }
  }

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

    //en este punto mensaje y color son undefined
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
    this.htmlElement.nativeElement.style.color = this._color;
  }
 
  setMensaje(){ //para definir el texto mostrado
    this.htmlElement.nativeElement.innerText = this._mensaje;
  }

  setClase(){ //para definir la clase de la etiqueta
    this.htmlElement.nativeElement.classList.add(this.clase);
  }

}
