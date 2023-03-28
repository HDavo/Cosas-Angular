import { Component, ViewChild, ElementRef } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
})
export class BusquedaComponent {
  // Para el caso de querer un evento de teclado
  /* buscar( event: KeyboardEvent) {
    console.log( event );
  } */

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>; 
  // ! operador para asegurarse que no tenemos un objeto null o undefined

  //inyección del servicio para poder usarlo
  constructor( private  gifsService: GifsService){}

  buscar() {
    
    const valor = this.txtBuscar.nativeElement.value;
    // console.log(this.txtBuscar);

    //esto puede ir dentro de servicio o aquí
    if (valor.trim().length === 0) {
      return;
    }
    // console.log(valor);
    this.gifsService.buscarGifs( valor );

    //para hacer que después de imprimir el valor se vuelva a poner en vacío dentro de la caja de búsqueda
    this.txtBuscar.nativeElement.value = '';
  }
}
