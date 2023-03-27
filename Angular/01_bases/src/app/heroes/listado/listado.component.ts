import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  /* constructor(){
    console.log('Constructor'); //lo primero que se ejecuta
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    //esto se usa para inicializar servicios o peticiones 
  } */

  heroes: string [] = ['Pepe','Manolo','Antonio','Segismundo','Alberto'];

  heroeBorrado: string = '';

  borrarHeroe() {
    /* const borrado = this.heroes.pop();
    console.log('Borrando...', borrado) */
    this.heroeBorrado = this.heroes.pop() || '';

  }
}
