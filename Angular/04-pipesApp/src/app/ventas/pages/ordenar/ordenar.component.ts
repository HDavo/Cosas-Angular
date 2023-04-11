import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {

  enMayusculas: boolean = true;
  ordenarPor: string = '';

  heroes: Heroe[] = [
    {
      nombre: 'Pepeman',
      vuela: true,
      color: Color.rojo
    },
    {
      nombre: 'Manoloman',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Saramon',
      vuela: false,
      color: Color.azul
    },
    {
      nombre: 'Super Pepe',
      vuela: true,
      color: Color.negro
    },

  ]
  
  
  cambio(){
    this.enMayusculas = !this.enMayusculas;
  }

  cambioOrden(valor: string){
    this.ordenarPor = valor;
  }
}
