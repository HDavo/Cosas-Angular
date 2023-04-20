import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

interface MarcadorColor{
  color: string;
  marker?: mapboxgl.Marker;
  centro?: [number, number];
}
@Component({
  selector: 'app-marcadores',
  templateUrl: './marcadores.component.html',
  styles: [
   `
     .mapa-container{
      width: 100%;
      height: 100%;
    }

    .list-group{
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 99;
    }

    li{
      cursor: pointer;
    }
   `
  ]
})
export class MarcadoresComponent implements AfterViewInit{
  
  @ViewChild('mapa') divMapa!: ElementRef; //TODO: buscar información de viewchild y completar las notas con su funcionamiento
  mapa!: mapboxgl.Map;  //esta variable tiene este tipado
  zoomLevel: number = 15;
  inicio: [number, number] = [ -3.7503986001651857, 40.39743386973446 ];

  //array de marcadores
  marcadores: MarcadorColor[] = [];

  constructor(){}

  ngAfterViewInit(): void {
    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement, //se debe poner asi por ser una referencia al elemento HTML
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.inicio,
      zoom: this.zoomLevel
     });


     //se pone aqui para que si existen marcadores, se pongan una vez se ha generado el mapa
     this.leerLocalStorage();

     //una manera de poner un marcador personalizado
     /* const marcadorHtml: HTMLElement = document.createElement('div'); 
     marcadorHtml.innerHTML = 'Hola'; */

     //marcador NO DINÁMICO
    /*  const marcador = new mapboxgl.Marker({
      element: marcadorHtml
     }) //marcador dentro del mapa en la posición que hemos elegido por defecto
      .setLngLat(this.inicio)
      .addTo(this.mapa) */
  }


  agregarMarcador(){

    const color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
    console.log(color);


    const nuevoMarcador = new mapboxgl.Marker({
      draggable: true,
      color
    })
      .setLngLat( this.inicio)
      .addTo(this.mapa);

    this.marcadores.push({
      color,
      marker: nuevoMarcador
    });

    // console.log(this.marcadores);
    this.guardarMarcadorLocalStorage(); //se llama aqui al método porque asi guardamos un marcador dentro del localstorage cada vez que se guarda

    nuevoMarcador.on('dragend',() => {
      this.guardarMarcadorLocalStorage();
    });
  }

  irMarcador(marker: mapboxgl.Marker){
    // console.log(marker);

    this.mapa.flyTo({
      center: marker.getLngLat(),
    });
  }


  guardarMarcadorLocalStorage(){

    const lngLatArr: MarcadorColor[] = [];

    this.marcadores.forEach( m => {
      const color = m.color;
      const {lng, lat} = m.marker!.getLngLat();

      lngLatArr.push({
        color: m.color,
        centro: [lng, lat],
      });
    })

    localStorage.setItem('marcadores', JSON.stringify(lngLatArr)); //se usa el stringify porque dentro del localstorage solo podemos tener strings
  }

  leerLocalStorage(){

    if(!localStorage.getItem('marcadores')){ //comprobamos que no existe dentro del localStorage
      return;
    }

    const lngLatArr: MarcadorColor[] = JSON.parse(localStorage.getItem('marcadores')!);

    // console.log(lngLatArr);
    lngLatArr.forEach( m =>  {
      
      const nuevoMarcador = new mapboxgl.Marker({
        color: m.color,
        draggable: true
      })
      .setLngLat( m.centro!)
      .addTo( this.mapa);

      this.marcadores.push({
        marker: nuevoMarcador,
        color: m.color
      });

      nuevoMarcador.on('dragend',() => {
        this.guardarMarcadorLocalStorage();
      });

    });
  }

  borrarMarcador(i: number){
    console.log('Borrando marcador');
    this.marcadores[i].marker?.remove(); //esto lo borra del mapa
    this.marcadores.splice(i, 1); //lo borra del elemento html que lo muestra
    this.guardarMarcadorLocalStorage(); //actualizamos los marcadores guardados después de borrar

  }

  
}
