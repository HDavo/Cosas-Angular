import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Feature, PlacesResponse } from '../interfaces/places';
import { PlacesApiClient } from '../api/places-api-client';
import { MapService } from './map.service';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  // public userLocation: [number, number] | undefined;
  public useLocation?: [number, number];
  // public limit = 5;
  public isLoadingPlaces = false;
  public places: Feature[] = [];
  

  get isUserLocationReady():boolean{
    return !!this.useLocation;
    //!! el equivalente a decir que userLocation es true
  }

  constructor(
    private lugaresApi: PlacesApiClient,
    private servicioMapas: MapService
  ) {
    this.getUserLocation();
  }


  public async getUserLocation(): Promise<[number, number]> {
    return new Promise( (resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        ({coords} ) => {
          this.useLocation = [coords.longitude, coords.latitude];
          resolve(this.useLocation);
        },
        ( err ) => {
          alert('No se pudo obtener la ubicación');
          console.log(err);
          reject();
        }
      );
    });
  }

  getPlacesByQuery(query: string = ''){
    //para evaluar cuando el string sea nulo
    if (query.length === 0) {
      this.isLoadingPlaces = false;
      this.places = [];
      return;
    }

    if(!this.useLocation) throw Error('No hay useLocation');
    
    this.isLoadingPlaces = true;

    this.lugaresApi.get<PlacesResponse>(`/${query}.json`, {
      params: {
        proximity: this.useLocation?.join(',')
      }
    })
      .subscribe( resp => {
        console.log(resp.features);

        this.isLoadingPlaces = false;
        this.places = resp.features;


        this.servicioMapas.createMarkersFromPlaces(this.places, this.useLocation!);
        
      })
  }

  deletePlaces(){
    this.places = [];
  }
}
