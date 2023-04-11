import { Component } from '@angular/core';
import { interval } from 'rxjs';


@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {
  
  //i18nSelect
  nombre: string = 'Pepe';
  genero: string = 'masculino';

  articuloMapa = {
    'masculino': 'los',
    'femenino': 'las'
  }

  seleccionadosMapa = {
    'masculino': 'seleccionados',
    'femenino': 'seleccionadas'
  }

  //i18nPlural y slice
  clientes: string[] = ['María', 'Pepe', 'Antonio','Manolo','Sara','Ramón'];

  clientesMapa = {
    '=0': 'No tenemos ningún cliente esperando.',
    '=1': 'tenemos 1 cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperado'
  }

  cambiarCliente(){
    this.nombre = "Sara";
    this.genero = "femenino";
  }

  borrarCliente(){
    this.clientes.pop();
  }

  //keyvalue Pipe
  persona = {
    nombre: 'Pepe',
    edad: 45,
    direccion: 'Chinchón'
  }


  //JSON Pipe
  heroes = [
    {
      nombre: 'Pepeman',
      vuela: false
    },
    {
      nombre: 'SuperManolo',
      vuela: true
    },
    {
      nombre: 'Saramon',
      vuela: true
    },
  ]

  //Async pipe
  miObservable = interval(2000); //esto emite valores numéricos

  valorPromesa = new Promise(( resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos datos de la promesa');
    }, 3500);
  });
}
