import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  public BaseUrl: string = 'http://localhost:3000/grafica';
  constructor( private peticion: HttpClient) { }

  getUsuarios(){
    return this.peticion.get(this.BaseUrl);
  }
}
