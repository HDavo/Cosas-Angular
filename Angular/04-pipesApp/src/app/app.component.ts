import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private primengConfig: PrimeNGConfig){} //para poder usar el efecto al pulsar los distintos botones de primeNg

  ngOnInit(){
    this.primengConfig.ripple = true;
  }

  /* title = 'pipesApp';
  nombre: string = "PePe";
  valor: number = 1000;
  obbj = {
    nombre: 'Juan Antonio'
  }

  mostrarNombre(){
    console.log(this.nombre);
    console.log(this.valor);
    console.log(this.obbj);
  } */
}
