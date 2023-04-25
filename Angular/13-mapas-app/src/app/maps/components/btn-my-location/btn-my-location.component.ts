import { Component } from '@angular/core';
import { MapService, PlacesService } from '../../services';

@Component({
  selector: 'app-btn-my-location',
  templateUrl: './btn-my-location.component.html',
  styleUrls: ['./btn-my-location.component.css']
})
export class BtnMyLocationComponent {



  constructor(private servicioLugares: PlacesService,
              private servicioMapas: MapService){}

  goToMyLocation(){


    if(!this.servicioLugares.isUserLocationReady) throw Error('No hay ubicación de usuario');
    if(!this.servicioMapas.isMapReady) throw Error('No hay un mapa disponible');
    console.log('Ir a mi ubicación');

    this.servicioMapas.flyTo( this.servicioLugares.useLocation!);
    
  }
}
