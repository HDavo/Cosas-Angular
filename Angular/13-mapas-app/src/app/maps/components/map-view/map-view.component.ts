import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Map, Popup, Marker } from 'mapbox-gl';
import { MapService, PlacesService } from '../../services';


@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['map-view.component.css']
})
export class MapViewComponent implements AfterViewInit{

  @ViewChild('mapDiv')
  mapDivElement!: ElementRef

  constructor (private servicioLugares: PlacesService,
               private servicioMapas: MapService){}

  ngAfterViewInit(): void {

    if(!this.servicioLugares.useLocation) throw Error('No hay servicioLugares.userLocation');

    const map = new Map({
      container: this.mapDivElement.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.servicioLugares.useLocation, // starting position [lng, lat]
      zoom: 14, // starting zoom
      });

    const popup = new Popup()
      .setHTML(
        ` 
          <h6>Aquí estoy</h6>
          <span>Estoy en este lugar del mundo</span>
        `);

    new Marker({color: 'red'})
      .setLngLat( this.servicioLugares.useLocation)
      .setPopup( popup)
      .addTo( map )


      this.servicioMapas.setMap( map ); //con esto inicializamos el mapa y se establece en el servicio, teniendo asi acceso global a él
  }
  
}
