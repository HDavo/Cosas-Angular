import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styles: [
    `
      .mapa-container{
        width: 100%;
        height: 100%;
      }

      .row{
        background-color: white;
        bottom: 50px;
        left: 50px;
        padding: 10px;
        position: fixed;
        z-index: 999;
        width: 400px;
      }
    `
  ]
})
export class ZoomRangeComponent implements AfterViewInit, OnDestroy{

  @ViewChild('mapa') divMapa!: ElementRef; //TODO: buscar información de viewchild y completar las notas con su funcionamiento
  mapa!: mapboxgl.Map;  //esta variable tiene este tipado
  zoomLevel: number = 10;
  inicio: [number, number] = [ -3.7503986001651857, 40.39743386973446 ];

  constructor(){}

  ngOnDestroy(): void { //debe ponerse un off por cada de uno de los listeners que tengamos definidos
    this.mapa.off('zoom',() => {});
    this.mapa.off('zoomend',() => {});
    this.mapa.off('move',() => {});
  }

  ngAfterViewInit(): void {

    // console.log('afterviewinit', this.divMapa);
    this.mapa = new mapboxgl.Map({
     container: this.divMapa.nativeElement, //se debe poner asi por ser una referencia al elemento HTML
     style: 'mapbox://styles/mapbox/streets-v11',
     center: this.inicio,
     zoom: this.zoomLevel
    });

    //para saber el nivel del zoom de manera precisa
    this.mapa.on('zoom', (ev) => {
  
      /* Podriamos sacar el nivel de zoom de diferente maneras, una de ellas:
      const zoomActual = this.mapa.getZoom(); //este es el nivel de zoom actual cuando movemos */
      this.zoomLevel = this.mapa.getZoom();
    });

    this.mapa.on('zoomend', (ev) => { //definimos un nivel de zoom máximo

      if(this.mapa.getZoom() > 18){
        this.mapa.zoomTo(18);
      }
    });

    //para poder indicar las coordenadas a medida que nos movemos dentro del mapa
    this.mapa.on('move', (event) => {

      const target = event.target;
      const { lng, lat } = target.getCenter();
      this.inicio = [lng, lat];

      // console.log(target.getCenter());
    })
 }


 zoomOut(){
  this.mapa.zoomOut();


 }

 zoomIn(){
  this.mapa.zoomIn();

  
 }

 cambioZoom(valor: string){
  console.log(valor);
  this.mapa.zoomTo(Number(valor));
 }
}
