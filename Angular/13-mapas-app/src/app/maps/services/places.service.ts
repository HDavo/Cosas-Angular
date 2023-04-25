import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Feature, PlacesResponse } from '../interfaces/places';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  // public userLocation: [number, number] | undefined;
  public useLocation?: [number, number];
  public limit = 5;
  public isLoadingPlaces = false;
  public places: Feature[] = [];
  

  get isUserLocationReady():boolean{
    return !!this.useLocation;
    //!! el equivalente a decir que userLocation es true
  }

  constructor(private http: HttpClient) {
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
    //TODO: evaluar cuando el string sea nulo

    this.isLoadingPlaces = true;

    this.http.get<PlacesResponse>(`https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?country=es&limit=${this.limit}&language=es&access_token=pk.eyJ1IjoiaGRhdiIsImEiOiJjbGd2eG53dHYwMm5zM2RvOG9lbzRlNjB5In0.FHTo60Wh1Uxwt5446huVvQ&proximity=-7.6032680144952,43.66973524907846`)
      .subscribe( resp => {
        console.log(resp.features);


        this.isLoadingPlaces = false;
        this.places = resp.features;
        
      })
  }
}
