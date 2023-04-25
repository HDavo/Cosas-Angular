import { Component } from '@angular/core';
import { MapService, PlacesService } from '../../services';
import { Feature } from '../../interfaces/places';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent {

  public selectedId: string = '';

  constructor(
    private servicioLugares: PlacesService,
    private servicioMapas: MapService
  ){}

  get isLoadingPlaces():boolean{
    return this.servicioLugares.isLoadingPlaces;
  }

  get places(): Feature[]{
    return this.servicioLugares.places;
  }

  flyTo(place: Feature){
    this.selectedId = place.id;

    const [ lng, lat] = place.center;
    this.servicioMapas.flyTo([lng, lat]);
  }


  getDirections(place: Feature){

    if( !this.servicioLugares.useLocation) throw Error('No hay useLocation');

    this.servicioLugares.deletePlaces();

    const start = this.servicioLugares.useLocation!;
    const end = place.center as [number, number];

    this.servicioMapas.getRouteBetweenPoints(start, end);
  }
}
